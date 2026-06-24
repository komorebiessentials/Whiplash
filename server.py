#!/usr/bin/env python3
"""
Live-edit dev server for SDE Interview Prep.

Usage:
  python3 server.py          # starts on http://localhost:3000

Open any page in the browser. A floating "Claude Edit" panel appears.
Type what you want changed, hit Send — Claude applies it and the page reloads.
"""
import json
import os
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse

OVERLAY = """
<script>
(function() {
  var PANEL_ID = '__ce_panel';
  if (document.getElementById(PANEL_ID)) return;

  var panel = document.createElement('div');
  panel.id = PANEL_ID;
  panel.style.cssText = [
    'position:fixed', 'bottom:20px', 'right:20px', 'width:320px',
    'background:#1a1a1a', 'border-radius:14px', 'padding:14px 16px',
    'z-index:99999', 'box-shadow:0 12px 40px rgba(0,0,0,.5)',
    'font-family:system-ui,-apple-system,sans-serif',
    'border:1px solid #333', 'transition:opacity .2s'
  ].join(';');

  panel.innerHTML = [
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">',
      '<span style="color:#fff;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase">',
        '&#10022; Claude Edit',
      '</span>',
      '<span id="__ce_file" style="color:#666;font-size:10px;font-family:monospace;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></span>',
    '</div>',
    '<textarea id="__ce_input" rows="3" placeholder="What do you want to change?" ',
      'style="width:100%;box-sizing:border-box;background:#262626;border:1.5px solid #3a3a3a;',
      'border-radius:8px;color:#f0f0f0;padding:8px 10px;font-size:13px;line-height:1.5;',
      'resize:vertical;outline:none;font-family:inherit;min-height:64px">',
    '</textarea>',
    '<div style="display:flex;gap:8px;margin-top:8px;align-items:center">',
      '<button id="__ce_send" onclick="__ceSend()" ',
        'style="flex:1;background:#D97757;color:#fff;border:none;border-radius:7px;',
        'padding:8px 12px;font-size:12px;font-weight:600;cursor:pointer;letter-spacing:.03em">',
        'Send to Claude &rarr;',
      '</button>',
      '<button onclick="__ceToggle()" ',
        'style="background:#2a2a2a;color:#888;border:1px solid #3a3a3a;border-radius:7px;',
        'padding:8px 10px;font-size:12px;cursor:pointer">Hide</button>',
    '</div>',
    '<div id="__ce_status" style="margin-top:8px;font-size:11px;color:#666;min-height:16px;font-family:monospace"></div>'
  ].join('');

  document.body.appendChild(panel);

  // Show current filename
  var fname = location.pathname.replace(/^\\//, '') || 'index.html';
  document.getElementById('__ce_file').textContent = fname;

  // Cmd+` toggles the panel
  var visible = true;
  window.__ceToggle = function() {
    visible = !visible;
    panel.style.opacity = visible ? '1' : '0';
    panel.style.pointerEvents = visible ? 'auto' : 'none';
  };
  document.addEventListener('keydown', function(e) {
    if (e.key === '`' && (e.metaKey || e.ctrlKey)) __ceToggle();
  });

  // Focus textarea on Enter in panel
  document.getElementById('__ce_input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); __ceSend(); }
  });

  function setStatus(msg, col) {
    var el = document.getElementById('__ce_status');
    el.textContent = msg;
    el.style.color = col || '#888';
  }

  window.__ceSend = function() {
    var req = document.getElementById('__ce_input').value.trim();
    if (!req) { setStatus('Type a request first.', '#e07'); return; }
    var btn = document.getElementById('__ce_send');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    setStatus('Request sent — waiting for Claude…', '#D97757');

    fetch('/edit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file: fname, request: req })
    })
    .then(function(r) { return r.json(); })
    .then(function() {
      document.getElementById('__ce_input').value = '';
      pollDone();
    })
    .catch(function() { setStatus('Error sending request.', '#e07'); btn.disabled = false; btn.textContent = 'Send to Claude →'; });
  };

  function pollDone() {
    fetch('/status')
      .then(function(r) { return r.json(); })
      .then(function(d) {
        if (!d.pending) {
          setStatus('Done! Reloading…', '#6a9f5b');
          setTimeout(function() { location.reload(); }, 500);
        } else {
          setTimeout(pollDone, 1000);
        }
      })
      .catch(function() { setTimeout(pollDone, 2000); });
  }
})();
</script>
<script>
/* ---- Progress Tracker ---- */
(function(){
  var HLD_KEYS = ['url-shortener-hld','notification-system-hld','pastebin-hld',
    'twitter-feed-hld','whatsapp-hld','netflix-hld','uber-hld','google-drive-hld',
    'search-autocomplete-hld','distributed-cache-hld','rate-limiter-service-hld',
    'payment-system-hld','booking-system-hld','real-time-analytics-hld',
    'ad-auction-hld','distributed-tracing-hld'];
  var CONCEPT_KEYS = ['consistent-hashing','cap-theorem','solid-principles','caching',
    'rate-limiting','concurrency','database-internals','distributed-consensus',
    'event-driven-architecture','microservices-patterns','observability','security-fundamentals'];
  var ALL_KEYS = HLD_KEYS.concat(CONCEPT_KEYS);

  var path = (location.pathname.replace(/^\\/|\\.html$/g,'') || 'index');
  var isContent  = ALL_KEYS.indexOf(path) !== -1;
  var isHLDIdx   = path === 'hld-index';
  var isConIdx   = path === 'concepts-index';

  function getP(){try{return JSON.parse(localStorage.getItem('__pg_done')||'{}')}catch(e){return {}}}
  function setP(p){try{localStorage.setItem('__pg_done',JSON.stringify(p))}catch(e){}}

  /* === Content page: simple Mark Done button === */
  if(isContent){
    var btn = document.createElement('button');
    btn.id = '__pt_btn';
    function render(){
      var done = !!getP()[path];
      btn.textContent = done ? '\\u2713 Done' : 'Mark Done';
      btn.style.cssText = [
        'position:fixed','bottom:20px','left:20px','z-index:99998',
        'padding:8px 16px','border-radius:8px','border:none','cursor:pointer',
        'font-family:system-ui,sans-serif','font-size:12px','font-weight:700',
        'letter-spacing:.04em','transition:background .2s,transform .1s',
        'box-shadow:0 4px 16px rgba(0,0,0,.3)',
        'background:'+(done?'#788C5D':'#D97757'),'color:white'
      ].join(';');
    }
    btn.onclick = function(){
      var p = getP(); p[path] = !p[path]; setP(p); render();
    };
    render();
    document.body.appendChild(btn);
  }

  /* === Index helper: add badge + "done" label to a card === */
  function decorateCard(card, key, thumbSel, bodyBottomSel){
    if(!getP()[key]) return;
    /* green DONE badge on thumbnail */
    var thumb = card.querySelector(thumbSel);
    if(thumb){
      var b = document.createElement('span');
      b.style.cssText = 'position:absolute;top:10px;left:10px;background:#788C5D;color:white;font-size:9px;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.05em;z-index:2';
      b.textContent = 'DONE';
      thumb.style.position='relative'; thumb.appendChild(b);
    }
    /* green tick at bottom of card body */
    var body = card.querySelector(bodyBottomSel);
    if(body){
      var t = document.createElement('div');
      t.style.cssText = 'margin-top:8px;padding-top:8px;border-top:1px solid #E6E3DA;font-family:monospace;font-size:10px;color:#788C5D;font-weight:700';
      t.textContent = '\\u2713 done';
      body.appendChild(t);
    }
  }

  /* === HLD index === */
  if(isHLDIdx){
    var p = getP();
    var dc = HLD_KEYS.filter(function(k){return p[k]}).length;
    addBanner(document.querySelector('header'), dc, HLD_KEYS.length);
    document.querySelectorAll('a.problem-card').forEach(function(card){
      var key = (card.getAttribute('href')||'').replace('.html','');
      decorateCard(card, key, '.card-thumb', '.card-body');
    });
  }

  /* === Concepts index === */
  if(isConIdx){
    var p = getP();
    var dc = CONCEPT_KEYS.filter(function(k){return p[k]}).length;
    addBanner(document.querySelector('header.masthead'), dc, CONCEPT_KEYS.length);
    document.querySelectorAll('a.card').forEach(function(card){
      var key = (card.getAttribute('href')||'').replace('.html','');
      decorateCard(card, key, '.thumb', '.body');
    });
  }

  function addBanner(parent, done, total){
    if(!parent) return;
    var pct = Math.round(done/total*100);
    var bar = document.createElement('div');
    bar.style.cssText = 'display:inline-flex;align-items:center;gap:12px;margin-top:16px;padding:9px 16px;background:rgba(120,140,93,.1);border:1.5px solid rgba(120,140,93,.25);border-radius:10px;font-size:13px;font-family:system-ui,sans-serif';
    bar.innerHTML =
      '<span style="color:#788C5D;font-weight:700">'+done+' / '+total+' done</span>'+
      '<span style="display:inline-block;width:100px;height:6px;border-radius:3px;background:#e0e0d8;overflow:hidden">'+
        '<span style="display:block;height:100%;width:'+pct+'%;background:#788C5D;border-radius:3px;transition:width .3s"></span>'+
      '</span>'+
      '<span style="font-family:monospace;font-size:11px;color:#87867F">'+pct+'%</span>';
    parent.appendChild(bar);
  }
})();
</script>
"""

