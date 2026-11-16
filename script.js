/* Botón "volver arriba": aparece al bajar y sube al inicio de la página */
(function () {
  var btn = document.getElementById("scrollTop");
  if (!btn) return;

  function toggle() {
    btn.classList.toggle("is-visible", window.scrollY > 400);
  }

  btn.addEventListener("click", function () {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
})();
