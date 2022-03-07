"use strict";
/*
let myName = "Ibrohim";
function age() {
  const birthYear = 2001;

  function calcAge() {
    let job = `Developer`;
    console.log(`My name is ${myName} and my age is ${2022 - birthYear}`);
    function sate() {
      let my = `come on`;
      console.log(`${my} is variable`);
    }
    sate();
  }

  calcAge();
}
age();*/
// let sa = 12;
// console.log(a);

// var a = 45;

// let myName="Iborhimjon";
// let obj={
//   age:20,
//   name:"Ibrohim",
//   calc:()=>{
//     console.log(this.myName);
//   }
// }
// console.log(obj);
// let a = "10";
// let b = (a = 20);
// console.log(a + b);
// console.log(b);
// console.log(a);
// let arr = [1, 2, [8, 9], 8, [0, 5]];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "object") {
//     let b = arr[i][0];
//     console.log(b);
//     break;
//   }
// }

// 03.03.2022

// const kafe = {
//   title: "MagicCafe",
//   taomlar: ["osh", "shurva", "bishtex", "shashlik"],
//   shirinliklar: ["muzqaymoq", "tort", "pahlava"],
//   ichimliklar: ["kola", "choy", "kampot"],
//   ochiqVaqti: {
//     dush: { open: "8:00", close: "22:00" },
//     shanba: { open: "9:00", close: "21:00" },
//   },
//   locationCafe: "TATU, Yunusobod, Tashkent",
//   order: function (taom, ichimlik) {
//     console.log(`
//       Siz ${this.taomlar[taom]} buyurtma qildingiz va ${this.ichimliklar[ichimlik]} oldingiz`);
//   },
// };
// let ich = ["fanta", "piva"];
// let fruit = [...ich, ...kafe.ichimliklar];
// console.log(fruit);
// let shirin = [...kafe.shirinliklar];
// console.log(shirin);
// let opshiy = [...kafe.taomlar, ...kafe.ichimliklar];
// console.log(opshiy);

// const str = "Uzbekistan";
// console.log(str);
// let arrUz = [...str];
// console.log(arrUz);

// const {
//   title: nomlash,
//   taomlar,
//   ichimliklar,
//   ochiqVaqti: {
//     dush: { open: ochilish },
//     shanba: { close: yopilish },
//   },
//   turi = ["salom"],
// } = kafe;
// console.log(ochilish);
// console.log(yopilish);
// console.log(turi);
// let [ftaom, , staom] = magicCafe.taomlar;
// console.log(`Birinchi taom ${ftaom}`);
// console.log(`Uchinchi taom ${staom}`);

// [ftaom, staom] = [staom, ftaom];
// console.log(`Birinchi taom ${ftaom}`);
// console.log(`Uchinchi taom ${staom}`);
// magicCafe.order(1, 1);
// let c = {
//   a: 7,
//   b: 8,
//   g: 10,
// };
// function sum(f) {
//   let { a: bir, b: ikki } = f;
//   // let a = f.a;
//   // let b = f.b;
//   return bir + ikki;
// }
// console.log(sum(c));
// console.log(typeof c);
// let arr = [1, 2, 3];
// let newArr = [4, 5, ...arr];
// console.log(newArr);
// console.log(...arr);
// console.log(arr);
// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here
// }
/*
let market = {
  ichimliklar: ["fanta", "pepsi", "kola", "suv"],
  vegatables: ["kartoshka", "pomidor", "karam", "sabzi"],
  mevalar: ["olma", "anor", "behi", "banan"],
  ochiqVaqti: {
    dush: { open: "8:00", close: "22:00" },
    seshanba: { open: "8:00", close: "22:00" },
  },
  buyurtma: function (ichimlik, sabzavot, meva) {
    console.log(
      `Siz ${this.ichimliklar[ichimlik]}  va ${this.vegatables[sabzavot]} va ${this.mevalar[meva]} buyurtma qildingiz`
    );
  },
};
// market.buyurtma(2, 0);
let arr = [
  prompt("Tanlang: => 0.fanta, 1.pepsi, 2.kola, 3.suv"),
  prompt("Tanlang: => 0.kartoshka, 1.pomidor, 2.karam, 3.sabzi"),
  prompt("Tanlang: => 0.olma, 1.anor, 2.behi, 3.banan"),
];
market.buyurtma(...arr);
*/

// ** 04.03.2022
// 4.Rest Pattern and Parameters

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// const arr = [...arr1, ...arr2];
// console.log(arr);
// const [x, , ...arr3] = arr;
// console.log(arr3);

