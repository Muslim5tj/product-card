import { products } from "./products.js";

// --- 1. Функция для получения количества карточек ---
const getCardsCount = () => {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(userInput, 10);

  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Вы ввели неверное значение. Будут показаны все карточки.");
    return products.length;
  }

  return count;
};

// --- 2. Функция для отрисовки (рендеринга) ---
const renderProducts = (productsList) => {
  const productsContainer = document.querySelector(".products-list");

  if (!productsContainer) return;

  productsContainer.innerHTML = "";

  productsList.forEach((product) => {
    // Создаем главный контейнер карточки
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Картинка
    const img = document.createElement("img");
    img.src = product.imgUrl;
    img.alt = `товар ${product.title}`;
    img.classList.add("product-card__image");
    card.append(img);

    // Заголовок
    const title = document.createElement("h2");
    title.classList.add("product-card__title");
    title.textContent = product.title;
    card.append(title);

    // Описание
    const desc = document.createElement("p");
    desc.classList.add("product-card__description");
    desc.textContent = product.description;
    card.append(desc);

    //БЛОК СОСТАВА
    const compoundContainer = document.createElement("div");
    compoundContainer.classList.add("product-card__compound");

    // Создаем три отдельных состава
    const line1 = document.createElement("p");
    line1.style.margin = "0";
    line1.textContent = product.compound1;

    const line2 = document.createElement("p");
    line2.style.margin = "0";
    line2.textContent = product.compound2;

    const line3 = document.createElement("p");
    line3.style.margin = "0";
    line3.textContent = product.compound3;

    //контейнер состава
    compoundContainer.append(line1, line2, line3);
    card.append(compoundContainer);

    // Блок цены
    const priceBox = document.createElement("div");
    priceBox.classList.add("product-card__price-box");

    const priceLabel = document.createElement("b");
    priceLabel.textContent = "Цена";

    const priceValue = document.createElement("span");
    priceValue.classList.add("product-card__price-value");
    
    priceValue.innerHTML = `${product.price} &#8381;`;

    priceBox.append(priceLabel, priceValue);
    card.append(priceBox);

    // Кнопка
    const button = document.createElement("button");
    button.classList.add("product-card__button");
    button.textContent = "Купить";
    card.append(button);

    // Добавляем готовую карточку на страницу
    productsContainer.appendChild(card);
  });
};

// --- 3. Запуск логики ---
const countToShow = getCardsCount();
const filteredProducts = products.slice(0, countToShow);
renderProducts(filteredProducts);
