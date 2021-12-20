"use strict";

let playerList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let assignedPlayerToGift = [];
const formElement = document.querySelector(".js-formSecond");
const button = document.querySelector(".js-btn");

function doMatches() {
  do {
    assignedPlayerToGift = playerList.sort((a, b) => 0.5 - Math.random());
  } while (
    assignedPlayerToGift[0] === 0 ||
    assignedPlayerToGift[1] === 1 ||
    assignedPlayerToGift[2] === 2 ||
    assignedPlayerToGift[3] === 3 ||
    assignedPlayerToGift[4] === 4 ||
    assignedPlayerToGift[5] === 5 ||
    assignedPlayerToGift[6] === 6 ||
    assignedPlayerToGift[7] === 7 ||
    assignedPlayerToGift[8] === 8 ||
    assignedPlayerToGift[9] === 9
  );
  console.log(assignedPlayerToGift);
}

function getPlayerName(i) {
  if (i === 0) return document.getElementById("player0").value;
  if (i === 1) return document.getElementById("player1").value;
  if (i === 2) return document.getElementById("player2").value;
  if (i === 3) return document.getElementById("player3").value;
  if (i === 4) return document.getElementById("player4").value;
  if (i === 5) return document.getElementById("player5").value;
  if (i === 6) return document.getElementById("player6").value;
  if (i === 7) return document.getElementById("player7").value;
  if (i === 8) return document.getElementById("player8").value;
  if (i === 9) return document.getElementById("player9").value;
}

function showResults() {
  for (let i = 0; i < 10; i++) {
    alert(
      getPlayerName(i) + " regala a " + getPlayerName(assignedPlayerToGift[i])
    );
  }
}

function handleSecretSanta() {
  doMatches();
  showResults();
}

button.addEventListener("click", handleSecretSanta);
