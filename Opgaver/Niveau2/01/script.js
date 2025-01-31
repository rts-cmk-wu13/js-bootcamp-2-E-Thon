const buttons = document.querySelectorAll("#buttons button");

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



// Carstens løsningsforslag fra gennemgang:'
// let buttons = document.querySelectorAll("#buttons button");
// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//            button.style.backgroundColor = "#eee";
//  })
//    button.style.backgroundColor = "#ff6d";
// });

