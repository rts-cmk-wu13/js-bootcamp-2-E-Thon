//? husk, at Carstens HTML ser anderledes ud

let increadeBtn = document.querySelector(".card__increase")
let decreaseBtn = document.querySelector(".card__decrease")
let count = Number(document.querySelector(".card__item-count").textContent)
let countElement = document.querySelector(".card__item-count")

let price = Number(document.querySelector(".card__price-value").textContent)

console.log(count);

increadeBtn.addEventListener("click", function(){
    count++;
})
