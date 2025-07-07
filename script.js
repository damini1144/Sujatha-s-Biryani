
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

document.addEventListener('DOMContentLoaded', () => {
  const form   = document.getElementById('quick‑order');
  const status = document.getElementById('form-status'); // still hides inline
  const toast  = document.getElementById('toast');

  form?.addEventListener('submit', e => {
    e.preventDefault();

    /* inline status (optional) */
    status.textContent   = 'Order sent!';
    status.className     = 'form-status ok';
    status.style.display = 'block';

    /* show toast */
    toast.textContent = '✅ Order successfully sent! We will call you shortly.';
    toast.classList.add('show');

    /* hide after 4 s */
    setTimeout(() => toast.classList.remove('show'), 4000);

    form.reset();
  });
});
