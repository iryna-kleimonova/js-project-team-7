import { refs } from './refs.js';


refs.burger.addEventListener('click', () => {
  refs.navList.classList.add('is-open');
});


refs.closeBtn.addEventListener('click', () => {
  refs.navList.classList.remove('is-open');
});

refs.navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const headerHeight = refs.header.offsetHeight;
      const offsetTop =
        targetEl.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });


      if (refs.navList.classList.contains('is-open')) {
        refs.navList.classList.remove('is-open');
      }
    }
  });
});
