
const productCards = document.querySelectorAll('.card-container');
const firstProductCard = document.querySelector('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all-button');
const changeColorFirstCardButton = document.querySelector('#change-color-first-button');
const openGoogleButton = document.querySelector('#open-google');


// Цветовые константы
const redColorHash = '#ff3c00';
const blackColorHash = '#080809';

// Перекрашивание всех карточек
changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = redColorHash;
  });
});

// Перекрашивание только первой карточки
changeColorFirstCardButton.addEventListener('click', () => {
  if (firstProductCard) {
    firstProductCard.style.backgroundColor = blackColorHash;
  }
});

// Open Google
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true) {
    window.open('https://google.com', '_blank');
  }
}

// Вывод  консоль log

const outputLogButton = document.querySelector('#output-console-log'); 

outputLogButton.addEventListener('click', () => outputConsoleLog('homework 06'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message);
}

//кнопки меняющие цвет
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () =>{
    button.classList.toggle('btn-changed');
  })
})

const mainTitle = document.getElementById('main-title');


mainTitle.addEventListener('mouseenter', (event) => {
  console.log(event.target.textContent.trim());
});