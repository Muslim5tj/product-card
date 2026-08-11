import { products } from './products.js';
console.log(products);
//2
const createProductTemplate = (product) => {
  return`
  <div class="card-container">
  <img src="${product.imgUrl}" alt="товар ${product.title}" />
  <h3>для нормальной кожи</h3>
  <h2>${product.title}.</h2>
  <p class="card_category">${product.description}</p>
  <span class="card_category">состав</span>
  <ul class="card_category clear-list">
  <li>активные натуральные комплексы</li>
        <li>витамины С, А, РР, В И Е</li>
        <li>солнцезащитные компоненты</li>
      </ul>
      <div class="price-box">
        <b>Цена</b>
        <span class="card_category price-box">${product.price} ₽</span>
      </div>
      <button class="button">Купить</button>
    </div>
  `;
};
  
console.log(createProductTemplate(products
  [0]
));
//4
const productDescription = products.reduce((accumulator, product) => { accumulator[product.title] = product.description; 
return accumulator; }, {});
console.log('Результат задачи 4:', productDescription);
//5
const getCardsCount = () => {
  const userInput = prompt("сколько карточек отобразить? от 1 до 5");
  const count = parseInt(userInput, 10);
  if (isNaN(count) || count < 1 || count > 5) {
    alert("ошибка! вы ввели наверное количество значение. будут показаны все карточки.");
    return products.length
  }
  return count;
};

const renderProducts = (productsList) => 
{
  const productsContainer = document.querySelector('.products-list');
  const productsHtml = productsList.map(product => createProductTemplate(product)).join('');
  productsContainer.innerHTML = productsHtml;
};

const countToShow = getCardsCount();
const filteredProducts = products.slice(0, countToShow);
renderProducts(filteredProducts);