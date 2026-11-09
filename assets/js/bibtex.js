/* BibTeX toggles in the publications list (_includes/pub-links.html, oneline mode).
   Loads files/refs.bib once, finds each publication's entry by DOI (case-insensitive),
   shows the toggle only when an entry exists, and drops reference-manager fields
   (abstract, urldate, ...) from the displayed and copied entry. */
(function () {
  var toggles = document.querySelectorAll(".bibtex-toggle[data-doi]");
  if (!toggles.length) return;
  var url = document.currentScript && document.currentScript.dataset.bibUrl;
  if (!url) return;
  var DROP = ["abstract", "urldate", "copyright", "keywords", "langid", "file"];

  // Read a field value starting at s[i]: {...} with nesting, "..." or a bare word.
  function readValue(s, i) {
    if (s[i] === "{") {
      var d = 0, j = i;
      for (; j < s.length; j++) {
        if (s[j] === "{") d++;
        else if (s[j] === "}" && --d === 0) return j + 1;
      }
      return j;
    }
    if (s[i] === '"') {
      var k = i + 1, dd = 0;
      for (; k < s.length; k++) {
        if (s[k] === "{") dd++;
        else if (s[k] === "}") dd--;
        else if (s[k] === '"' && dd === 0) return k + 1;
      }
      return k;
    }
    var m = /^[^,}\s]+/.exec(s.slice(i));
    return i + (m ? m[0].length : 0);
  }

  function parse(text) {
    var out = {}, re = /@(\w+)\s*\{\s*([^,\s]+)\s*,/g, m;
    while ((m = re.exec(text))) {
      var type = m[1], key = m[2], i = re.lastIndex, fields = [];
      if (/^(comment|string|preamble)$/i.test(type)) continue;
      while (i < text.length) {
        var f = /^\s*,?\s*([A-Za-z][\w-]*)\s*=\s*/.exec(text.slice(i));
        if (!f) break;
        var start = i + f[0].length, end = readValue(text, start);
        fields.push([f[1].toLowerCase(), f[1], text.slice(start, end)]);
        i = end;
      }
      re.lastIndex = i;
      var doi = fields.filter(function (x) { return x[0] === "doi"; })[0];
      if (!doi) continue;
      var kept = fields.filter(function (x) { return DROP.indexOf(x[0]) < 0; });
      out[doi[2].replace(/^[{"]|[}"]$/g, "").trim().toLowerCase()] =
        "@" + type + "{" + key + ",\n" +
        kept.map(function (x) { return "  " + x[1] + " = " + x[2]; }).join(",\n") + "\n}";
    }
    return out;
  }

  fetch(url).then(function (r) { return r.ok ? r.text() : ""; }).then(function (text) {
    var byDoi = parse(text);
    toggles.forEach(function (btn) {
      var entry = byDoi[btn.dataset.doi];
      if (!entry) return;
      var row = btn.closest(".pub-links"), box = row && row.nextElementSibling;
      if (!box || !box.classList.contains("bibtex")) return;
      box.querySelector(".bibtex__entry").textContent = entry;
      btn.parentNode.hidden = false;
      btn.addEventListener("click", function () {
        box.hidden = !box.hidden;
        btn.setAttribute("aria-expanded", String(!box.hidden));
      });
      var copy = box.querySelector(".bibtex__copy");
      copy.addEventListener("click", function () {
        navigator.clipboard.writeText(entry).then(function () {
          copy.textContent = "copied";
          setTimeout(function () { copy.textContent = "copy"; }, 1500);
        });
      });
    });
  });
})();
