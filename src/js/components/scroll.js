const header = document?.querySelector('.header');
const headerHeight = document?.querySelector('.header').offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= headerHeight) {
    header.classList.add('header--active');

  } else {
    header.classList.remove('header--active');
  };

});

