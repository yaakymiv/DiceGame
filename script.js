"use strict";

let again = document.getElementById("again");
let roll = document.getElementById("dice");
let hold = document.getElementById("hold");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let current1 = document.getElementById("current1");
let cur1_back = document.getElementById("cur1_back");
let current2 = document.getElementById("current2");
let cur2_back = document.getElementById("cur2_back");
let output = document.getElementById("output");
let rightSection = document.getElementById("right");
let leftSection = document.getElementById("left");
const win = document.querySelector(".win");
const overlay = document.querySelector(".overlay");
const btnCloseWin = document.querySelector(".close-win");

function reset() {
  leftSection.classList.add("active");
  leftSection.classList.remove("passive");
  rightSection.classList.remove("active");
  rightSection.classList.add("passive");
  win.classList.add("hidden");
  overlay.classList.add("hidden");

  score1.textContent = 0;
  current1.textContent = 0;
  score2.textContent = 0;
  current2.textContent = 0;

  output.innerHTML = "";
}

function WinFunction() {
  setTimeout(function() {
    win.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }, 1000);
}

btnCloseWin.addEventListener("click", function () {
  reset();
});

overlay.addEventListener("click", function () {
  reset();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !win.classList.contains("hidden")) {
    reset();
  }
});

roll.addEventListener("click", function () {
  let currentDice = Math.floor(Math.random() * 6) + 1;
  let imgElement = document.createElement("img");
  imgElement.src = `./images/dice_${currentDice}.svg`;
  imgElement.style.width = "100px";
  imgElement.classList.add("roll-animation");
  output.innerHTML = "";
  output.appendChild(imgElement);

  if (currentDice !== 1) {
    if (rightSection.classList.contains("active")) {
      score2.textContent = parseInt(score2.textContent) + currentDice;
      current2.textContent = parseInt(current2.textContent) + currentDice;
    } else {
      score1.textContent = parseInt(score1.textContent) + currentDice;
      current1.textContent = parseInt(current1.textContent) + currentDice;
    }
    if (parseInt(score1.textContent) >= 10 || parseInt(score2.textContent) >= 10) {
      WinFunction();
    }
  } else {
    if (rightSection.classList.contains("active")) {
      score2.textContent = 0;
      current2.textContent = 0;
      cur2_back.classList.add("passive");
      cur1_back.classList.remove("passive");
    } else {
      score1.textContent = 0;
      current1.textContent = 0;
      cur1_back.classList.add("passive");
      cur2_back.classList.remove("passive");
      rightSection.classList.toggle("active");
      rightSection.classList.toggle("passive");
      leftSection.classList.toggle("active");
      leftSection.classList.toggle("passive");
    }
  }
});

hold.addEventListener("click", function () {
  rightSection.classList.toggle("active");
  rightSection.classList.toggle("passive");
  leftSection.classList.toggle("active");
  leftSection.classList.toggle("passive");
});

again.addEventListener("click", function () {
  reset();
});
