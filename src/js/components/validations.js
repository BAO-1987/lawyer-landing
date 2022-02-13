import _vars from '../_vars';

import JustValidate from "just-validate";

import Inputmask from "inputmask";


console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+380 99-999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
  .addField('.input-name', [{
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введіть не менше трьох букв!'
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введіть Ім’я!'
    }
  ])
  .addField('.input-mail', [{
      rule: 'required',
      value: true,
      errorMessage: 'Введіть свою електронну пошту',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введіть коректну електронну пошту',
    },
  ])

     .addField('#consent_checkbox', [{
       rule: 'required',
       value: true,
       errorMessage: 'Ви не надали згоду на оброку своїх персональних даних'
     }, ])


  .addField('.input-tel', [{
      rule: 'required',
      value: true,
      errorMessage: 'Введіть коректний номер телефону',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 9;
      },
      errorMessage: 'Введите коректний телефон',
    },


  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });
