const user = {
  firstName: "Muslim",
  lastName: "Ibragim",
  age: 40,
  email: "mmibragim88@gmail.com",
  country: "Tajikistan",
  city: "Dushanbe",
  jobStatus: "driver",
  isStudent: true,
  skills: ["HTML", "CSS", "JS", "React", "Node.js"]
};

const car = {
  brand: "KIA",
  model: "Cerato",
  year: 2018,
  color: "yellow",
  engine: "1.6L",
  transmission: "MECHANICS",
  mileage: 500000
};

// Привязка владельца
car.owner = user;

console.log(`Владелец машины ${car.brand} ${car.model} — ${car.owner.firstName}.`);
console.log(`Тип коробки: ${car.transmission}.`);

// Функция проверки максимальной скорости
function checkMaxSpeed(auto) {
  if (!("maxSpeed" in auto)) {
    auto.maxSpeed = 195;
    console.log("Свойство maxSpeed было добавлено!");
  } else {
    console.log("Свойство уже существует, ничего не меняем.");
  }
}

checkMaxSpeed(car);
console.log(car);

// Функция получения значения свойства
function getPropertyValue(obj, key) {
  console.log(`Значение свойства "${key}":`, obj[key]);
}

getPropertyValue(user, "city");
getPropertyValue(car, "model");

// Массив косметических продуктов
const productNames = ["Крем для лица", "Маска для волос", "Сыворотка", "Пенка для умывания", "Тоник"];
console.log(productNames);

// Работа с библиотекой книг
const library = [
  { title: "Сахих Муслим", author: "Имам Муслим", genre: "Сборник хадисов" },
  { title: "Сахих аль-Бухари", author: "Имам аль-Бухари", genre: "Сборник хадисов" },
  { title: "Рияд ас-Салихин", author: "Имам ан-Навави", genre: "Сборник хадисов" }
];

console.log("Начальный список книг:", library);

library.push({ title: "40 хадисов", author: "Имам ан-Навави", genre: "Сборник хадисов" });
console.log("Обновленный список книг:", library);

const fantasyBooks = [
  { title: "Братство Кольца", author: "Дж. Р. Р. Толкин", genre: "Фэнтези" },
  { title: "Две крепости", author: "Дж. Р. Р. Толкин", genre: "Фэнтези" },
  { title: "Возвращение короля", author: "Дж. Р. Р. Толкин", genre: "Фэнтези" }
];

// Объединение массивов
const allBooks = [...library, ...fantasyBooks];
console.log("Все книги вместе после объединения:", allBooks);

// Функция маркировки редких книг
function markRareBooks(booksArray) {
  return booksArray.map(book => {
    return {
      ...book,
      isRare: book.genre === "Фэнтези"
    };
  });
}

const evaluatedLibrary = markRareBooks(allBooks);

console.log("Оригинальный массив (не изменился):", allBooks);
console.log("Новый массив с отметками редкости (isRare):", evaluatedLibrary);
