// Exercise -6

// 1-topshiriq

let first = prompt("Birinchi sonni kiriting");
let second = prompt("Ikkinchi sonni kiriting");
let third = prompt("Uchinchi sonni kiriting");

if (first > second && first > third) {
  console.log(`Eng katta son: ${first}`);
} else if (second > first && second > third) {
  console.log(`Eng katta son: ${second}`);
} else if (third > first && third > second) {
  console.log(`Eng katta son: ${third}`);
} else {
  console.log(`Eng katta son mavjud emas`);
}

// 2-topshiriq
/*
let son1 = prompt(`Birinchi sonni kirit`);
let son2 = prompt(`Ikkinchi sonni kirit`);
let son3 = prompt(`Uchinchi sonni kirit`);
let taqqoslash = function (a, b, c) {
  let bigNumber = function (a, b, c) {
    if (a > b && a > c) {
      console.log(`Eng katta son ${a}`);
    } else if (a < b && b > c) {
      console.log(`Eng katta son ${b}`);
    } else if (c > b && a < c) {
      console.log(`Eng katta son ${c}`);
    } else {
      console.log(`Eng katta son mavjud emas`);
    }
  };
  let smallNumber = function (a, b, c) {
    if (a < b && a < c) {
      console.log(`Eng kichik son ${a}`);
    } else if (a > b && b < c) {
      console.log(`Eng kichik son ${b}`);
    } else if (c < b && a > c) {
      console.log(`Eng kichik son ${c}`);
    } else {
      console.log(`Eng kichik son mavjud emas`);
    }
  };
  let big = bigNumber(son1, son2, son3);
  let small = smallNumber(son1, son2, son3);
  // let bigAndSmall = new Array(big, small);
  // return console.log(bigAndSmall);
};
console.log(taqqoslash(son1, son2, son3));
*/
// 3-topshiriq
/*
let num1 = prompt("Birinchi sonni kiriting");
let num2 = prompt("Ikkinchi sonni kiriting");

let num3 = num1;
num1 = num2;
num2 = num3;

console.log(`Natija ${num1}, ${num2}`);
*/
// 4-topshiriq
/*
let num = Number(prompt("x ni kiriting"));
let funksiya = function (x) {
  let result = x ** 5 + 8 * x ** 4 - 5 * x ** 3 + 3 * x ** 2 + x - 12;
  return result;
};
console.log(funksiya(num));
*/
