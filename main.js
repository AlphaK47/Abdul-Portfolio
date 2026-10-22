const hero = document.querySelector('.hero');
document.documentElement.dataset.enhanced = 'true';

/* Motion layer: CSS performs the transition; ScrollTrigger controls entry. */
requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('loaded')));
setTimeout(() => hero.classList.add('loaded'), 450);

// Small-screen navigation remains keyboard and touch accessible.
const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
if (nav && menuToggle) {
  nav.classList.add('menu-ready');
  const closeMenu = (restoreFocus = false) => {
    nav.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) menuToggle.focus();
  };
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => closeMenu(true)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('menu-open')) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (nav.classList.contains('menu-open') && !nav.contains(event.target)) closeMenu();
  });
  addEventListener('resize', () => { if (innerWidth > 860) closeMenu(); }, { passive: true });
}
document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('page-hidden', document.hidden);
});
const revealAll = () => document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
window.addEventListener('load', () => {
  if (!window.gsap || !window.ScrollTrigger) { revealAll(); return; }
  try {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal:not(.hero .reveal)').forEach(el =>
      ScrollTrigger.create({ trigger: el, start: 'top 88%', onEnter: () => el.classList.add('is-in') }));
  } catch (_) { revealAll(); }
});
setTimeout(() => { if (!window.gsap || !window.ScrollTrigger) revealAll(); }, 2500);
