/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function GenerateNumber() {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let numIndex = Math.floor(Math.random() * number.length);
  return numIndex;
}

function GenerateSuits() {
  let suits = ["♥", "♦", "♠", "♣"];

  let suIndex = Math.floor(Math.random() * suits.length);
  return suIndex;
}

window.onload = function() {
  //write your code here
  document.getElementById("number").innerHTML = GenerateNumber();
  document.getElementsByClassName("suits").innerHTML = GenerateSuits();
  console.log("Hello Rigo from the console!");
};