// const kafe = {
//   title: "MagicCafe",
//   taomlar: ["osh", "shurva", "bishtex", "shashlik"],
//   shirinliklar: ["muzqaymoq", "tort", "pahlava"],
//   ichimliklar: ["kola", "choy", "kampot"],
//   ochiqVaqti: {
//     dush: { open: "8:00", close: "22:00" },
//     seshanba: { open: "9:00", close: "21:00" },
//     chorshanba: { open: "9:00", close: "21:00" },
//     payshanba: { open: "9:00", close: "21:00" },
//     juma: { open: "9:00", close: "21:00" },
//     shanba: { open: "9:00", close: "21:00" },
//   },
//   locationCafe: "TATU, Yunusobod, Tashkent",
//   order: function (taom, ichimlik) {
//     console.log(`
//       Siz ${this.taomlar[taom]} buyurtma qildingiz va ${this.ichimliklar[ichimlik]} oldingiz`);
//   },
// };
// let sas = [...kafe.taomlar, ...kafe.ichimliklar, ...kafe.shirinliklar];
// for (let item of sas.entries()) {
//   console.log(`${item[0] + 1} - ${item[1]}`);
// }
// const arw = [...kafe.taomlar, ...kafe.ichimliklar];
// // console.log(arw);
// const [birinchiOvqat, ikkinchiOvqat, ...kerakmas] = arw;
// let y = [birinchiOvqat, ikkinchiOvqat];
// // console.log(y, kerakmas);

// const { ochiqVaqti } = kafe;

// const { juma, ...haftaKunlari } = ochiqVaqti;
// const { open } = juma;
// // console.log(open);

// 2
//const const [birinchiOvqat, ikkinchiOvqat, ...kerakmas]
// = [...kafe.taomlar, ...kafe.ichimliklar];

// console.log("" || NaN || null || 0);

// let a = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let element of a) {
//   sum += element;
// }
// console.log(sum);

// const obj = {
//   name: "Ibrohim",
//   age: 20,
//   job: "Developer",
//   city: "Tashkent",
//   status: "student",
// };
// const kalitlar = Object.keys(obj);
// const qiymatlar = Object.values(obj);
// console.log(kalitlar);
// console.log(qiymatlar);
// for (let kalit of kalitlar.entries()) {
//   console.log(`${kalit[0] + 1}-${kalit[1]}`);
// }
// for (let qiymat of qiymatlar) {
//   console.log(qiymat);
// }
// for (let item of Object.entries(obj)) {
//   console.log(`${item[0]}  : ${item[1]}`);
// }

// *** 05.03.2022
// let str = "happy,newyear,enjoy";
// let str1 = str.split(",");
// console.log(str1.join(" "));

// function Checker(str) {
//   // Write Your Code Here!

//   return;
// }

let s = 15;
let k = 5;
// let count = 0;
// for (let x = 0; x <= k; x++) {
//   for (let y = 0; y <= k; y++) {
//     for (let z = 0; z <= k; z++) {
//       if (x + y + z == s) {
//         count++;
//       }
//     }
//   }
// }
// console.log(count);
// function yech(k, s) {
//   let count = 0;
//   for (let x = 0; x <= k; x++) {
//     for (let y = 0; y <= k; y++) {
//       let z = s - (x + y);
//       if (0 <= z && z <= k) {
//         count++;
//       }
//     }
//   }
//   console.log(count);
// }

// yech(k, s);

// let n = 44654;
// let count;
// for (let i = 0; i < n; i++) {
//   count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     console.log(i);
//   }
// }
// console.log(count);

// let n = 12;
// let n1 = String(n);
// let sum = 0;
// for (let i = 0; i < n1.length; i++) {
//   sum += Number(n1[i]);
// }
// console.log(sum);
// if (n % sum == 0) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }
// let s1 = 101;
// function check(s) {
//   //write your code here
//   let n1 = String(s);
//   let sum = 0;
//   for (let i = 0; i < n1.length; i++) {
//     sum += Number(n1[i]);
//   }
//   if (s % sum == 0) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// check(s1);

// let n = -27;
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     count++;
//   } else {
//     continue;
//   }
// }
// if (count == 2) {
//   console.log(1);
// } else {
//   console.log(0);
// }
// let input = 23;
// function IsPrime(input) {
//   // Write Code Here
//   let count = 0;
//   for (let i = 1; i <= input; i++) {
//     if (input % i == 0) {
//       count++;
//     } else {
//       continue;
//     }
//   }
//   if (count == 2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// console.log(IsPrime(input));

// let arr = [1, 2, 3];
// let count = 0;
// let ar = [];
// for (let i = 0; i < arr.length; i++) {
//   ar.unshift(arr[i]);
//   count++;
// }
// console.log(ar);
// console.log(count);
// let arr = [
//   "Frontend",
//   "Frontend",
//   "Frontend",
//   "Frontend",
//   "Backend",
//   "Backend",
//   "Backend",
//   "Mobile",
//   "Mobile",
//   "Mobile",
//   "Mobile",
// ];
// let ret = new Set(arr);
// // console.log(ret);
// const me = new Map();
// me.set("name", "John Deo");
// me.set(1, 20);
// me.set(true, "yutdik");
// console.log(me);
// console.log(`${me.get(true)} - ${me.get("name")} - ${me.get(1)}`);
// const rest = new Map([
//   [1, 20],
//   [2, 30],
//   ["name", "John"],
//   [3, 30],
// ]);

