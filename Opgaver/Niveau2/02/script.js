const addBtn = document.querySelectorAll(".products__add");
const subtractBtn = document.querySelectorAll(".products__subtract");

addBtn.forEach(function (btn) {
  btn.addEventListener("click", addToCounter);
});
subtractBtn.forEach(function (btn) {
  btn.addEventListener("click", subtractFromCounter);
});

//! Tilføje antal ved klik på "+" knap:
function addToCounter(e) {
  const product = e.target.closest(".products__product");
  const amounts = product.querySelector(".products__amount");
  let count = parseInt(amounts.innerText) || 0; // laver string til et heltal, så vi kan tilføje og trække fra

  count++;
  amounts.innerHTML = count;

  enableDisable(e);
  showPrice(product, count);
}

//! Fjerne antal ved klik på "-" knap:
function subtractFromCounter(e) {
  const product = e.target.closest(".products__product");
  const amounts = product.querySelector(".products__amount");
  let count = parseInt(amounts.innerText) || 0;

  if (count > 0) {
    count--;
    amounts.innerHTML = count;
  }

  enableDisable(e);
  showPrice(product, count);
}

//! enable og disable "-" knappen når 0 rammes:
function enableDisable(e) {
  const product = e.target.closest(".products__product");
  const subtractBtn = product.querySelector(".products__subtract");
  const amounts = product.querySelector(".products__amount");
  const count = parseInt(amounts.innerText) || 0;

  if (count > 0) {
    subtractBtn.removeAttribute("disabled");
    subtractBtn.style.color = "black";
  } else {
    subtractBtn.setAttribute("disabled", true);
    subtractBtn.style.color = "transparent";
  }
}

//! Tilføje og fjerne BEM modifier (class):
const buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {
  btn.addEventListener("click", activeClass);
});

function activeClass(e) {
  e.target.classList.add("products__button--active");

  setTimeout(function () {
    e.target.classList.remove("products__button--active");
  }, 300); // setTimeout tæller i millisekunder (her er det 300 millisekunder = 0.3 sek)
}

//! Totale pris:
function showPrice(productPrice, count) {
  const priceElement = productPrice.querySelector(".products__price");

  let price = parseInt(priceElement.innerText.replace(/[,-]/g, "").trim()); //innerText.replace skifter ",-" ud med "" hvorefter den trimmer det tomme mellemrum væk, så det kan laves til et tal.

  let total = price * count;

  productPrice.querySelector(".products__total").innerHTML =
    total + " kr i alt";
}
