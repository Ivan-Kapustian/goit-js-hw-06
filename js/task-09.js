let button = document.querySelector(".change-color");
let color = document.querySelector(".color");
button.addEventListener("click", getRandomHexColor);
function getRandomHexColor() {
  let body = document.querySelector("body");
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  color.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
