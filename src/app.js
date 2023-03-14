/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getSuit() {
  let suit = ["♦", "♥", "♠", "♣"];
  let suIndex = Math.floor(Math.random() * suit.length);
  return suit[suIndex];
}

function getNumber() {
  let number = [
    "8",
    "3",
    "7",
    "9",
    "6",
    "4",
    "A",
    "5",
    "K",
    "Q",
    "2",
    "J",
    "10"
  ];

  let numIndex = Math.floor(Math.random() * number.length);
  return number[numIndex];
}
window.onload = () => {
  document.getElementById("number").innerText = getNumber();
  let s = getSuit();
  document.getElementById("top-suit").innerText = s;
  document.getElementById("bottom-suit").innerText = s;
  if (s == "♥" || s == "♦") {
    document.getElementById("top-suit").classList.add("red");
    document.getElementById("bottom-suit").classList.add("red");
    document.getElementById("number").classList.add("red");
  }
};
