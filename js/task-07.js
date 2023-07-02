let input = document.querySelector("#font-size-control");
let text = document.querySelector("#text");
input.addEventListener("input", sizeChange);
function sizeChange() {
  let newSize = input.value + "px";
  text.style.fontSize = newSize;
}
