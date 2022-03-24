"use strict";
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
// class Rec {
//   constructor(h, w) {
//     this.h = h;
//     this.w = w;
//   }
// }
// console.log(Rec.name);

// let rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(rectangle.name);

// let rectangle = class rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(rectangle.name);

// // unnamed
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // output: "Rectangle"

// // named
// let Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);

// class rec {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   get area() {
//     return this.calcArea();
//   }
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new rec(10, 10);
// console.log(square.area);

// // 23.03.2022

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 2001);
console.log(jonas);
// new Person("john", 1998);

// 1.New {} is created
// 2.function is calles, this = {}
// 3. {} linked to prototype
// 4. function automacially return {}

const matilda = new Person("Matilda", 2015);
const jack = new Person("Jack", 2002);
console.log(matilda, jack);

console.log(matilda instanceof Person);

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
