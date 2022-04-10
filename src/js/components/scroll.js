document.addEventListener('DOMContentLoaded', () => {
  const scrollItems = document?.querySelectorAll('.scroll-item');
  
  const line = document?.querySelector('.progress-line__item');

  const scrollAnimation = () => {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
      scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
      if (windowCenter >= scrollOffset) {
        el.classList.add('animation-class');
      } else {
        el.classList.remove('animation-class');
      }
    });
  };

  const progressAnimation = () => {
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let siteHeight = document.documentElement.scrollHeight;
    let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);
    line.style.width = `${percentageProgress}%`;
  };

  scrollAnimation();
  progressAnimation();
  window.addEventListener('scroll', () => {
    scrollAnimation();
    progressAnimation();
  });
});