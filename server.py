from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os

os.chdir(Path(__file__).resolve().parent / 'dist')
print('Local: http://127.0.0.1:4173', flush=True)
ThreadingHTTPServer(('0.0.0.0', 4173), SimpleHTTPRequestHandler).serve_forever()
