"""Build the static reading page and dialog from the checked-in research Markdown.

Supports the small document format used here: headings, paragraphs, links,
bold text, flat lists and tables. Raw HTML is escaped; no runtime dependencies.
"""
from pathlib import Path
from html import escape
import re

root = Path(__file__).resolve().parents[1] / 'dist'
source = (root / 'assets/research/analysis.md').read_text(encoding='utf-8-sig')

def inline(text):
    text = escape(text)
    text = re.sub(r'\[([^\]]+)\]\((https://[^\s)]+)\)', r'<a href="\2" target="_blank" rel="noopener noreferrer">\1</a>', text)
    return re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)

blocks, toc, paragraph = [], [], []
lines = source.splitlines()
i = 0

def flush():
    if paragraph:
        blocks.append('<p>' + inline(' '.join(paragraph)) + '</p>')
        paragraph.clear()

while i < len(lines):
    line = lines[i].strip()
    if not line:
        flush()
    elif line.startswith('# '):
        flush()
        blocks.append('<h1>' + inline(line[2:]) + '</h1>')
    elif line.startswith('## '):
        flush()
        anchor = 'reading-' + str(len(toc)+1)
        toc.append((anchor, line[3:]))
        blocks.append(f'<h2 id="{anchor}" tabindex="-1">{inline(line[3:])}</h2>')
    elif line.startswith('|'):
        flush()
        rows=[]
        while i<len(lines) and lines[i].strip().startswith('|'):
            row=[cell.strip() for cell in lines[i].strip().strip('|').split('|')]
            if not all(re.fullmatch(r'[-: ]+',cell) for cell in row):
                rows.append(row)
            i+=1
        table='<div class="reading-table" tabindex="0" role="region" aria-label="Таблица цен"><table><thead><tr>'
        table+=''.join('<th scope="col">'+inline(c)+'</th>' for c in rows[0])+'</tr></thead><tbody>'
        table+=''.join('<tr>'+''.join('<td>'+inline(c)+'</td>' for c in row)+'</tr>' for row in rows[1:])
        blocks.append(table+'</tbody></table></div>')
        continue
    elif re.match(r'^\d+\. ',line):
        flush()
        items=[]
        while i<len(lines) and re.match(r'^\d+\. ',lines[i].strip()):
            items.append('<li>'+inline(re.sub(r'^\d+\. ','',lines[i].strip()))+'</li>')
            i+=1
        blocks.append('<ol>'+''.join(items)+'</ol>')
        continue
    else:
        paragraph.append(line)
    i+=1
flush()

nav='<details class="reading-toc" open><summary>В этом разборе</summary><nav aria-label="Оглавление разбора">'+''.join(f'<a href="#{anchor}">{escape(title)}</a>' for anchor,title in toc)+'</nav></details>'
article='<article class="reading-article">'+''.join(blocks)+'</article>'
body='<div class="reading-scroll">'+nav+article+'</div>'
close='<button class="icon-button" id="document-close" aria-label="Закрыть разбор"><svg><use href="#close"/></svg></button>'
header='<div class="reading-header"><div><h2 id="document-title">Полный разбор iLumen</h2><p>10 ноября 2026 · проверено в браузере</p></div>'+close+'</div>'
# An article h1 belongs to the standalone document; the dialog already has a title.
dialog='<dialog id="document-viewer" aria-labelledby="document-title">'+header+body.replace('<h1>','<h3 class="reading-title">').replace('</h1>','</h3>')+'</dialog>'
start='<!-- reading-view:start -->'
end='<!-- reading-view:end -->'
index=(root/'index.html').read_text(encoding='utf-8')
replacement=start+'\n'+dialog+'\n'+end
if start in index:
    index=re.sub(re.escape(start)+r'.*?'+re.escape(end),lambda _:replacement,index,flags=re.S)
else:
    index=index.replace('  <noscript>',replacement+'\n  <noscript>')
if 'reading.css' not in index:
    index=index.replace('<link rel="stylesheet" href="research.css">','<link rel="stylesheet" href="research.css">\n  <link rel="stylesheet" href="reading.css">\n  <script src="reading.js" defer></script>')
(root/'index.html').write_text(index,encoding='utf-8')
(root/'analysis.html').write_text('<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Полный разбор iLumen</title><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="reading.css"></head><body class="reading-page"><header class="reading-header"><a class="text-button" href="index.html#market">Вернуться к презентации</a><span>iLumen · 10 ноября 2026</span></header><main>'+body+'</main></body></html>',encoding='utf-8')
print(f'Built reading page and dialog: {len(toc)} sections')
