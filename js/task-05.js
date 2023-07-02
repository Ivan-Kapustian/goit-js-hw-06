let nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", naming);

function naming() {
  let defaultValue = nameOutput.textContent;
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
}
