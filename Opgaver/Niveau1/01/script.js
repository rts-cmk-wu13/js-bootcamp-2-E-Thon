const button = document.querySelector("#my-button");
let firstClick = true;

button.addEventListener("click", changeColor);

function changeColor(e) {
  if (firstClick) {
    this.style.backgroundColor = "#32f";
    this.style.color = "#fff";
    firstClick = false;
  } else {
    this.style.backgroundColor = "#fdf";
    this.style.color = "#000";
    firstClick = true;
  }
}
