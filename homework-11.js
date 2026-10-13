
let user = null;


const modal = document.getElementById('modal');
const openBtn = document.getElementById('modal-open');
const closeBtn = document.getElementById('modal-close');
const overlay = document.querySelector('.overlay');

function openModal() {
  modal.classList.add('modal-showed');
  overlay.classList.add('overlay-showed');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
  document.body.style.overflow = '';
}

openBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);


overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('modal-showed')) {
    closeModal();
  }
});



const subscribeForm = document.getElementById('subscribe-form');
const subscribeInput = document.getElementById('footer-email');

subscribeForm.addEventListener('submit', (event) => {
 
  event.preventDefault();
  
  
  const emailValue = subscribeInput.value;
  

  if (subscribeForm.checkValidity()) {
    console.log({ email: emailValue });
    
  }
});
const modalForm = document.getElementById('modal-form');

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const lastnameValue = document.getElementById('modal-lastname').value;
  const nameValue = document.getElementById('modal-name').value;
  const dateValue = document.getElementById('modal-date').value;
  const numberphoneValue = document.getElementById('modal-numberphone').value;
  const emailValue = document.getElementById('modal-email').value;
  const loginValue = document.getElementById('modal-login').value;
  const passwordValue = document.getElementById('modal-password').value;
  const passwordconfirmValue = document.getElementById('modal-password-confirm').value;


  
  if (!modalForm.checkValidity()) {
    alert('Заполните все поля правильно!');
    return; 
  }
  
 
  if (passwordValue !== passwordconfirmValue) {
    alert('Пароли не совпадают!');
    return;
  }
  
  const userData = {
    lastname: lastnameValue,
    name: nameValue,
    date: dateValue,
    numberphone: numberphoneValue,
    email: emailValue,
    login: loginValue,
    password: passwordValue,
    createdOn: new Date(),
  };

  user = userData;

  console.log(user);

  modalForm.reset();
  
  closeModal();
});