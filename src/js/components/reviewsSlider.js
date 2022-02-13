import _vars from '../_vars';
import Swiper, {
  Pagination,
  Navigation
} from 'swiper';

Swiper.use([Pagination, Navigation]);

new Swiper(_vars.reviewsSlider, {
  slidesPerView: "auto",
  spaceBetween: 40,

  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev',
  },

  pagination: {
    el: ".swiper-bullets",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
    }
  }

});
