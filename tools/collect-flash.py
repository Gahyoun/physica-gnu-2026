"""Survey original SWFs and wrappers without running their scripts.

Original HTML/decompiled scripts remain in a private research cache. Published
SWFs retain their original bytes, paths and attribution for Ruffle playback.
"""
import concurrent.futures as cf
import hashlib,json,re,ssl,struct,urllib.parse as U,urllib.request as R,zlib,os
from html.parser import HTMLParser
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
CACHE=Path('/private/tmp/physica-flash-cache')
BASE='http://physica.gnu.ac.kr/'
CTX=ssl.create_default_context(cafile='/etc/ssl/cert.pem')
catalog=json.loads((ROOT/'src/catalog.json').read_text())
lessons={p['id']:p for p in catalog['lessons']}
files={};wrappers={};failures=[]
OFFLINE=os.environ.get('PHYSICA_FLASH_OFFLINE')=='1'

def canonical(url):
 p=U.urlsplit(url)
 if p.hostname!='physica.gnu.ac.kr' or '/bomb/' in p.path or p.path.endswith('/abs/abs.swf'):return None
 relative=U.unquote(p.path.lstrip('/'))
 if '..' in relative.split('/') or '\x00' in relative:return None
 return BASE+U.quote(relative,safe='/._-')

class Embeds(HTMLParser):
 def __init__(self,url):
  super().__init__();self.url=url;self.swfs=set();self.html=set()
 def handle_starttag(self,t,a):
  d=dict(a);urls=[]
  if t in ('object','embed','iframe'):urls=[d.get('src',''),d.get('data','')]
  if t=='param' and d.get('name','').lower() in ('movie','src'):urls=[d.get('value','')]
  for raw in urls:
   u=canonical(U.urljoin(self.url,raw)) if raw else None
   if not u:continue
   if u.lower().endswith('.swf'):self.swfs.add(u)
   elif t=='iframe' and u.lower().endswith('.html'):self.html.add(u)

def parse(raw,url):
 p=Embeds(url);text=raw.decode('cp949',errors='replace');p.feed(text)
 # Adobe AC_FL_RunContent puts the path in JS string literals.
 for m in re.finditer(r'''["']([^"'<>\s]+\.swf(?:\?[^"']*)?)["']''',text,re.I):
  u=canonical(U.urljoin(url,m[1]))
  if u:p.swfs.add(u)
 for m in re.finditer(r'''["'](?:src|movie)["']\s*,\s*["']([^"']+)["']''',text,re.I):
  raw=m[1];u=canonical(U.urljoin(url,raw if raw.lower().endswith('.swf') else raw+'.swf'))
  if u:p.swfs.add(u)
 return p

def associate(target,url,lesson_id,title=''):
 if not url:return
 rec=target.setdefault(url,{'lessons':set(),'titles':set()})
 if lesson_id:rec['lessons'].add(lesson_id)
 if title:rec['titles'].add(title)

def fetch(url):
 path=CACHE/U.unquote(U.urlsplit(url).path).lstrip('/')
 if path.exists():return path.read_bytes()
 archived=ROOT.parent/'archive/original'/U.unquote(U.urlsplit(url).path).lstrip('/')
 if archived.exists():data=archived.read_bytes()
 else:
  if OFFLINE:raise ConnectionError('Original server unavailable; file not yet cached')
  with R.urlopen(R.Request(url,headers={'User-Agent':'PhysicaGNU-restoration/1.0'}),timeout=8,context=CTX) as r:data=r.read(12_000_001)
  if len(data)>12_000_000:raise ValueError('Resource exceeds 12MB limit')
 path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(data);return data

for p in catalog['lessons']:
 if p['title']=='핵무기':continue
 raw=(Path('/private/tmp/physica-related')/(p['id']+'.html')).read_bytes()
 found=parse(raw,p['source'])
 for u in found.swfs:associate(files,u,p['id'])
 for u in found.html:associate(wrappers,u,p['id'])

# Retain older SWF counterparts of converted Canvas embeds when preserved locally.
for local in (ROOT.parent/'archive/original').rglob('*.swf'):
 relative=local.relative_to(ROOT.parent/'archive/original').as_posix();url=canonical(BASE+relative)
 if not url:continue
 if url in files:continue
 name=local.stem.replace('patch','')
 for p in catalog['lessons']:
  if p['title']=='핵무기':continue
  text=(Path('/private/tmp/physica-related')/(p['id']+'.html')).read_bytes().decode('cp949',errors='replace')
  if name+'_Canvas.html' in text:associate(files,url,p['id'])

# The dedicated Flash catalog also contains files absent from the current embeds.
xml=(ROOT.parent/'archive/original/pxml/flashList.xml').read_bytes().decode('cp949')
tree=ET.fromstring(re.sub(r'<\?xml[^>]*\?>','',xml))
for c in tree.findall('.//c'):
 lid=(c.findtext('o') or '').replace('|','-');ref=c.findtext('r') or ''
 if lid in lessons and lessons[lid]['title']=='핵무기':continue
 url=canonical(U.urljoin(BASE,'phtml/'+ref.replace('.xml','.html')))
 title=c.findtext('mt') or c.findtext('t') or ''
 name=ref.rsplit('/',1)[-1].replace('.xml','').lower()
 matches=[u for u in files if u.rsplit('/',1)[-1].replace('.swf','').lower()==name]
 if len(matches)==1:
  u=matches[0];associate(files,u,lid,title);files[u].setdefault('wrappers',set()).add(url)
 else:associate(wrappers,url,lid,title)

