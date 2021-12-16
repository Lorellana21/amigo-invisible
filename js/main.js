"use strict";

let playerList = [0, 1, 2, 3, 4];
let assignedPlayerToGift = [];

function doMatches() {
  do {
    assignedPlayerToGift = playerList.sort((a, b) => 0.5 - Math.random());
  } while (
    assignedPlayerToGift[0] === 0 ||
    assignedPlayerToGift[1] === 1 ||
    assignedPlayerToGift[2] === 2 ||
    assignedPlayerToGift[3] === 3 ||
    assignedPlayerToGift[4] === 4
  );
  console.log(assignedPlayerToGift);
}

function getPlayerName(i) {
  if (i === 0) return document.getElementById("player0").value;
  if (i === 1) return document.getElementById("player1").value;
  if (i === 2) return document.getElementById("player2").value;
  if (i === 3) return document.getElementById("player3").value;
  if (i === 4) return document.getElementById("player4").value;
}

function showResults() {
  for (let i = 0; i < assignedPlayerToGift.length; i++) {
    alert(
      getPlayerName(i) + "  regala a  " + getPlayerName(assignedPlayerToGift[i])
    );
  }
}

function handleSecretSanta() {
  doMatches();
  showResults();
}

const button = document.querySelector(".js-btn");
button.addEventListener("click", handleSecretSanta);
