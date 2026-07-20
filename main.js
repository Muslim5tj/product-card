
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
for (let i = 1; i <= 5; i++) {
  const button = document.getElementById(`colorButton${i}`);
  
  if (button) {
    button.addEventListener('click', () => {
      // Переключаем класс для смены цвета конкретной кнопки
      button.classList.toggle('btn-changed');
      
      // Выводим сообщение (опционально, можно удалить)
      console.log(`Товар №${i} добавлен в корзину`);
    });
  }
}

const mainTitle = document.getElementById('main-title');


mainTitle.addEventListener('mouseenter', (event) => {
  console.log(event.target.textContent.trim());
});