import { productArray } from "./constanst/productlist.js";
const productsContainer = document.querySelector(".product");
const cart = document.querySelector(".cart");
const cartlist = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

productArray.forEach(function(product){
    productsContainer.innerHTML +=
    `
    <div class="gamecard">
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}"></img>
    <div class="product-price">${product.price}</div>
    <button class="product-button" data-product="${product.id}">Add to cart</button>
    </div>
    `
  });

const buttons = document.querySelectorAll(".product-button");
buttons.forEach(function(button){
  button.onclick = function(event){
   // cartArray.push(parseInt(event.target.dataset.product))
    const itemToAdd = productArray.find(item => item.id === event.target.dataset.product);
    cartArray.push(itemToAdd);
    showCart(cartArray);
    console.log(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  }
});

function showCart(cartItems){
  cart.style.display ="flex";
  cartlist.innerHTML = "";
  let total = 0;
  cartItems.forEach(function(cartElement){
    total += cartElement.price;
    cartlist.innerHTML +=
    `<div class="cart-item">
      <h4>${cartElement.name}</h4>
      <div style="background-image: ${cartElement.image}" class="cart-image"</div>
      </div>
      `
  })
  totalContainer.innerHTML = `Total: ${total}`;
};


// HENTE cartlistDiv og totalDiv og butBtn queryselect
// let total = 0;
// cartArray.forEach(item){
//   let product = productArray[item-1]
//   total += product.price;
//   cartlistdiv.innerHTML +=
//   `
//   html greier fra product
//   <div class="cart-item">
//     <span class="item-name">${product.name}</span>
//     <span class="item-price">${product.price}</span>
//   </div>
//   `
// }
// totalDiv.innerHTML = "Total: " + total;
// buyBtn.href = "./cart.html?cartlist=" + str(cartArray);

// local.storage.put = cartArray;


// In cart.html
// let cart = local.storage.get()