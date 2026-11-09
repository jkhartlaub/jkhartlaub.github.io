/* Citation and BibTeX toggles of publications (_includes/pub-links.html, oneline mode),
   on the publications list and on publication pages. The box contents are in the HTML;
   this only shows the toggles (hidden without JavaScript), opens a toggle's box below
   the link line (closing the other one of the same publication), and makes "copy"
   copy the box's text as plain text. */
(function () {
  document.querySelectorAll(".pub-toggle").forEach(function (btn) {
    var box = document.getElementById(btn.getAttribute("aria-controls"));
    if (!box) return;
    btn.parentNode.hidden = false;
    btn.addEventListener("click", function () {
      var open = box.hidden;
      btn.closest(".pub-links").querySelectorAll(".pub-toggle").forEach(function (other) {
        var b = document.getElementById(other.getAttribute("aria-controls"));
        if (b) b.hidden = true;
        other.setAttribute("aria-expanded", "false");
      });
      box.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
    var copy = box.querySelector(".pub-box__copy");
    copy.addEventListener("click", function () {
      var el = box.querySelector(".pub-box__text");
      var text = el.tagName === "PRE" ? el.textContent : el.textContent.replace(/\s+/g, " ").trim();
      navigator.clipboard.writeText(text).then(function () {
        copy.textContent = "copied";
        setTimeout(function () { copy.textContent = "copy"; }, 1500);
      });
    });
  });
})();
