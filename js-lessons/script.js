"use strict";
// 24.02.2022

//let numbers = new Array(12, 32, 1, 25, 02);
/*
numbers.push(16); // add new item from last of array
console.log(numbers);
numbers.unshift(88); // add new item from first of array
console.log(numbers);
numbers.shift(); // remove first item of array
console.log(numbers);
numbers.pop(); // remove last element pf array
console.log(numbers);
numbers.splice(2, 1); //remove one item from third item
console.log(numbers);
*/

// Object
/*
let about = {
  job: "Developer",
  age: 21,
  university: "TATU",
  array: ["Dve", [12, 30, "Hello", "Hi"], "Salom", [22, 33, 44]],
};
*/
// console.log(about.job, about.age);
// console.log(about);
// console.log(about.array[3][1]);

// console.log(about["array"][1][3]); // output: Hi
// let birth = prompt("birth");
// let now = prompt("now");
/*
const aboutMe = {
  birth: 2001,
  now: 2022,
  calcAge: function () {
    return this.now - this.birth;
  },
};
console.log(aboutMe.calcAge());
*/
/*
let juft = function () {
  for (let i = 2; i < 101; i += 2) {
    console.log(i);
  }
};
juft();
let toq = function () {
  for (let i = 1; i < 101; i += 2) {
    console.log(i);
  }
};
toq();*/
/*
let birth = [1996, 1997, 2001, 1999];
let ages = [];
let calcAges = function () {
  for (let i = 0; i < birth.length; i++) {
    let age = 2022 - birth[i];
    ages.push(age);
  }
};
calcAges();
console.log(ages);
for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}
*/
/*
const arr = ["Ibrohim", "Fayzullayev", "Developer", 21, "Tashkent", 2001];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") {
    continue;
  }
  console.log(arr[i]);
}
*/
/*
let arr = new Array(12, 5, 16, -15, 10);
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(max);
console.log(min);
console.log(max - min);
*/
/*
let oxshash = "abbssa";
// if(oxshash)
console.log(oxshash[0]);
console.log(oxshash[oxshash.length - 1]);
if (oxshash[0] === oxshash[oxshash.length - 1]) {
  console.log(`bu soz boshi  oxiri oxshash`);
} else {
  console.log(`bu oxshash emas`);
}
console.log(oxshash.length);
*/
// let pol = "kiyik";
// let b = pol.split("");
// let a = [];
// for (let i = b.length - 1; i > -1; i--) {
//   a.push(b[i]);
// }
// let w = a.join("");
// if (w === pol) {
//   console.log("polindrom");
// } else {
//   console.log("no");
// }

// let twoSum = function (nums, target) {
//   let nums = [2, 7, 10, 12];
// };
/*
let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let usluga = [];
let total = [];
let calc = function () {
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] < 50 || bill[i] > 300) {
      let a = bill[i] * 0.2;
      let c = bill[i] + a;
      usluga.push(a);
      total.push(c);
    } else if (bill[i] >= 50 && bill[i] <= 300) {
      let a = bill[i] * 0.15;
      let c = bill[i] + a;
      usluga.push(a);
      total.push(c);
    } else {
      console.log("xato");
    }
  }
  console.log(total);
};

calc();
*/
// let object = {
//   job: "coder",
//   age: "21",
// };
// let arr = new Array("salom", "dunyo", object);
// console.log(arr);
/*
let arr = new Array(12, 12, 12, 12);

let ortacha = function (arrs) {
  let sum = 0;
  for (let i = 0; i < arrs.length; i++) {
    sum = sum + arrs[i];
  }
  return sum / arrs.length;
};
console.log(ortacha(arr));
*/

// ** 25.02.2022
/*
let week = new Array(
  `Dushanba`,
  `Seshanba`,
  `Chorshanba`,
  `Payshanba`,
  `Juma`,
  `Shanba`,
  `Yakshanba`
);
let incre = 2;
for (let i = 0; i < week.length; i++) {
  console.log(`Bugun: ${week[i]}`);
  let summa = 0;
  for (let j = 1; j < incre; j++) {
    summa++;
  }
  console.log(`${week[i]}: kuni ${summa} para dars bor`);
  incre++;
}
*/
/*
let sonlar = Math.trunc(Math.random() * 9) + 1;
while (!(sonlar > 5 && sonlar % 2 == 1)) {
  console.log(`${sonlar} xali chiqmadi`);
  sonlar = Math.trunc(Math.random() * 9) + 1;
}
console.log(`${sonlar} tugadi`);
*/
/*
let i = 0;
while (true) {
  console.log(i);
  if (i == 10) {
    break;
  }
  i++;
}
*/
/*
let n = 6;
let char = "#";
for (let i = 0; i < n; i++) {
  console.log(char);
}
*/
/*
let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
function diagonalDifference(arr) {
  // Write your code here
  let sum1 = 0;
  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    sum1 = sum1 + arr[i][j];
  }
  let sum2 = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
    sum2 = sum2 + arr[i][j];
  }
  return Math.abs(sum1 - sum2);
}
console.log(diagonalDifference(arr));
*/
// function plusMinus
/*
let arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      num1++;
    } else if (arr[i] < 0) {
      num2++;
    } else if (arr[i] === 0) {
      num3++;
    } else {
      continue;
    }
  }
  num.push(num1 / arr.length);
  num.push(num2 / arr.length);
  num.push(num3 / arr.length);
  return num;
}
console.log(plusMinus(arr));
*/
// Staircase
/*
let str = "";
for (let i = 0, j = 5; i < 5, j > 0; i++, j--) {
  str = str + "#";
  console.log(str);
}
// console.log(str);
*/
let arr = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
  // Write your code here
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let minMax = [];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else {
      continue;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else {
      continue;
    }
  }
  let minSum = sum - max;
  let maxSum = sum - min;
  // minMax.push(minSum);
  // minMax.push(maxSum);
  console.log(minSum, maxSum);
  // return minMax;
}
// console.log(miniMaxSum(arr));
miniMaxSum(arr);
