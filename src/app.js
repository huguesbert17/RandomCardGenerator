/* eslint-disable */
import "bootstrap";
import "./style.css";
const signs = ["♠", "♦", "♣", "♥"],
  cards = ["K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "A"],
  jacks = [],
  colors = ["red", "black"];

window.onload = function() {
  //write your code here
  document.querySelector(".game-card").innerHTML = createCard();
};

function createCard() {
  return cardTemplate(random(colors), random(signs), random(cards));
}

function cardTemplate(color, sign, number) {
  let card = '<div class="corner top">';
  card += `<span class="card-number">${number}</span>`;
  card += `<span class="sign">${sign}</span>`;
  card += "</div>";

  card += `<div class="middle"><span>${sign}</span></div>`;

  card += '<div class="corner bottom">';
  card += `<span class="card-number">${number}</span>`;
  card += `<span class="sign">${sign}</span>`;
  card += "</div>";
  return `<div class="card-${color}">${card}</div>`;
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
