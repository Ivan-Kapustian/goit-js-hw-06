let input = document.querySelector("#validation-input");
let length = parseInt(input.dataset.length, 10);
input.addEventListener("blur", validFunc);
function validFunc() {
  if (input.value.length == length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
