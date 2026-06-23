

document.addEventListener('DOMContentLoaded', () => {

  
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  
  const toggle = document.getElementById('themeToggle');
  const icon   = document.getElementById('themeIcon');

  function applyTheme(dark) {
    document.body.classList.toggle('dark-mode', dark);
    if (icon) icon.className = dark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    if (toggle) toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    localStorage.setItem('hc-theme', dark ? 'dark' : 'light');
  }

  const saved = localStorage.getItem('hc-theme');
  applyTheme(saved === 'dark');

  if (toggle) {
    toggle.addEventListener('click', () => {
      applyTheme(!document.body.classList.contains('dark-mode'));
    });
  }

});