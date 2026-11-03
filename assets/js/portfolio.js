(function () {
  "use strict";
  var menu = document.querySelector(".menu-toggle");
  var nav = document.querySelector("#navigation");
  if (menu && nav)
    menu.addEventListener("click", function () {
      var open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("is-open", open);
    });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav && nav.classList.contains("is-open")) {
      menu.click();
      menu.focus();
    }
  });
  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var search = document.querySelector("#publication-search");
  function filterPapers() {
    var active = document.querySelector('[data-filter][aria-pressed="true"]');
    var selected = active ? active.dataset.filter : "all";
    var query = search ? search.value.trim().toLowerCase() : "";
    var count = 0;
    Array.prototype.forEach.call(document.querySelectorAll("#publication-list .paper-card"), function (card) {
      var show = (selected === "all" || card.dataset.topic === selected) && card.dataset.search.indexOf(query) !== -1;
      card.hidden = !show;
      if (show) count++;
    });
    var result = document.querySelector("#filter-result");
    if (result)
      result.textContent = count
        ? "Showing " + count + " publication" + (count === 1 ? "" : "s")
        : "No matching publications. Try another topic or search term.";
  }
  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      filters.forEach(function (item) {
        item.setAttribute("aria-pressed", String(item === button));
      });
      filterPapers();
    });
  });
  if (search) search.addEventListener("input", filterPapers);
  var dialog = document.querySelector("#figure-dialog");
  Array.prototype.forEach.call(document.querySelectorAll("[data-figure]"), function (button) {
    button.addEventListener("click", function () {
      if (!dialog || typeof dialog.showModal !== "function") {
        window.open(button.dataset.figure, "_blank", "noopener");
        return;
      }
      var image = document.querySelector("#enlarged-figure");
      image.src = button.dataset.figure;
      image.alt = button.dataset.caption;
      document.querySelector("#figure-label").textContent = button.dataset.caption;
      dialog.showModal();
    });
  });
  var close = document.querySelector("[data-close-dialog]");
  if (close && dialog)
    close.addEventListener("click", function () {
      dialog.close();
    });
  if (dialog)
    dialog.addEventListener("click", function (event) {
      if (event.target !== dialog) return;
      var rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)
        dialog.close();
    });
  var print = document.querySelector("[data-print]");
  if (print)
    print.addEventListener("click", function () {
      window.print();
    });
  var top = document.querySelector("[data-back-top]");
  if (top)
    top.addEventListener("click", function (event) {
      event.preventDefault();
      var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });
  Array.prototype.forEach.call(document.querySelectorAll(".company-watermark"), function (image) {
    image.setAttribute("draggable", "false");
  });
})();
