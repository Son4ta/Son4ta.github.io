const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  nav.classList.toggle("is-open", open);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav?.classList.contains("is-open")) {
    menu.click();
    menu.focus();
  }
});
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const search = document.querySelector("#publication-search");
function filterPapers() {
  const selected = document.querySelector('[data-filter][aria-pressed="true"]')?.dataset.filter || "all";
  const query = search?.value.trim().toLowerCase() || "";
  let count = 0;
  document.querySelectorAll("#publication-list .paper-card").forEach((card) => {
    const show = (selected === "all" || card.dataset.topic === selected) && card.dataset.search.includes(query);
    card.hidden = !show;
    if (show) count++;
  });
  const result = document.querySelector("#filter-result");
  if (result)
    result.textContent = count
      ? `Showing ${count} publication${count === 1 ? "" : "s"}`
      : "No matching publications. Try another topic or search term.";
}
filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    filterPapers();
  })
);
search?.addEventListener("input", filterPapers);
const dialog = document.querySelector("#figure-dialog");
document.querySelectorAll("[data-figure]").forEach((button) =>
  button.addEventListener("click", () => {
    const image = document.querySelector("#enlarged-figure");
    image.src = button.dataset.figure;
    image.alt = button.dataset.caption;
    document.querySelector("#figure-label").textContent = button.dataset.caption;
    if (dialog && typeof dialog.showModal === "function") dialog.showModal();
    else window.open(button.dataset.figure, "_blank", "noopener");
  })
);
document.querySelector("[data-close-dialog]")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  }
});
document.querySelector("[data-print]")?.addEventListener("click", () => window.print());
document.querySelector("[data-back-top]")?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
});

// Modest motion on the decorative research diagram; respect reduced-motion preferences.
document.querySelectorAll(".company-watermark").forEach((image) => image.setAttribute("draggable", "false"));
