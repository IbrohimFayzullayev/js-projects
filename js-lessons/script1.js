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

const obj = {
  name: "Ibrohim",
  age: 20,
  job: "Developer",
  city: "Tashkent",
  status: "student",
};
const kalitlar = Object.keys(obj);
const qiymatlar = Object.values(obj);
// console.log(kalitlar);
// console.log(qiymatlar);
// for (let kalit of kalitlar.entries()) {
//   console.log(`${kalit[0] + 1}-${kalit[1]}`);
// }
// for (let qiymat of qiymatlar) {
//   console.log(qiymat);
// }
for (let item of Object.entries(obj)) {
  console.log(`${item[0]}  : ${item[1]}`);
}
