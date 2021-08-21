const params = new URLSearchParams(window.location.search)

const name = params.get("name");
const imageSrc = params.get("img");
const description = params.get("description");
const price = params.get("price");
const priceSymbol = params.get("symbol");

console.log(name)
console.log(imageSrc)
console.log(description)
console.log(price)
console.log(priceSymbol)

// get the divs and thingamajigs
const titleDiv = document.querySelector(".title");
const imgDiv = document.querySelector(".image");
const descriptionDiv = document.querySelector(".description");
const priceDiv = document.querySelector(".price");

// innerhtml them with the properties from above
titleDiv.innerHTML = name;
imgDiv.src = imageSrc;
descriptionDiv.innerHTML = description;
priceDiv.innerHTML = `${priceSymbol}${price}`;