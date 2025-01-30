const addBtn = document.querySelectorAll(".products__add");
const subtractBtn = document.querySelectorAll(".products__subtract");

addBtn.forEach(function (btn) {
  btn.addEventListener("click", addToCounter);
});
subtractBtn.forEach(function (btn) {
  btn.addEventListener("click", subtractFromCounter);
});

function addToCounter(e) {
  const amounts = e.target
    .closest(".products__product")
    .querySelector(".products__amount");
  let count = parseInt(amounts.innerText) || 0;
  // laver string til et heltal
  count++;
  amounts.innerHTML = count;
}

function subtractFromCounter(e) {
  const amounts = e.target
    .closest(".products__product")
    .querySelector(".products__amount");
  let count = parseInt(amounts.innerText) || 0;
  if (count > 0) {
    count--;
    amounts.innerHTML = count;
  }
}
