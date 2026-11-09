/* Citation and BibTeX toggles of publications (_includes/pub-links.html, oneline mode),
   on the publications list and on publication pages.
   Each toggle opens its box below the link line (and closes the other one of the same
   publication); "copy" copies the box's text as plain text.
   BibTeX: loads files/refs.bib once, finds each publication's entry by DOI
   (case-insensitive), shows the toggle only when an entry exists, and drops
   reference-manager fields (abstract, urldate, ...) from the shown and copied entry. */
(function () {
  var script = document.currentScript;
  var DROP = ["abstract", "urldate", "copyright", "keywords", "langid", "file"];

  function setup(btn) {
    var box = document.getElementById(btn.getAttribute("aria-controls"));
    if (!box) return;
    btn.parentNode.hidden = false;
    btn.addEventListener("click", function () {
      var open = box.hidden;
      var row = btn.closest(".pub-links");
      row.querySelectorAll(".pub-toggle").forEach(function (other) {
        var b = document.getElementById(other.getAttribute("aria-controls"));
        if (b) b.hidden = true;
        other.setAttribute("aria-expanded", "false");
      });
      box.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
    var copy = box.querySelector(".pub-box__copy");
    copy.addEventListener("click", function () {
      var text = box.querySelector(".pub-box__text").textContent;
      if (box.querySelector("p.pub-box__text")) text = text.replace(/\s+/g, " ").trim();
      navigator.clipboard.writeText(text).then(function () {
        copy.textContent = "copied";
        setTimeout(function () { copy.textContent = "copy"; }, 1500);
      });
    });
  }

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

  function parseBib(text) {
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

  document.querySelectorAll(".pub-toggle:not([data-doi])").forEach(setup);

  var bibToggles = document.querySelectorAll(".pub-toggle[data-doi]");
  var url = script && script.dataset.bibUrl;
  if (!bibToggles.length || !url) return;
  fetch(url).then(function (r) { return r.ok ? r.text() : ""; }).then(function (text) {
    var byDoi = parseBib(text);
    bibToggles.forEach(function (btn) {
      var entry = byDoi[btn.dataset.doi];
      var box = document.getElementById(btn.getAttribute("aria-controls"));
      if (!entry || !box) return;
      box.querySelector(".pub-box__text").textContent = entry;
      setup(btn);
    });
  });
})();
