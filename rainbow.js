// Optional enhancement: the rainbow arc starts as coloring-book outlines and is colored in
// when it scrolls into view. Without this script (or with reduced motion) it is simply colored.
(function () {
  var art = document.querySelector('.rainbow');
  if (!art || !('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  art.classList.add('will-color');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { art.classList.add('is-colored'); io.disconnect(); }
    });
  }, { threshold: 0.45 });
  io.observe(art);
})();
