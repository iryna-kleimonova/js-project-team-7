import { refs } from './refs.js';


window.history.scrollRestoration = 'manual';


const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = target.getBoundingClientRect().top + window.scrollY - refs.header.offsetHeight;
  window.scrollTo({ top: offset, behavior: 'smooth' });
};


const closeMobileMenu = () => {
  refs.navList.classList.remove('is-open');
  document.body.classList.remove('body-lock');
};


const openMobileMenu = () => {
  refs.navList.classList.add('is-open');
  document.body.classList.add('body-lock');

  refs.navLinks.forEach(link => {
    link.classList.remove('active');
    link.blur();
  });
};

const activateNavLink = (activeLink) => {
  refs.navLinks.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
  activeLink.blur();
};


const handleScrollHighlight = () => {
  const scrollPos = window.scrollY + refs.header.offsetHeight + 5;

  refs.navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('http')) return;

    const section = document.getElementById(href.slice(1));
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
      link.classList.add('active');
      link.blur();
    } else {
      link.classList.remove('active');
    }
  });
};


refs.burger.addEventListener('click', openMobileMenu);
refs.closeBtn.addEventListener('click', closeMobileMenu);


document.querySelectorAll('.header-logo').forEach(logo => {
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
  });
});


refs.navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href === '#' || href.startsWith('http')) return;

  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = href.slice(1);
    scrollToSection(id);
    activateNavLink(link);
    closeMobileMenu();
    history.replaceState(null, null, ' ');
  });
});


window.addEventListener('scroll', handleScrollHighlight);


window.addEventListener('load', () => {
  if (window.location.hash) {
    setTimeout(() => {
      window.scrollTo(0, 0);
      history.replaceState(null, null, ' ');
    }, 0);
  }
});