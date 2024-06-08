history.scrollRestoration = 'manual';

const btnScrollToTop = document.querySelector(".btnScrollToTop");

window.addEventListener('scroll', e => {
  btnScrollToTop.style.display = window.scrollY > 700 ? 'block' : 'none';
});