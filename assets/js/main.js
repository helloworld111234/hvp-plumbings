(function() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  const nav = document.querySelector('.site-nav');
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (nav && btn && menu) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        nav.setAttribute('aria-expanded', 'true');
        menu.style.display = 'flex';
      } else {
        nav.removeAttribute('aria-expanded');
        menu.style.display = 'none';
      }
    });
  }
})();