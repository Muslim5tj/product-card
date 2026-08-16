import { products } from "./products.js";

const productDescriptionsMap = products.reduce((accumulator, product) => {
  accumulator[product.title] = product.description;
  return accumulator;
}, {});

console.log("Результат работы метода .reduce():", productDescriptionsMap);

const getCardsCount = () => {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(userInput, 10);

  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Вы ввели неверное значение. Будут показаны все карточки.");
    return products.length;
  }

  return count;
};

const renderProducts = (list) => {
  const container = document.querySelector(".products-list");
  const templateCard = document.querySelector(".product-card");

  if (!container || !templateCard) {
    console.error("Контейнер или шаблон не найдены в HTML!");
    return;
  }

  container.innerHTML = "";

  console.log("Отрисовка карточек на странице. Количество:", list.length);

  list.forEach((product) => {
    const card = templateCard.cloneNode(true);
    card.style.display = "block";

    const img = card.querySelector(".product-card__image");
    const title = card.querySelector(".product-card__title");
    const desc = card.querySelector(".product-card__description");
    const priceValue = card.querySelector(".product-card__price-value");
    const compoundItems = card.querySelectorAll(".product-card__compound-item");

    img.src = `images/${product.imgUrl}.png`;
    img.alt = product.title;
    title.textContent = product.title;
    desc.textContent = product.description;
    priceValue.textContent = product.price;

    if (compoundItems.length >= 3) {
      compoundItems[0].textContent = product.compounds[0];
      compoundItems[1].textContent = product.compounds[1];
      compoundItems[2].textContent = product.compounds[2];
    }

    container.appendChild(card);
  });
};

const countToShow = getCardsCount();
const filteredProducts = products.slice(0, countToShow);
renderProducts(filteredProducts);
