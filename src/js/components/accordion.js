const questions = document?.querySelectorAll(".faq__item");

questions.forEach((el) => {

  el.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== el) {
        item.classList.remove("faq__item--active");
      }
    });

    el.classList.toggle("faq__item--active");
  });
});
