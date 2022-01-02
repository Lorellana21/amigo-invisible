"use strict";

let namesIntroduced = [];

const button = document.querySelector(".js-btn");
const inputsElement = document.querySelectorAll(".js-input");
const formElement = document.querySelector(".js-form");

function getInputValue(event) {
  const playerName = event.target;
  let playerNameIntroduced = playerName.value;
  namesIntroduced.push(playerNameIntroduced);
}
formElement.addEventListener("change", getInputValue);

function showPlayAgain() {
  resetButton.classList.remove("hidden");
}

function showResults() {
  alert(namesIntroduced[0] + " regala a " + namesIntroduced[2]);
  alert(namesIntroduced[1] + " regala a " + namesIntroduced[3]);
  alert(namesIntroduced[2] + " regala a " + namesIntroduced[0]);
  alert(namesIntroduced[3] + " regala a " + namesIntroduced[4]);
  alert(namesIntroduced[4] + " regala a " + namesIntroduced[1]);
  showPlayAgain();
}

button.addEventListener("click", showResults);

const resetButton = document.createElement("h3");
resetButton.className = "hidden";
const resetContent = document.createTextNode("Jugar de nuevo");
resetButton.style = "color: white; cursor: pointer";
resetButton.appendChild(resetContent);
document.body.appendChild(resetButton);

function updateInputs() {
  for (const input of inputsElement) {
    input.value = "";
  }
}
function updateArray() {
  namesIntroduced = [];
}

function handleReset() {
  updateInputs();
  updateArray();
}

resetButton.addEventListener("click", handleReset);

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
