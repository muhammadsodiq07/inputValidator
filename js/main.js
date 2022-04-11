const form = document.querySelector('#form');
let inps = document.querySelectorAll('.inp');
let nameInp = document.querySelector('.name-inp');
let mailInp = document.querySelector('.mail-inp');
let passInp = document.querySelector('.pass-inp');
let conPassInp = document.querySelector('.pass-conf-inp');


let cont = document.querySelector('.cont');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   inps.forEach(item => {
      if (item.value == '') {
         item.classList.add('red');
         item.classList.remove('green');
      } else if (item.value != '') {
         item.classList.remove('red');
         item.classList.add('green');
      }
   })

   checkEmail();
   confirmPassword();
})

inps.forEach(item => {
   item.addEventListener('click', (e) => {
      
      cont.addEventListener('click', () => {
         if (item.value == '') {
            item.classList.add('red');
            item.classList.remove('green');
         } else {
            item.classList.remove('red');
            item.classList.add('green');
         }
      })
   })
})

function confirmPassword(e) {

   if (passInp.value != conPassInp.value || (passInp.value.length < 8 && conPassInp.value.length < 8)) {

      passInp.classList.add('red');
      conPassInp.classList.add('red');
      passInp.classList.remove('green');
      conPassInp.classList.remove('green');
   } else if (passInp.value == conPassInp.value) {
      
      confirm();

      function confirm(e) {
         if (passInp.value.length >= 8 && conPassInp.value.length >= 8) {
            passInp.classList.remove('red');
            conPassInp.classList.remove('red');
            passInp.classList.add('green');
            conPassInp.classList.add('green');
         }
      }
   }
} 

function checkEmail(e) {
   if (/^\S+@\S+\.\S+$/.test(mailInp.value)) {
      mailInp.classList.remove('red');
      mailInp.classList.add('green');
   } else {
      mailInp.classList.remove('green');
      mailInp.classList.add('red');
   }
}
