function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Москве', 22);
showWeather('Токио', 18);
showWeather('Лондоне', -2);

const SPEED_OF_LIGHT = 299792458

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(500); 
checkSpeed(299792458); 
checkSpeed(400000000); 


const productName = 'Сахих Муслим';


const productPrice = 500;


function buyProduct(budget) {
    if (budget >= productPrice) {
        console.log(`"${productName}" приобретён. Спасибо за покупку!`);
    } else {
        
        const missingAmount = productPrice - budget;
        console.log(`Вам не хватает ${missingAmount}₽, пополните баланс`);
    }
}


buyProduct(600); 
buyProduct(350); 

function sayWelcome(){
console.log("Добро пожаловать в Ислам! первый урок таухида усвоен успешно")
}
sayWelcome();

const subjectName = 'Таухид';
let totalLessons = 3;
let completedLessons = 1;

console.log(`Изучаем предмет: ₽{subjectName}`);
console.log(`Всего уроков в курсе: ₽{totalLessons}`);
console.log(`Успешно пройдено уроков: ₽{completedLessons}`);