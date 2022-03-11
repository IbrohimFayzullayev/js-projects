// 09.03.2022 -> First Class vs. Higher-Order Functions

// let sum = function (a) {
//   return function (c, d) {
//     console.log(a * (c - d));
//   };
// };
// let num = sum(5);
// num(6, 2); // -> output:20

// let add = function (a, b) {
//   return a + b;
// };
// let math = function (c, add) {
//   return c + add;
// };
// let c = 13;
// console.log(math(c, add(2, 3)));

// function count() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let ct = count();
// ct();
// ct();
// ct();
// ct();

// let str = prompt("Gapni kirit");
// let num = Number(
//   prompt(
//     "sonni kirit => 1:kichikHarf, 2:kattaHarf, 3:birinchiHarf, 4:camelCase"
//   )
// );
// function kattaHarf(suz) {
//   console.log(suz.toUpperCase());
// }
// function kichikHarf(suz) {
//   console.log(suz.toLowerCase());
// }
// function birinchiHarf(suz) {
//   let newArr = [];
//   for (let i = 0; i < suz.length; i++) {
//     if (suz[i] == " " || suz[i] == "-") {
//       newArr.push(" ");
//     } else {
//       newArr.push(suz[i]);
//     }
//   }
//   let arr1 = newArr.join("");
//   let arr = arr1.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
//   }
//   let str1 = arr.join("");
//   console.log(str1);
// }
// birinchiHarf("cODE-warS");
// function camelCase(suz) {
//   let arr = [];
//   arr.push(suz[0].toLowerCase());
//   for (let i = 1; i < suz.length; i++) {
//     if (suz[i] == " ") {
//       continue;
//     } else if (suz[i - 1] == " ") {
//       arr.push(suz[i].toUpperCase());
//     } else {
//       arr.push(suz[i]);
//     }
//   }
//   console.log(arr.join(""));
// }
// let result = function (num, str) {
//   switch (num) {
//     case 1:
//       kattaHarf(str);
//       break;
//     case 2:
//       kichikHarf(str);
//       break;
//     case 3:
//       birinchiHarf(str);
//       break;
//     case 4:
//       camelCase(str);
//       break;
//     default:
//       console.log("xato raqam kiritdingiz");
//   }
// };

// result(num, str);
// let a = Number(prompt("Birinchi sonni kirit"));
// let b = Number(prompt("Ikkinchi sonni kirit"));
// let n = Number(prompt("Amalni kirit 1 - +,2 - -, 3 - *, 4 - /"));
// let add = function (a, b) {
//   console.log(a + b);
// };
// let multi = function (a, b) {
//   console.log(a * b);
// };
// let divis = function (a, b) {
//   console.log(a - b);
// };
// let devide = function (a, b) {
//   console.log(a / b);
// };
// let calc = function (n, a, b) {
//   switch (n) {
//     case 1:
//       add(a, b);
//       break;
//     case 2:
//       divis(a, b);
//       break;
//     case 3:
//       multi(a, b);
//       break;
//     case 4:
//       devide(a, b);
//       break;
//     default:
//       console.log("xato raqam kiritdingiz");
//       break;
//   }
// };
// calc(n, a, b);

// let salom = function (ism) {
//   return function (family) {
//     return function (yosh) {
//       console.log(`${ism} - ${family} - ${yosh}`);
//     };
//   };
// };
// salom("Ibrohim")("Fayzullayev")(20);
// let fam = salom("Ibrohim");
// let ff = fam("Fayzullayev");
// ff(20);

// let tatu = {
//   name: "Toshkent Axborot Texnologiyalar Univeristeti",
//   rektor: "Alisher",
//   ustozlar: 300,
//   davomat(jami, yoqlar) {
//     console.log(
//       `${this.name}da ${jami} ta talaba bor bugun ${yoqlar} ta talaba darsga kelmadi`
//     );
//   },
// };
// tatu.davomat(30, 10);

// let dav = tatu.davomat;

// let milliy = {
//   name: "Milliy Universitet",
// };
// let ar = [40, 5];
// dav.apply(milliy, ar);

// let politex = {
//   name: "Politexnika",
// };
// dav.call(politex, 45, 6);

// let me = {
//   name: "Ibrohim",
//   order(job, age, loc) {
//     console.log(`${this.name} ${age} yoshda ${job} Developer bo'lib ishlaydi`);
//   },
// };
// let newOrder = me.order;
// me.order("Java", 21);

// let you = {
//   name: "Alex",
// };

// let youOrder = newOrder.bind(you);
// youOrder("Frontend", 20);
// youOrder("Backend", 21);

// let phone = {};
// phone.count = 10;
// phone.buy = function () {
//   console.log(this.count++);
// };
// console.log(phone.count);
// let func1 = phone.buy.bind(phone);
// document.querySelector(".btn1").addEventListener("click", func1);

// * 10.03.2022

// (function () {
//   console.log("Hello");
// })();
// const func = function () {
//   let sana = 0;
//   return function () {
//     console.log(sana++);
//   };
// };
// let func1 = func();
// func1();
// func1();
// func1();
// let arr = [2, 4, 5, 6, 12, 3, 5];
// let max = arr[0];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max, sum);

// let arr = ["s", "d", 12, "f", 8];
// let ar = arr.slice(-1);
// console.log(ar);
// arr.splice(0, 2);
// console.log(arr);
// let nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.reverse());

// let all = arr.concat(nums);
// console.log(all);
// console.log(nums.splice(2, 2, "salom"));
// console.log(nums);

// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function (val, key, arr) {
//   console.log(val);
// });

// umidClick = {
//   name: "Umid Rustamov",
//   balans: 1000,
//   transaction: [],
//   pin: 1111,
// };
// ibrohimClick = {
//   name: "Ibrohim",
//   balans: 2000,
//   transaction: [],
//   pin: 2222,
// };
// let otkazma = function (jonatuvchi, qabulQiluvchi) {
//   let pinKod = Number(-prompt("Parolni kirit:"));
//   if (pinKod === jonatuvchi.pin) {
//     let pul = prompt("qancha pul jonatmoqchisiz");
//   } else {
//     console.log("Parol xato");
//   }
// };

// let arr = [100, 300, -233, 200, -400, 555];

// arr.forEach((value, key) => {
//   if (value > 0) {
//     console.log(`Pul tushdi ${key + 1} : ${value}`);
//   } else {
//     console.log(`Pul yechildi ${key + 1} : ${value}`);
//   }
// });

// let valyuta = new Map([
//   ["USD", "Amerika dollari"],
//   ["RUBL", "Rossiya rubli"],
//   ["SUM", "O'zbekiston so'mi"],
// ]);
// valyuta.forEach(function (val, key) {
//   console.log(`Valyuta : ${key} - ${val}`);
// });

// let arr = [12, 20, 30, 40, 50];
// let x = arr.map(function (val, key) {
//   return val * 10;
// });
// console.log(arr);
// console.log(x);

// let dollar = [100, 200, 88, 90, 300, 450];
// let dollarToSum = 10900;
// let uzs = dollar.map(function (val) {
//   return val * dollarToSum;
// });
// console.log(dollar);
// console.log(uzs);
// let uzs1 = dollar.filter(function (val) {
//   return val % 100 == 0;
// });
// console.log(uzs1);
