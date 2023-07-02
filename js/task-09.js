let button = document.querySelector(".change-color");
let color = document.querySelector(".color");
button.addEventListener("click", changeColor);
function changeColor() {
  let body = document.querySelector("body");
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
