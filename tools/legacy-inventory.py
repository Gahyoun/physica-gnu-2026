"""Inventory bank wrappers; preserve source HTML in a private analysis cache only.

This is deliberately independent of the Flash ledger: a Java wrapper does not
become restored merely because a related textbook section has been rewritten.
"""
import concurrent.futures as cf
import hashlib
import json
import re
import urllib.parse as U
import urllib.request as R
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CACHE = Path('/private/tmp/physica-legacy-inventory')


class Programs(HTMLParser):
    def __init__(self, url):
        super().__init__()
        self.url = url
        self.programs = []
        self.current = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ('object', 'applet'):
            self.current = dict(a)
            self.programs.append(self.current)
        elif tag == 'param' and self.current is not None:
            self.current[a.get('name', '').lower()] = a.get('value', '')
        elif tag == 'embed':
            self.programs.append(dict(a))
        elif tag == 'iframe' and a.get('src'):
            self.programs.append({'iframe': U.urljoin(self.url, a['src'])})

    def handle_endtag(self, tag):
        if tag in ('object', 'applet'):
            self.current = None


def inspect(row):
    url = row['source']
    cached = CACHE / U.unquote(U.urlsplit(url).path).lstrip('/')
    try:
        if cached.exists():
            raw = cached.read_bytes()
        else:
            req = R.Request(url, headers={'User-Agent': 'PhysicaGNU-restoration/1.0'})
            with R.urlopen(req, timeout=15) as response:
                raw = response.read(2_000_001)
            if len(raw) > 2_000_000:
                raise ValueError('Wrapper exceeds 2 MB')
            cached.parent.mkdir(parents=True, exist_ok=True)
            cached.write_bytes(raw)
        text = raw.decode('cp949', errors='replace')
        parser = Programs(url)
        parser.feed(text)
        programs = []
        for p in parser.programs:
            code = p.get('code', '')
            base = U.urljoin(url, p.get('codebase') or p.get('java_codebase') or './')
            if code.endswith('.class') or 'java' in p.get('type', ''):
                item = {'format': 'Java', 'class': code,
                        'codebase': base,
                        'archives': [U.urljoin(base, x.strip()) for x in p.get('archive', '').split(',') if x.strip()],
                        'parameters': {k: v for k, v in p.items() if k not in ('style', 'classid', 'align', 'type')}}
            elif p.get('iframe'):
                item = {'format': 'HTML', 'url': p['iframe']}
            else:
                swf = p.get('movie') or p.get('src') or p.get('data')
                if not swf or not swf.lower().endswith('.swf'):
                    continue
                item = {'format': 'Flash', 'url': U.urljoin(url, swf)}
            if item not in programs:
                programs.append(item)
        # Some old wrappers put SWFs in AC_FL_RunContent rather than <object>.
        for value in re.findall(r'["\']([^"\'<>\s]+\.swf)["\']', text, flags=re.I):
            # The universal wrapper template contains this example in a comment.
            if U.urlsplit(value).path.endswith('abs/abs.swf'):
                continue
            item = {'format': 'Flash', 'url': U.urljoin(url, value)}
            if item not in programs:
                programs.append(item)
        # Deduplicate object/embed Java entries by executable identity.
        by_identity = {}
        for item in programs:
            identity = (item['format'], item.get('url'), item.get('class'), tuple(item.get('archives', [])))
            by_identity.setdefault(identity, item)
        return {**row, 'sha256': hashlib.sha256(raw).hexdigest(),
                'programs': list(by_identity.values()), 'available': True}
    except Exception as e:
        return {**row, 'available': False, 'error': str(e), 'programs': []}


if __name__ == '__main__':
    catalog = json.loads((ROOT / 'src/catalog.json').read_text())
    rows = list({r['source']: r for r in catalog['materials']}.values())
    with cf.ThreadPoolExecutor(max_workers=6) as pool:
        records = list(pool.map(inspect, rows))
    counts = {f: sum(any(p['format'] == f for p in r['programs']) for r in records)
              for f in ('Java', 'HTML', 'Flash')}
    report = {'date': datetime.now(timezone.utc).isoformat(), 'scope': 'original bank wrappers',
              'wrappers': len(records), 'available': sum(r['available'] for r in records),
              'formatCounts': counts, 'records': records}
    (ROOT / 'docs/legacy-inventory.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({k: v for k, v in report.items() if k != 'records'}, ensure_ascii=False))
