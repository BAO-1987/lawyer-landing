import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('.site-container');
  const headerHeight = document?.querySelector('.header').offsetHeight;
  const header = document?.querySelector('.header');

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= headerHeight) {
      header?.classList.add('header--active');

    } else {
      header?.classList.remove('header--active');
    };
  });

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('nav__list--active');
    overlay?.classList.toggle('is-active');
    header?.classList.remove('header--active');

    if (menu?.classList.contains('nav__list--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Відкрити меню');
      header?.classList.remove('header--active');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Закрити меню');
      enableScroll();
    }
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      menu.classList.remove('nav__list--active');
      overlay?.classList.remove('is-active');
      enableScroll();
    });
  });
})();
