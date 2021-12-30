"use strict"


let namesIntroduced = [];


const button = document.querySelector(".js-btn");
const inputsElement = document.querySelectorAll(".js-input");
const formElement = document.querySelector ('.js-form');

function getInputValue(event){
   const playerName = event.target;
   let playerNameIntroduced = playerName.value;
   namesIntroduced.push(playerNameIntroduced);
}
formElement.addEventListener("change", getInputValue);

function showResults(){
  alert(namesIntroduced[0] + " regala a " + namesIntroduced[2]);
    alert(namesIntroduced[1] + " regala a " + namesIntroduced[3]);
    alert(namesIntroduced[2] + " regala a " + namesIntroduced[0]);
    alert(namesIntroduced[3] + " regala a " + namesIntroduced[4]);
    alert(namesIntroduced[4] + " regala a " + namesIntroduced[1]);
}

button.addEventListener("click", showResults)



const resetButton = document.createElement('input');
resetButton.type = 'Reset';
resetButton.style = 'display: none;'
const resetContent = document.createTextNode('Reset');
resetButton.appendChild(resetContent);
document.body.appendChild(resetButton);



 window.addEventListener('load', (event) => {
   console.log('page is fully loaded');
 });

  