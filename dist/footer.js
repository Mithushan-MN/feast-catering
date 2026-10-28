/* Footer controls stay attached while the main page changes. */
(() => {
  document.querySelectorAll('[data-footer-year]').forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });
  const floating = document.querySelector('.back-to-top');
  let frame = 0;
  function sync() {
    frame = 0;
    if (floating) floating.hidden = window.scrollY < 500;
  }
  function update() {
    if (!frame) frame = requestAnimationFrame(sync);
  }
  document.addEventListener('click', event => {
    if (!event.target.closest('[data-back-to-top]')) return;
    const heading = document.querySelector('main h1') || document.querySelector('main');
    if (heading) {
      if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.body.classList.contains('motion-paused');
    window.scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' });
    update();
  });
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  window.addEventListener('popstate', update);
  sync();
})();
