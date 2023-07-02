let counterValue = 0;
const increseBtn = document.querySelector('[data-action="increment"]');
increseBtn.addEventListener("click", increseClick);
const counter = document.querySelector("#value");
function increseClick() {
  counterValue += 1;
  counter.textContent = counterValue;
}
const decreseBtn = document.querySelector('[data-action="decrement"]');
decreseBtn.addEventListener("click", decreseClick);
function decreseClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
