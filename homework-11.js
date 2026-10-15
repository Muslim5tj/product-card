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

// Форма подписки в футере
const subscribeForm = document.getElementById('subscribe-form');
const subscribeInput = document.getElementById('footer-email');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = subscribeInput.value;
  
  if (subscribeForm.checkValidity()) {
    console.log({ email: emailValue });
  }
});

// Форма регистрации в модальном окне
const modalForm = document.getElementById('modal-form');

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!modalForm.checkValidity()) {
    alert('Заполните все поля правильно!');
    return;
  }

  const formData = new FormData(modalForm);
  const formObject = Object.fromEntries(formData.entries());

  if (formObject.password !== formObject['password-confirm']) {
    alert('Пароли не совпадают!');
    return;
  }

  formObject.createdOn = new Date();
  delete formObject['password-confirm'];
  user = formObject;
  console.log(user);

  modalForm.reset();
  closeModal();
});