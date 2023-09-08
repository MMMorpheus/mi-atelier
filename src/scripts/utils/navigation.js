export default (e) => {
  try {
    e.preventDefault();
    const targetEl = document.querySelector(e.target.dataset?.target);
    const scrollDistanse = targetEl?.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: scrollDistanse,
      behavior: 'smooth',
    });
  } catch (e) {
    console.log(e);
  }
};
