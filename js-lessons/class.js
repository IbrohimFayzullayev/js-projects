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
//   let arr = suz.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
//   }
//   let str1 = arr.join(" ");
//   console.log(str1);
// }
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