// let ar1 = [1, 2];
// me.set(ar1, "Array qoshdi");
// console.log(me);
// rest.clear(); --> polniy ochirib tashlaydi
// rest.delete("name"); --> Belginlangan key ni valuesi bn ochirib tashlaydi
// for (let item of rest) {
//   console.log(item);
// }
// bu rest arraydagi barcha elementni chiqaradi
// if (me.has("name")) {
//   // has bu elementni me ni ichidan izlaydi agar bolsa true yoq bolsa false chiqaradi
//   console.log(me.get("name"));
// }

// let week = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma"];
// let weekend = ["shanba", "yakshanba"];

// const office = new Map([
//   [true, "Hozir bizda ish kuni"],
//   [false, "Bugun dam olish kuni"],
//   ["week", week],
//   ["weekend", weekend],
//   ["error", "bunday kun yoq"],
//   ["open", 9],
//   ["close", 18],
//   ["xato", "Biz bu vaqtlarda ishlamaymiz"],
// ]);
// let day = prompt("Kunni kirit").toLowerCase();
// let time = Number(prompt("Vaqtni kirit"));
// if (
//   office.get("week").includes(day) &&
//   time > office.get("open") &&
//   time < office.get("close")
// ) {
//   console.log(office.get(true));
// } else if (
//   (office.get("week").includes(day) && time < office.get("open")) ||
//   (time > office.get("close") && office.get("week").includes(day))
// ) {
//   console.log(office.get("xato"));
// } else if (office.get("weekend").includes(day)) {
//   console.log(office.get(false));
// } else {
//   console.log(office.get("error"));
// }

// const savol = new Map([
//   ["Savol", "O'zbekiston poytaxti:"],
//   [1, "Toshkent"],
//   [2, "Samarqand"],
//   [3, "Xorazm"],
//   ["javob", 1],
//   [true, "To'g'ri javob"],
//   [false, "Xato javob"],
// ]);
// console.log([...savol.keys()]);
// console.log([...savol.values()]);
// console.log(savol.get("Savol"));
// for (let [key, val] of savol) {
//   if (typeof key == "number") {
//     console.log(`${key} - ${val}`);
//   }
// }
// let sav = Number(prompt("Javobni kiriting"));
// sav == savol.get("javob")
//   ? console.log(savol.get(true))
//   : console.log(savol.get(false));

// var object = {
//   key1: 10,
//   key2: 3,
//   key3: 40,
//   key4: 20,
// };
// var array = [];
// for (var people in object) {
//   array.push([people, object[people]]);
// }
// console.log(...array);

// let str = {
//   num1: 10,
//   num2: 20,
//   num3: 30,
//   num4: 40,
//   num5: 50,
// };
// let arr = [];
// for (let num in str) {
//   arr.push([num, str[num]]);
//   // console.log(num);
//   // console.log(str[num]);
// }
// console.log(...arr);
// console.log(Array.isArray(8, [4]));
// console.log({} instanceof Array);

// const l1 = [1, 2, 3],
//   l2 = [4, 5, 6],
//   f1 = [],
//   f2 = [];
// if (l1.length > l2.length) {
//   let x = l1.length - l2.length;
//   for (let i = 0; i < x; i++) {
//     l2.push(0);
//   }
// } else if (l1.length < l2.length) {
//   let x = l2.length - l1.length;
//   for (let i = 0; i < x; i++) {
//     l1.push(0);
//   }
// }

// for (let i = l1.length - 1, j = l1.length - 1; i >= 0, j >= 0; i--, j--) {
//   f1.push(l1[i]);
//   f2.push(l2[j]);
// }
// let sumre = String(Number(f1.join("")) + Number(f2.join("")));
// let arr = [];
// for (let i = sumre.length - 1; i >= 0; i--) {
//   arr.push(Number(sumre[i]));
// }
// console.log(arr);
// let l1 = [9, 9, 9, 9, 9, 9, 9];
// let l2 = [9, 9, 9, 9];
// function check(l1, l2) {
//   //write your code here
//   let f1 = [];
//   let f2 = [];
// if (l1.length > l2.length) {
//   let x = l1.length - l2.length;
//   for (let i = 0; i < x; i++) {
//     l2.push(0);
//   }
// } else if (l1.length < l2.length) {
//   let x = l2.length - l1.length;
//   for (let i = 0; i < x; i++) {
//     l1.push(0);
//   }
// }
//   for (let i = l1.length - 1, j = l1.length - 1; i >= 0, j >= 0; i--, j--) {
//     f1.push(l1[i]);
//     f2.push(l2[j]);
//   }
//   let sumre = String(Number(f1.join("")) + Number(f2.join("")));
//   let arr = [];
//   for (let i = sumre.length - 1; i >= 0; i--) {
//     arr.push(Number(sumre[i]));
//   }
//   console.log(arr);
// }

// check(l1, l2);
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabet1 = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

let small = alphabet.split("");
let big = alphabet1.split("");
console.log(small);
console.log(big);
