//Обʼєкти з посиланнями на ДОМ елементи
export const refs = {
  // Header & Navigation
  burger: document.querySelector('.js-burger'),
  closeBtn: document.querySelector('.js-close'),
  navList: document.querySelector('.js-nav-list'),
  navLinks: document.querySelectorAll('.nav-button'),
  header: document.querySelector('.header'),

  // Hero section
  heroSection: document.querySelector('.js-hero'),
  getStartedBtn: document.querySelector('.js-hero-button'),

  // Artists list
  artistCardsContainer: document.querySelector('.js-artist-list'),
  artistCards: document.querySelectorAll('.js-artist-card'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
  loader: document.getElementById('loader'),


  // About Artist Modal
  modal: document.querySelector('.js-modal'),
  modalCloseBtn: document.querySelector('.js-modal-close'),
  modalContent: document.querySelector('.js-modal-content'),
  modalFilters: document.querySelector('.js-modal-filters'),
  modalBody: document.querySelector('.js-modal-body'),

  // About section
  aboutSection: document.querySelector('.js-about'),
  aboutImage: document.querySelector('.js-about-image'),
  aboutText: document.querySelector('.js-about-text'),

  // Feedback
  testimonialsSection: document.querySelector('.js-testimonials'),
  testimonialsSlider: document.querySelector('.js-testimonials-slider'),
  testimonialPrevBtn: document.querySelector('.js-testimonials-btn-prev'),
  testimonialNextBtn: document.querySelector('.js-testimonials-btn-next'),
  // Footer
  footer: document.querySelector('.js-footer'),
};
