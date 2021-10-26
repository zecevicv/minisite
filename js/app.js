// Header

const header = document.querySelector('.header');
const hamburger = document.querySelector('.header-hamburger');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.toggle('show-menu');
});