const root = document.documentElement;
const themeButton = document.querySelector('[data-theme-toggle]');
const menuButton = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

themeButton?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('portfolio-theme', next);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#101116' : '#f4f2ed');
});

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  items.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
