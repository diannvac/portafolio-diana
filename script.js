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

/* Menú móvil: se cierra al elegir un enlace */
(function () {
  var menu = document.getElementById("mainMenu");
  if (!menu || !window.bootstrap) return;
  menu.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      var instance = window.bootstrap.Collapse.getInstance(menu);
      if (instance && menu.classList.contains("show")) instance.hide();
    });
  });
})();
