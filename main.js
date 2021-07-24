'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = card => 
     `<div class="product-card">
                <h3>${card.title}</h3>
                <p>${card.price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;

const renderProducts = list => {
    document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(card => renderProduct(card)).join(" "));
    console.log(list);
}

renderProducts(products);
