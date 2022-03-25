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

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person("Jonas", 2001);
// console.log(jonas);
// // new Person("john", 1998);

// // 1.New {} is created
// // 2.function is calles, this = {}
// // 3. {} linked to prototype
// // 4. function automacially return {}

// const matilda = new Person("Matilda", 2015);
// const jack = new Person("Jack", 2002);
// console.log(matilda, jack);

// console.log(matilda instanceof Person);

// // Prototypes

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
//

// // 25.03.2022

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("Ford", 2014);
// console.log(myCar);
// console.log(`my car age is ${myCar.age()}`);

// // 25.03.2022 Lesson

// String;
// let arr = [2, 2, 5, 6, 7];
// arr.push(8);
// console.log(arr);

// console.log(Array.prototype);

// const me = {
//   hisobla() {
//     return 2022 - this.yosh;
//   },
// };

// let umid = Object.create(me);
// umid.yosh = 20;
// console.log(umid.hisobla());

// //  Inheritance from constructor class
// const Person = function (ism, yosh) {
//   this.ism = ism;
//   this.yosh = yosh;
// };
// Person.prototype.ageCalc = function () {
//   return 2022 - this.yosh;
// };
// const Talaba = function (ism, yosh, fakultet, stipendiya) {
//   Person.call(this, ism, yosh);
//   this.fakultet = fakultet;
//   this.stipendiya = stipendiya;
// };
// Talaba.prototype = Object.create(Person.prototype);
// Talaba.prototype.fakTop = function () {
//   return this.fakultet;
// };
// let umid = new Talaba("Umid", 20, "AI", 2000000);
// console.log(umid.fakTop());
// console.log(umid.ageCalc());

// const Teacher = function (ism, yosh, oylik, fan) {
//   Person.call(this, ism, yosh);
//   this.oylik = oylik;
//   this.fan = fan;
// };
// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.dollar = function () {
//   return `${Math.round(this.oylik / 11500)}$`;
// };
// Teacher.prototype.fanTop = function () {
//   return this.fan;
// };

// let davlat = new Teacher("Davlatbek", 19, 4_000_000, "Dasturlash");
// console.log(davlat.dollar());
// console.log(Teacher.prototype);
// console.log(davlat.ageCalc());
// console.log(davlat.__proto__.__proto__.__proto__);
// console.log(NaN === NaN);

// // Inheritance in class

// class Person {
//   constructor(ism, yosh, bosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//     this.bosh = bosh;
//   }
//   yoshniHisobla() {
//     return 2022 - this.yosh;
//   }
// }
// Person.prototype.fakFind = function () {
//   return this.fakultet;
// };
// class Talaba extends Person {
//   constructor(ism, yosh, fakultet) {
//     super(ism, yosh);
//     this.fakultet = fakultet;
//   }
// }
// let s = new Talaba("John", 20, "Telecom");
// console.log(s.yoshniHisobla());
// console.log(s.fakFind());
// console.log(s);
// Talaba.prototype.wait = function () {
//   return this.fakultet;
// };
// class Worker extends Talaba {
//   constructor(ism, yosh, fakultet, maosh) {
//     super(ism, yosh, fakultet);
//     this.maosh = maosh;
//   }
// }

// Worker.prototype.hisob = function () {
//   return this.maosh * 12;
// };

// let work = new Worker("Abbos", 21, "DIF", 200);
// console.log(work.hisob());
// console.log(work);
// console.log(work.wait());
// console.log(Worker.prototype);
