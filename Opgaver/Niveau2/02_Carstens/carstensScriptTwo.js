//! 3 card:
let cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  // vi vælger elementerne, som ligger inde i .card:
  let increaseBtn = card.querySelector(".card__increase");
  let decreaseBtn = card.querySelector(".card__decrease");
  let countElm = card.querySelector(".card__item-count");
  let count = Number(countElm.textContent);
  let price = Number(card.querySelector(".card__price-value").textContent);
  let totalPriceElm = card.querySelector(".card__total-price");

  function updateCountAndPrice(count, price) {
    countElm.textContent = count;
    totalPriceElm.textContent = count * price;
  }

  increaseBtn.addEventListener("click", function () {
    count++;
    updateCountAndPrice(count, price);
  });

  decreaseBtn.addEventListener("click", function () {
    if (count > 0) count--;
    updateCountAndPrice(count, price);
  });
});
