// I've added a small amount of JS to run some UI/UX logic, nothing too crazy.
// The first script lets the page reset to the top after a reload, and the second brings the 
// "btnScrollToTop" onto the screen after the user scrolls past the first page.
history.scrollRestoration = 'manual';

const btnScrollToTop = document.querySelector(".btnScrollToTop");

window.addEventListener('scroll', e => {
  btnScrollToTop.style.display = window.scrollY > 700 ? 'block' : 'none';
});