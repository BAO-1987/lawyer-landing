const header = document?.querySelector('.header');
const first = document?.querySelector('.hero');
const headerHeight = document?.querySelector('.header').offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= firstHeight) {
    header.classList.add('header--active');

  } else {
    header.classList.remove('header--active');

  };

});



