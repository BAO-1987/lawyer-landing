document.addEventListener('DOMContentLoaded', () => {
  const accordions = document?.querySelectorAll('.faq__item');


  // for (item of accordions) {

  //   item.addEventListener('click', function () {
  //     if (this.classList.contains('is-open')) {
  //       this.classList.remove('is-open');


  //     } else {
  //       for (el of accordions) {
  //         el.classList.remove('is-open');

  //       }
  //       this.classList.add('is-open');
  //     }
  //   })
  // };

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.faq__btn');
      const content = self.querySelector('.faq__text');


      self.classList.toggle('is-open');
      //если открыт аккордеон
      if (self.classList.contains('is-open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-expanded', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-expanded', true);
        content.style.maxHeight = null;
      }
    });
  });

});
