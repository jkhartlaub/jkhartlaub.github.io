#!/usr/bin/env python3
"""Convert files/refs.bib into _data/refs.json for Jekyll.

refs.bib is maintained by hand; this script only reads it. Run by
.github/workflows/refs_data.yml on every push that changes refs.bib, or by hand:
    python3 scripts/bib_to_data.py

Output: one object per entry, keyed like the `link:` of a publication
(_publications/*.md): the DOI in lower case if the entry has a doi field,
otherwise its url in lower case without scheme, "www." and trailing slash.
Each object has
    bibtex    the entry as shown under "BibTeX" (reference-manager fields dropped)
    abstract  the abstract as plain text with \\( \\) for math, if the entry has one
"""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "files" / "refs.bib"
OUT = ROOT / "_data" / "refs.json"
DROP = {"abstract", "urldate", "copyright", "keywords", "langid", "file"}


def read_value(s, i):
    """End index of the field value starting at s[i]: {...}, "..." or a bare word."""
    if s[i] == "{":
        depth = 0
        for j in range(i, len(s)):
            if s[j] == "{":
                depth += 1
            elif s[j] == "}":
                depth -= 1
                if depth == 0:
                    return j + 1
        return len(s)
    if s[i] == '"':
        depth = 0
        for j in range(i + 1, len(s)):
            if s[j] == "{":
                depth += 1
            elif s[j] == "}":
                depth -= 1
            elif s[j] == '"' and depth == 0:
                return j + 1
        return len(s)
    m = re.match(r"[^,}\s]+", s[i:])
    return i + (len(m.group(0)) if m else 0)


def parse(text):
    """Yield (type, key, [(name, raw value)]) for each entry."""
    entry = re.compile(r"@(\w+)\s*\{\s*([^,\s]+)\s*,")
    field = re.compile(r"\s*,?\s*([A-Za-z][\w-]*)\s*=\s*")
    pos = 0
    while True:
        m = entry.search(text, pos)
        if not m:
            return
        typ, key, i, fields = m.group(1), m.group(2), m.end(), []
        if typ.lower() in ("comment", "string", "preamble"):
            pos = i
            continue
        while True:
            f = field.match(text, i)
            if not f:
                break
            start = f.end()
            end = read_value(text, start)
            fields.append((f.group(1), text[start:end]))
            i = end
        pos = i
        yield typ, key, fields


def unwrap(raw):
    raw = raw.strip()
    if raw[:1] in "{\"" and raw[-1:] in "}\"":
        return raw[1:-1]
    return raw


LATEX = {r"{\O}": "Ø", r"{\o}": "ø", r"{\ss}": "ß", r"\ss": "ß", r"{\aa}": "å", r"{\AA}": "Å",
         r"\%": "%", r"\_": "_", r"\#": "#"}
ACCENTS = {'"': "\u0308", "'": "\u0301", "`": "\u0300", "^": "\u0302", "~": "\u0303", "c": "\u0327", "v": "\u030c"}


def clean_abstract(raw):
    s = unwrap(raw)
    s = re.sub(r"^Abstract\s+", "", s)                  # "Abstract" label copied by some publishers
    s = s.replace(r"\&", "&")
    s = html.unescape(s)                                 # &gt; and similar from publisher metadata
    s = re.sub(r"\\\$(.+?)\\\$", r"\\(\1\\)", s)         # \$...\$  -> \( ... \) for MathJax
    s = re.sub(r"(?<!\\)\$(.+?)(?<!\\)\$", r"\\(\1\\)", s)
    for k, v in LATEX.items():
        s = s.replace(k, v)
    s = re.sub(r"\{?\\([\"'`^~cv])\{?(\w)\}?\}?",
               lambda m: __import__("unicodedata").normalize("NFC", m.group(2) + ACCENTS[m.group(1)]), s)
    s = s.replace("---", "\u2014").replace("--", "\u2013")
    # braces that protect capitalization, outside math
    parts = re.split(r"(\\\(.*?\\\))", s)
    s = "".join(p if p.startswith("\\(") else p.replace("{", "").replace("}", "") for p in parts)
    s = re.sub(r"\s+", " ", s).strip()
    s = re.sub(r" ([A-Za-z]) -(?=\w)", r" \1-", s)       # "d -dimensional" from MathML extraction
    s = re.sub(r" ([,.;:)])", r"\1", s)                  # space before punctuation, same cause
    return s


def norm_key(fields):
    d = {n.lower(): unwrap(v) for n, v in fields}
    if d.get("doi"):
        return d["doi"].strip().lower()
    if d.get("url"):
        u = d["url"].strip().lower()
        u = re.sub(r"^https?://", "", u)
        u = re.sub(r"^www\.", "", u)
        return u.rstrip("/")
    return None


def main():
    text = SRC.read_text(encoding="utf-8")
    out = {}
    for typ, key, fields in parse(text):
        k = norm_key(fields)
        if not k:
            print(f"skipped {key}: no doi or url", file=sys.stderr)
            continue
        kept = [(n, v) for n, v in fields if n.lower() not in DROP]
        item = {"bibtex": "@%s{%s,\n%s\n}" % (typ, key, ",\n".join(f"  {n} = {v}" for n, v in kept))}
        ab = [v for n, v in fields if n.lower() == "abstract"]
        if ab:
            item["abstract"] = clean_abstract(ab[0])
        out[k] = item
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(f"{len(out)} entries -> {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
