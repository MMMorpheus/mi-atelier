// Utils
import documentReady from './utils/DOMLoaded.js';
import navigation from './utils/navigation.js';

// DOM manipulation
import burger from './DOM/burger.js';
import reviewsSlider from './DOM/reviewsSlider.js';

// DOM elements
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu]');
const footerMenuEl = document.querySelector('[data-footerMenu]');
const contactLinkEl = document.querySelector('[data-contact]');
const slider = document.querySelector('[data-slider]');
const prev = document.querySelector('[data-prev]');
const next = document.querySelector('[data-next]');

export const elements = {
  burgerEl,
  menuEl,
  slider,
  prev,
  next,
};

documentReady(() => {
  burger();
  reviewsSlider();

  footerMenuEl.addEventListener('click', (e) => navigation(e));
  contactLinkEl.addEventListener('click', (e) => navigation(e));
});
