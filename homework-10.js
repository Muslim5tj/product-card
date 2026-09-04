import { products } from "./products.js";

const productDescriptionsMap = products.reduce((accumulator, product) => {
  accumulator[product.title] = product.description;
  return accumulator;
},{});

console.log ("результат работы метода .reduce():", productDescriptionsMap);

const getCardsCount = () => {
  const userInput = prompt("Сколько карточек отобразить? от 1 до 5");
  const count = parseInt(userInput, 10);

  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! вы ввели не верное значение. будут показаны все карточки.");
    return products.length;
      }
      return count;
};

const renderProducts = (list) => {
  const container = document.getElementById("product-list");
  const templateElement = document.getElementById("product-template");

  if (!container || !templateElement) {
    console.error("контейнер или шаблон не найден в HTML");
    return;
  }

  container.innerHTML = "";

  list.forEach((product) => {
    const cardClone = templateElement.content.cloneNode(true);

    cardClone.querySelector(".product-card__title").textContent = product.title;
    cardClone.querySelector(".product-card__price-value").textContent = `${product.price}  ₽`;
    cardClone.querySelector(".product-card__image").src = `images/${product.imgUrl}.png`;
    cardClone.querySelector(".product-card__image").alt = product.title;
    cardClone.querySelector(".product-card__description").textContent = product.description;

    const compoundContainer = cardClone.querySelector(".product-card__compound");
    product.compounds.forEach((text) => {
      const listItem = document.createElement("li");
      listItem.classList.add("product-card__compound-item");
      listItem.textContent = text;
      compoundContainer.appendChild(listItem);
    });

    const priceBox = cardClone.querySelector(".product-card__price-box");
    container.appendChild(cardClone);
  });
};

const countToShow = getCardsCount();
const filteredProducts = products.slice(0, countToShow);
renderProducts(filteredProducts);

