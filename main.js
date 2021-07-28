'use strict';
// const products = [
//     { id: 1, title: 'Notebook', price: 1000 },
//     { id: 2, title: 'Mouse', price: 100 },
//     { id: 3, title: 'Keyboard', price: 250 },
//     { id: 4, title: 'Gamepad', price: 150 },
// ];

// const renderProduct = card =>
//     `<div class="product-card">
//                 <h3>${card.title}</h3>
//                 <p>${card.price}</p>
//                 <button class="by-btn">Добавить</button>
//               </div>`;

// const renderProducts = list => {
//     document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(card => renderProduct(card)).join(" "));
// }



// renderProducts(products);

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductCard {
    constructor(product, img='https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-card" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}

class ProductList {
    constructor(container = '.products') {
        this.container = document.querySelector(container);
        this.goods = [];
        this.allProducts = [];
        this.getProducts().then((data) => {
            this.goods = data;
            this.render();
        });
    }

    sumAllProducts() {
        return this.goods.reduce(function (sum, good) {
            return sum + good.price;
        }, 0);
    }

    getProducts() {
      return fetch(`${API}/catalogData.json`)
          .then(response => response.json())
          .catch((error) => {
            console.log(error)
          });
    }

    render() {
        for (const product of this.goods) {
            const productObject = new ProductCard(product);
            this.allProducts.push(productObject);
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
}

new ProductList();
