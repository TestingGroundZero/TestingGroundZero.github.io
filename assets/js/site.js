
(() => {
  const root = document.documentElement;
  const navButton = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const themeButton = document.querySelector('[data-theme-toggle]');
  const storedTheme = localStorage.getItem('thegospel-theme');

  if (storedTheme === 'dark' || storedTheme === 'light') {
    root.dataset.theme = storedTheme;
  }

  if (navButton && nav) {
    navButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navButton.setAttribute('aria-expanded', String(open));
    });
  }

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('thegospel-theme', next);
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
