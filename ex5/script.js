// exersice 5
// 1-topshiriq
"use strict";
let calcAverage = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

let avgDolhins = calcAverage(100, 100, 50);
let avgKoalas = calcAverage(30, 40, 40);
if (avgDolhins > avgKoalas * 2) {
  console.log("Delfinlar g'alaba qozondi");
} else if (avgKoalas > avgDolhins * 2) {
  console.log("Koalalar galab qozondi");
} else {
  console.log("hech kim g'alaba qozonmadi");
}
// let score1 = prompt("Delfinlar jamoasini 1-balini kirit");
// let score2 = prompt("Delfinlar jamoasini 1-balini kirit");
// let score3 = prompt("Delfinlar jamoasini 1-balini kirit");
// let score = new Array(score1, score2, score3);
// let result = (score[0] + score[1] + score[2]) / 3;

// 2-topshiriq
/*
let first = Number(prompt("Birinchi sonni kirit"));
let second = Number(prompt("Ikkinchi sonni kiriting"));
let result = prompt("amalni kirit (+),(-),(*),(/),");

let calculator = function (amal, firstNumber, secondNumber) {
  switch (amal) {
    case "+":
      console.log(firstNumber + secondNumber);
      break;
    case "-":
      console.log(firstNumber - secondNumber);
      break;
    case "*":
      console.log(firstNumber * secondNumber);
      break;
    case "/":
      console.log(firstNumber / secondNumber);
      break;
    default:
      console.log("Togri amal kiriting");
      break;
  }
};

calculator(result, first, second);
*/
