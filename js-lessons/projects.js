// let str = "hello world";
// if (str.startsWith("hed")) {
//   console.log("Hello");
// } else if (str.endsWith("ld")) {
//   console.log("right end");
// } else {
//   console.log("syntaxError");
// }

// let slic = str.slice(1, 4);
// let sp = str.substring(1, 4); // => substring(4,1); same
// let sub = str.substr(2, 2); // (1-index,2-cutCount);
// let re = str.replace("ll", "salom"); // (1-ozgarishi kerak bolgan element,2-orniga qoyilishi kerak bolgan elment)
// let str1 = "Good bye";
// let strAdd = str.concat(" " + str1);
// console.log(strAdd);
// let text = "  salom  hello world  ";
// // console.log(text);
// // console.log(text.trim());
// // console.log(text.trimEnd());
// // console.log(text.trimStart());
// console.log(str1.charAt(0));

// console.log(String.fromCharCode(65));
// let str2 = "Salom";
// console.log(str2[0].charCodeAt());

// let nums = [21, 16, 165, 8, 56];

// nums.sort((a, b) => b - a);
// console.log(nums);
// nums.sort((a, b) => a - b);
// console.log(nums);
// nums.sort((a, b) => {
//   if (a > b) return 1;
//   else return -1;
// });
// console.log(nums);
// nums.sort((a, b) => {
//   if (b > a) return 1;
//   else return -1;
// });

// function usdcny(usd) {
//   let yuan = Number(usd) * 6.75;
//   return yuan + "0" + " " + "Chinese Yuan";
// }
// console.log(usdcny(5338));

// let arr = [2, 3, 4, 5, 6];
// arr.fill("@");
// // console.log(arr);
// let y = new Array(20);
// // y.fill(function (key) {
// //   return key + 1;
// // });
// let z = Array.from({ length: 20 }, function (val, key) {
//   return key * 2 + 1;
// });
// let d = Array.from({ length: 20 }, function (val, key) {
//   return key * 2 + 2;
// });
// let tub = Array.from({ length: 60 }, function (val, key) {
//   let count = 0;
//   for (let i = key; i > 0; i--) {
//     if (key % i == 0) {
//       count++;
//     }
//   }
//   if (count === 2) {
//     return key;
//   }
// });
// let tub1 = new Set(tub);
// let n = new Array(...tub1);
// n.splice(0, 1);
// console.log(n);

// let frm = Array.from({ length: 30 }, function (val, key) {
//   return key + 1;
// });
// console.log(frm);

// calculator = (a, b, ???) => eval(a + ??? + b);
// console.log(calculator(20, 5, "+"));

// converter = lambda n: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][n];
// console.log(converter(50));

// let num = 2.23865024;
// // console.log(typeof num.toFixed(2));
// // console.log(num.toFixed(4));
// console.log(num.toFixed(2));
// let x = "24";
// x = +x;
// console.log(x);
// console.log((2.999).toFixed(2));

// let c = Number.parseInt("265pd");
// console.log(c);
// let d = Number.parseFloat("23.455kkdd");
// console.log(d);

// console.log(isNaN(8)); // false
// console.log(isNaN(+"aas10")); // true
// console.log(Number.isFinite(12.56)); // true
// console.log(Number.isInteger(12.33)); // false

// let str = "Hello World!";
// let repeat1 = str.repeat(5);
// console.log(repeat1);

// console.log(Math.sqrt(81));
// console.log(Math.pow(9, 2));

// const arrNumbers = [12, 8, -30, 35, 25];
// console.log(Math.max(...arrNumbers));
// console.log(Math.min(...arrNumbers));
// let ranNum = Math.random() * 10 + 40;
// console.log(Math.trunc(ranNum));

