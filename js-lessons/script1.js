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
