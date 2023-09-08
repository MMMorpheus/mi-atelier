import { elements } from '../app.js';

export default () => {
  const { slider, prev, next } = elements;
  const sliderTrack = slider.firstElementChild;

  // Counting slides lenght
  const slidesCount = sliderTrack.children.length;
  // Counting offset value
  const offset = slider.offsetWidth;
  // Counting maximal offset value
  const maxOffsetValue = (slidesCount - 1) * offset;

  let offsetValue = 0;

  function stepBack() {
    if (offsetValue > 0) {
      offsetValue -= offset;
    } else {
      offsetValue = maxOffsetValue;
    }
    sliderTrack.style.left = `-${offsetValue}px`;
  }

  function stepForward() {
    offsetValue += offset;
    if ((offsetValue > maxOffsetValue)) {
      offsetValue = 0;
    }
    sliderTrack.style.left = `-${offsetValue}px`;
  }

  prev.addEventListener('click', stepBack);
  next.addEventListener('click', stepForward);
};
