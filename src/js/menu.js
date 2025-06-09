const burger = document.querySelector('.js-burger');
const closeBtn = document.querySelector('.js-close');
const navList = document.querySelector('.js-nav-list');
const navLinks = document.querySelectorAll('.nav-button');
const header = document.querySelector('.header');

// Відкриття бургер-меню
burger.addEventListener('click', () => {
  navList.classList.add('is-open');
});

// Закриття бургер-меню по хрестику
closeBtn.addEventListener('click', () => {
  navList.classList.remove('is-open');
});

// Плавний перехід та закриття при кліку на пункт меню
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerHeight = header.offsetHeight;
      const offsetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      navList.classList.remove('is-open');
    }
  });
});