def overlay_bytes():
    return OVERLAY.encode('utf-8')

MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css':  'text/css',
    '.js':   'application/javascript',
    '.json': 'application/json',
    '.svg':  'image/svg+xml',
    '.png':  'image/png',
    '.ico':  'image/x-icon',
}

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        path = urlparse(self.path).path
        if path == '/status':
            pending = os.path.exists('_request.txt')
            self._json({'pending': pending})
            return

        filepath = path.lstrip('/') or 'index.html'
        if not os.path.isfile(filepath):
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'404 Not found')
            return

        ext = os.path.splitext(filepath)[1]
        with open(filepath, 'rb') as f:
            content = f.read()

        if ext == '.html':
            # Inject overlay before </body>
            content = content.replace(b'</body>', overlay_bytes() + b'</body>', 1)

        self.send_response(200)
        self.send_header('Content-Type', MIME.get(ext, 'application/octet-stream'))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(content)

    def do_POST(self):
        if self.path == '/edit':
            length = int(self.headers.get('Content-Length', 0))
            body = json.loads(self.rfile.read(length).decode())
            with open('_request.txt', 'w') as f:
                f.write('FILE: {}\nREQUEST: {}'.format(body['file'], body['request']))
            self._json({'ok': True})
        else:
            self.send_response(404)
            self.end_headers()

    def _json(self, data):
        payload = json.dumps(data).encode()
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(payload)

    def log_message(self, fmt, *args):
        pass  # silence request logs


if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    port = 3000
    server = HTTPServer(('', port), Handler)
    print('')
    print('  Claude Live Edit Server')
    print('  -----------------------')
    print('  http://localhost:{}'.format(port))
    print('')
    print('  1. Open any page in the browser above')
    print('  2. Type a change in the floating panel (bottom-right)')
    print('  3. Hit "Send to Claude" or Cmd+Enter')
    print('  4. Claude applies the change, page auto-reloads')
    print('')
    print('  Cmd+` toggles the edit panel on/off')
    print('')
    print('  Press Ctrl+C to stop')
    print('')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n  Server stopped.')
