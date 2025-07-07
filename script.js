
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav-list');
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
});

 window.addEventListener('scroll', () => {
      const button = document.querySelector('.floating-whatsapp');
      if (button && !button.classList.contains('blink')) {
        button.classList.add('blink');
      }
    });