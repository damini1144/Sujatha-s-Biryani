
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav-list');
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
});
