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

// calculator = (a, b, ॱ) => eval(a + ॱ + b);
// console.log(calculator(20, 5, "+"));

// converter = lambda n: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][n];
// console.log(converter(50));

let num = 2.23865024;
// console.log(typeof num.toFixed(2));
// console.log(num.toFixed(4));
console.log(num.toFixed(2));
let x = "24";
x = +x;
// console.log(x);
// console.log((2.999).toFixed(2));