def scan_wrapper(item):
 url,rec=item
 try:return url,rec,parse(fetch(url),url),None
 except Exception as e:return url,rec,None,str(e)

seen=set()
for depth in range(3):
 pending=[(u,r) for u,r in wrappers.items() if u not in seen and not any(x in u for x in ['_Canvas.html','/processing.js/','/p5.js/','/three.js/'])]
 if not pending:break
 with cf.ThreadPoolExecutor(max_workers=2) as pool:
  for n,(url,rec,found,error) in enumerate(pool.map(scan_wrapper,pending),1):
   seen.add(url)
   if error:failures.append({'source':url,'kind':'wrapper','error':error});continue
   for swf in found.swfs:
    for lid in rec['lessons'] or ['']:
     associate(files,swf,lid)
     files[swf]['titles'].update(rec['titles']);files[swf].setdefault('wrappers',set()).add(url)
   for child in found.html:
    for lid in rec['lessons'] or ['']:associate(wrappers,child,lid)
   if n%25==0:print('Wrappers',depth,n,'/',len(pending),flush=True)

def swf_info(raw):
 if raw[:3] not in (b'FWS',b'CWS',b'ZWS'):raise ValueError('Not an SWF')
 if raw[:3]==b'ZWS':raise ValueError('LZMA SWF needs explicit decoder')
 data=raw[8:] if raw[:3]==b'FWS' else zlib.decompress(raw[8:])
 declared=int.from_bytes(raw[4:8],'little')
 if len(data)+8!=declared:raise ValueError('SWF declared length mismatch')
 bits=''.join(format(b,'08b') for b in data[:20]);n=int(bits[:5],2);v=[]
 for i in range(4):
  s=bits[5+i*n:5+(i+1)*n];x=int(s,2);v.append(x-(1<<n) if s[0]=='1' else x)
 pos=(5+4*n+7)//8;fps=int.from_bytes(data[pos:pos+2],'little')/256;frames=int.from_bytes(data[pos+2:pos+4],'little');pos+=4
 codes=[];as3=False
 while pos+2<=len(data):
  h=int.from_bytes(data[pos:pos+2],'little');pos+=2;code=h>>6;size=h&63
  if size==63:size=int.from_bytes(data[pos:pos+4],'little');pos+=4
  payload=data[pos:pos+size];pos+=size;codes.append(code)
  if code==69 and len(payload)>=4:as3=bool(int.from_bytes(payload[:4],'little')&8)
  if code==0:break
 if pos>len(data):raise ValueError('Truncated SWF tag')
 # Dependency candidates are strings only, never executable code.
 dependencies=[]
 for s in re.findall(rb'[\x20-\x7e]{4,}',data):
  text=s.decode('ascii')
  if re.fullmatch(r'(?:https?://[^\s]+/)?[\w./%-]+\.(?:swf|xml|txt|png|jpg|jpeg|gif|mp3|flv|dat|csv)',text,re.I):dependencies.append(text)
 return {'width':(v[1]-v[0])/20,'height':(v[3]-v[2])/20,'frameRate':fps,'frames':frames,'version':raw[3],'actionScript':3 if as3 else 2,'tags':sorted(set(codes)),'dependencyCandidates':sorted(set(dependencies))}

def download(item):
 url,rec=item
 try:
  raw=fetch(url);info=swf_info(raw);relative=U.unquote(U.urlsplit(url).path).lstrip('/')
  out=ROOT/'assets/flash/original'/relative;out.parent.mkdir(parents=True,exist_ok=True);out.write_bytes(raw)
  return {'id':'flash-'+hashlib.sha256(url.encode()).hexdigest()[:16],'source':url,'file':'assets/flash/original/'+relative,'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest(),'lessons':sorted(rec['lessons']),'titles':sorted(rec['titles']),'wrappers':sorted(rec.get('wrappers',[])),**info,'status':'collected'},None
 except Exception as e:return None,{'source':url,'kind':'swf','error':str(e),'lessons':sorted(rec['lessons'])}

records=[]
with cf.ThreadPoolExecutor(max_workers=2) as pool:
 for n,(record,error) in enumerate(pool.map(download,sorted(files.items())),1):
  if error:failures.append(error)
  else:records.append(record)
  if n%25==0:print('SWF',n,'/',len(files),flush=True)

out={'date':'2026-10-05','author':'정기수 교수님','sourceBase':BASE,'engine':{'name':'Ruffle','version':'0.6.0','source':'https://github.com/ruffle-rs/ruffle/releases/tag/v0.6.0'},'files':records,'failures':failures}
(ROOT/'src/flash-manifest.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'swfs':len(records),'references':sum(len(r['lessons']) for r in records),'failures':len(failures),'bytes':sum(r['bytes'] for r in records)},ensure_ascii=False),flush=True)
