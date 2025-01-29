const buttons = document.querySelectorAll("#buttons button");
console.log(buttons);
let index = 1;

buttons.forEach(function (btn) {
  btn.addEventListener("click", btnLight);
});

function btnLight() {
  // al farve fjernes fra knapperne
  buttons.forEach(function (btn) {
    btn.style.backgroundColor = "#eee";
  });

  // gul farve tilføjes knappen der trykkes på
  this.style.backgroundColor = "#ff6d";
}
