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
  let count = parseInt(amounts.innerText) || 0; // laver string til et heltal, så vi kan tilføje og trække fra

  count++;
  amounts.innerHTML = count;

  enableDisable(e);
  activeClass(e);
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

  enableDisable(e);
  activeClass(e);
}

function enableDisable(e) {
  const subtractBtn = e.target
    .closest(".products__product")
    .querySelector(".products__subtract");
  const amounts = e.target
    .closest(".products__product")
    .querySelector(".products__amount");
  const count = parseInt(amounts.innerText) || 0;


  if (count > 0) {
    subtractBtn.removeAttribute("disabled");
    subtractBtn.style.color = "black"; /
  } else {
    subtractBtn.setAttribute("disabled", true); 
    subtractBtn.style.color = "transparent";
  }
}
