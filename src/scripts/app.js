// Utils
import documentReady from './utils/DOMLoaded.js';

// DOM manipulation
import burger from './DOM/burger.js';
import reviewsSlider from './DOM/reviewsSlider.js'

// DOM elements
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu');
const menuItemsEl = document.querySelectorAll('[data-menu-item]');
const slider = document.querySelector('[data-slider]');
const prev = document.querySelector('[data-prev]');
const next = document.querySelector('[data-next]');

export const elements = {
  burgerEl,
  menuEl,
  menuItemsEl,
  slider,
  prev,
  next
};

documentReady(() => {
  burger();
  reviewsSlider();
});