// function randomNum(start, end) {
//   let ar = end - start;
//   let ran = Math.random() * (ar + 1) + start;
//   console.log(Math.trunc(ran));
// }
// randomNum(50, 60);
// var num = Math.round(10.49);
// console.log(num); // 10
// let n = -4.6;
// console.log(Math.ceil(n));
// let son = 5886;
// let num3 = Math.floor(son / 1000);
// let num1 = Math.floor((son % 1000) / 100);
// let num = son % 10;
// let num2 = Math.floor((son % 100) / 10);
// let arr = [
//   "bir",
//   "ikki",
//   "uch",
//   "tort",
//   "besh",
//   "olti",
//   "yetti",
//   "sakkiz",
//   "to'qqiz",
// ];
// let on = [
//   "on",
//   "yigirma",
//   "ottiz",
//   "qirq",
//   "ellik",
//   "oltmish",
//   "yetmish",
//   "sakson",
//   "toqson",
// ];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (num3 == i + 1) {
//     result.push(`${arr[i]} ming`);
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (num1 == i + 1) {
//     result.push(`${arr[i]} yuz`);
//   }
// }
// for (let i = 0; i < on.length; i++) {
//   if (i + 1 == num2) {
//     result.push(on[i]);
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (i + 1 == num) {
//     result.push(arr[i]);
//   }
// }
// console.log(result.join(" "));

// console.log(2_233);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 - 1);
// console.log(Number.MIN_SAFE_INTEGER);
// let y = 14546565656563;
// let z = 22355655666565n;
// let x = z * BigInt(y);
// console.log(x);
// let d = 2n;
// let f = 98n;
// console.log(d ** f);

// let kecha = new Date(2022, 2, 14, 15, 30, 24);
// console.log(kecha);
// let otgankun = new Date("March, 13, 2022");
// console.log(otgankun);
// console.log(new Date(2001, 9, 20));
// console.log(new Date(10 * 24 * 60 * 60 * 1000));

// let hozir = new Date();
// let now = new Date();
// let bugun = hozir.getTime();
// let keyin = 365 * 5 * 24 * 60 * 60 * 1000;
// let birKun = 24 * 60 * 60 * 1000;
// let s = keyin + bugun + birKun;
// console.log(new Date(s));
// console.log(new Date(1972, 1, 29));

// console.log(now.setFullYear(2040));
// console.log(now);
// console.log(hozir.getDate());
// console.log(hozir.getDay());
// console.log(hozir.getHours());
// console.log(hozir.getFullYear());
// let myBirthday = new Date(2001, 9, 20);
// console.log(myBirthday.getTime());

// // 16.03.2022

// let sana1 = prompt('Birinchi sanani kirit:');
// let sana2 = prompt('Ikkinchi sanani kirit:');
// let milli = function (sana) {
//   let [yil, oy, kun] = [...sana];
//   return new Date(yil, oy - 1, kun).getTime();
// };
// let mySana = function (sana1, sana2) {
//   let bir = sana1.split('/').reverse();
//   let ikki = sana2.split('/').reverse();
//   let mil1 = milli([...bir]);
//   let mil2 = milli([...ikki]);
//   let farq = mil2 - mil1;
//   let farqSana = new Date(farq);
//   console.log(farqSana);
// };
// mySana(sana1, sana2);

// let dateNow = new Date(2025, 2, 11).getTime();
// let kun10 = dateNow + 10 * 24 * 60 * 60 * 1000;
// let date10 = new Date(kun10).toISOString();
// // console.log(date10);
// let options = {
//   day: "numeric",
//   month: "numeric",
//   weekday: "long",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
// };
// let davlat = navigator.language;
// console.log(davlat);
// let hozirInternational = new Date();
// let inter = new Intl.DateTimeFormat("davlat", options).format(
//   hozirInternational
// );
// console.log(inter);

// let sozlama = {
//   style: "decimal",
//   unit: "celsius",
//   currency: "EUR",
//   useGrouping: false,
// };

// let a = 121545522121.23;
// let convert = new Intl.NumberFormat("de-DT", sozlama).format(a);
// console.log(convert);

// function salom() {
//   console.log("keyinroq chiq");
// }
// setTimeout(salom, 5000);
// function alik() {
//   console.log("doimo chiqib tur");
// }
// setInterval(alik, 3000);
// let a = prompt("a ni kirit");
// let b = prompt("b ni kirit");
// setTimeout(
//   function (a, b) {
//     console.log("call back" + " " + a + " " + b);
//   },
//   5000,
//   a,
//   b
// );
// let g = prompt("Yoshingni kirit");
// let t = setTimeout(
//   function (g) {
//     console.log(`Sizning yoshingiz-${g}da`);
//   },
//   3000,
//   g
// );
// if (g > 18) {
//   clearTimeout(t);
// }
// let f = 59;
// let h = 2;
// let vaqt = setInterval(
//   function () {
//     if (f == -1) {
//       f = 59;
//       h--;
//     }
//     console.log(`${h}:${f}`);
//     f--;
//     if (f == -1 && h == 0) {
//       clearInterval(vaqt);
//     }
//   },
//   20,
//   f
// );
