document.getElementById('year').textContent = new Date().getFullYear();
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const menu = document.getElementById('nav-menu');
if (btn && nav && menu) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-expanded', String(!expanded));
  });
}