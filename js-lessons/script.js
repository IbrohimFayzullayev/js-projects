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
