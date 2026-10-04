"""Extract factual headings, mathematical notation and media URLs, never prose.

The local survey cache is populated by collect-related.py. Original HTML and
programs stay outside the public repository. A normal build uses the JSON snapshot.
"""
import json,re,hashlib,tempfile,urllib.parse,os
from html.parser import HTMLParser
from pathlib import Path
root=Path(__file__).resolve().parents[1]
cache=Path(os.environ.get('PHYSICA_SURVEY_CACHE',str(Path(tempfile.gettempdir())/'physica-related')))
class Survey(HTMLParser):
 def __init__(self,url):
  super().__init__();self.url=url;self.skip=0;self.heading=None;self.anchor='';self.groups=[];self.group=None;self.media=[]
 def handle_starttag(self,t,a):
  d=dict(a)
  if t in ('script','style'):self.skip+=1
  if t=='a' and d.get('name'):self.anchor=d['name']
  if t=='h4':
   self.group={'title':'','anchor':self.anchor,'equations':[],'buffer':[]};self.groups.append(self.group);self.heading=self.group
  if t in ('iframe','object','embed','applet'):
   src=d.get('src') or d.get('data') or d.get('code')
   if src:self.media.append({'kind':t,'source':urllib.parse.urljoin(self.url,src)})
 def handle_endtag(self,t):
  if t in ('script','style'):self.skip=max(0,self.skip-1)
  if t=='h4':self.heading=None
 def handle_data(self,d):
  if self.skip:return
  if self.heading is not None:self.heading['title']+=d
  if self.group is not None:self.group['buffer'].append(d)
 def result(self):
  out=[]
  for g in self.groups:
   title=re.sub(r'\s+',' ',g['title']).strip()
   if not title or len(title)>110:continue
   # Formulae are mathematical facts; omit prose and the original questions.
   text=' '.join(g['buffer']);text=re.split(r'\[질문\s*\d',text)[0]
   equations=[re.sub(r'\s+',' ',e).strip() for e in re.findall(r'\\\[([\s\S]*?)\\\]',text)]
   out.append({'title':title,'anchor':g['anchor'],'equations':list(dict.fromkeys(equations))})
  return out
catalog=json.loads((root/'src/catalog.json').read_text());records=[]
for lesson in catalog['lessons']:
 raw=(cache/(lesson['id']+'.html')).read_bytes();parser=Survey(lesson['source']);parser.feed(raw.decode('cp949',errors='replace'))
 # These two pages use the independently authored mass/energy and history guide.
 sections=[] if lesson['title']=='핵무기' else parser.result()
 media=[] if lesson['title']=='핵무기' else list({r['source']:r for r in parser.media}.values())
 records.append({'id':lesson['id'],'sha256':hashlib.sha256(raw).hexdigest(),'sections':sections,'media':media})
(root/'src/book-survey.json').write_text(json.dumps({'date':'2026-10-05','pages':records},ensure_ascii=False,indent=2)+'\n')
print('Survey:',len(records),'pages;',sum(len(p['sections']) for p in records),'sections;',sum(len(s['equations']) for p in records for s in p['sections']),'equations')
