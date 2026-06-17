
document.addEventListener('DOMContentLoaded', () => {

  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/*
  Upcoming interactive features (built page-by-page as the project progresses):
  - menu.html   -> category filter / live search over the menu items (Milestone 2)
  - order.html  -> custom order / catering form validation (Milestone 3)
*/
