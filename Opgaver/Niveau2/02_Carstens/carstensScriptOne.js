//? husk, at Carstens HTML ser anderledes ud

let increaseBtn = document.querySelector(".card__increase");
let decreaseBtn = document.querySelector(".card__decrease");
let countElm = document.querySelector(".card__item-count");
let count = Number(countElm.textContent);
let price = Number(document.querySelector(".card__price-value").textContent);
let totalPriceElm = document.querySelector(".card__total-price");

console.log(count);

function updateCountAndPrice(count, price) {
  countElm.textContent = count;
  totalPriceElm.textContent = count*price;
}

increaseBtn.addEventListener("click", function () {
  count++;
  updateCountAndPrice(count, price);
});

decreaseBtnBtn.addEventListener("click", function () {
  if (count > 0) count--;
  updateCountAndPrice(count, price);
});
