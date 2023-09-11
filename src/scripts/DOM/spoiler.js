import { elements } from '../app.js';

export default () => {
  const { spoilerEl } = elements;

  spoilerEl.forEach((el) => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.spoiler__btn');
      const content = self.querySelector('.spoiler__content');

      control.classList.toggle('spoiler__btn-active');
      content.classList.toggle('spoiler__content-active');

      if (content.classList.contains('spoiler__content-active')) {
        control.parentElement.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        control.parentElement.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }

      console.log(control, content)
    });
  });
};
