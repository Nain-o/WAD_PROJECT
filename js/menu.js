
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuItems  = document.querySelectorAll('.menu-item');
  const countEl    = document.getElementById('menuCount');

  function updateCount(active) {
    const visible = active === 'all'
      ? menuItems.length
      : [...menuItems].filter(el => el.dataset.category === active).length;
    countEl.textContent = `Showing ${visible} section${visible === 1 ? '' : 's'}`;
  }

  function applyFilter(selected) {
    menuItems.forEach(item => {
      const hide = selected !== 'all' && item.dataset.category !== selected;
      item.classList.toggle('hidden', hide);
    });
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === selected);
    });
    updateCount(selected);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  
  updateCount('all');
});
