// 1. Получаем элементы со страницы
const productCards = document.querySelectorAll('.card-container');
const firstProductCard = document.querySelector('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all-button');
const changeColorFirstCardButton = document.querySelector('#change-color-first-button');
const openGoogleButton = document.querySelector('#open-google');
const outputLogButton = document.querySelector('#output-console-log'); 
const mainTitle = document.getElementById('main-title');

// Цветовые константы для карточек
const redColorHash = '#ff3c00';
const blackColorHash = '#080809';

// 2. Перекрашивание всех карточек
changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = redColorHash;
  });
});

// 3. Перекрашивание только первой карточки
changeColorFirstCardButton.addEventListener('click', () => {
  if (firstProductCard) {
    firstProductCard.style.backgroundColor = blackColorHash;
  }
});

// 4. Открытие Google с подтверждением
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true) {
    window.open('https://google.com', '_blank');
  }
}

// 5. Вывод сообщения в alert и консоль лог
outputLogButton.addEventListener('click', () => outputConsoleLog('كُلُّ нَفْسٍ ذَائِقَةُ الْمَوْتِ'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// 6. НАВЕДЕНИЕ НА ЗАГОЛОВОК: Вывод текста в консоль
if (mainTitle) {
  mainTitle.addEventListener('mouseenter', (event) => {
    console.log(event.target.textContent.trim());
  });
}

// 7. КНОПКА МЕНЯЮЩАЯ ЦВЕТ (Только для первой карточки)
const firstBuyButton = document.querySelector('.card-container .button');

if (firstBuyButton) {
  firstBuyButton.addEventListener('click', () => {
    // Переключаем класс для смены цвета
    firstBuyButton.classList.toggle('btn-changed');
    console.log('Цвет первой кнопки успешно изменен!');
  });
}

