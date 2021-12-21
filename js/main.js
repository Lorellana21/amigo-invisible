"use strict"

let namesIntroduced = [];


const button = document.querySelector(".js-btn");
const inputsElement = document.querySelectorAll(".js-input");

function getInputValue(event){
   const playerName = event.target;
   const playerNameIntroduced = playerName.value;
   namesIntroduced.push(playerNameIntroduced);
}
for(const input of inputsElement){
  input.addEventListener("change", getInputValue);
}


function showResults(){
  alert(namesIntroduced[0] + " regala a " + namesIntroduced[2]);
    alert(namesIntroduced[1] + " regala a " + namesIntroduced[3]);
    alert(namesIntroduced[2] + " regala a " + namesIntroduced[0]);
    alert(namesIntroduced[3] + " regala a " + namesIntroduced[4]);
    alert(namesIntroduced[4] + " regala a " + namesIntroduced[1]);
}

button.addEventListener("click", showResults)

  