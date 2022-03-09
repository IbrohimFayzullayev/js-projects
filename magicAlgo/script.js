// ** Baxtli raqam
// let a = 5;
// let arr = [2, 1];
// let num;
// for (let i = 2; i <= n; i++) {
//   num = arr[i - 1] + arr[i - 2];
//   arr.push(num);
// }
// console.log(num);

// function check(a) {
//   //write your code here
//   let n = Number(a);
//   let arr = [2, 1];
//   let num;
//   for (let i = 2; i <= n; i++) {
//     num = arr[i - 1] + arr[i - 2];
//     arr.push(num);
//   }
//   console.log(num);
// }

// check(a);

// let str = "ooo???xxxx";
// let num = "0123456789";
// let arr = [];
// let arrE = [];
// for (let i = 0, j = 0; i < str.length, j < num.length; i++, j++) {
//   if (str[i] == "o") {
//     arr.push(num[i]);
//   } else if (str[i] == "?") {
//     arrE.push(num[i]);
//   } else {
//     continue;
//   }
// }
// console.log(arr);
// console.log(arrE);

// let input = [[[1], [2], [3], [4]]];
// function arrayLength(input) {
//   // Write your code here;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].length > 0) {
//       input.splice(i, 1, ...input[i]);
//       input.push([]);
//     }
//   }
//   console.log(input.length);
// }
// let arr = [];
// console.log(arr.length);
// arrayLength(input);
// let ars = [[]];
// console.log(ars.length);
// let art = [];
// for (let i = 0; i < input.length; i++) {
//   if (typeof input[i] == "object") {
//     input.splice(i, 1, ...input[i]);
//   } else {
//     continue;
//   }
// }
// console.log(input.length);
// input = input.splice(2, 3, 12);
// console.log(input);
// let art = input;
// console.log(art);
// function arrayLength(input) {
//   let cont = [...input];
//   let a = 0;
//   for (let i = 0; i < cont.length; i++) {
//     if (cont[i].length > 0) {
//       input = [...cont[i]];
//       cont = [...cont, ...input];
//     }
//   }
//   console.log(cont.length + a);
// }
// arrayLength([[[[[[[1]]]]]]]);
// let l1 = [2, 5, 7];
// let l2 = [4, 8, 9, 7];
// function check(l1, l2) {
//   //write your code here
//   let f1 = [];
//   let f2 = [];
//   if (l1.length > l2.length) {
//     let x = l1.length - l2.length;
//     for (let i = 0; i < x; i++) {
//       l2.push(0);
//     }
//   } else if (l1.length < l2.length) {
//     let x = l2.length - l1.length;
//     for (let i = 0; i < x; i++) {
//       l1.push(0);
//     }
//   }
//   for (let i = l1.length - 1, j = l1.length - 1; i >= 0, j >= 0; i--, j--) {
//     f1.push(l1[i]);
//     f2.push(l2[j]);
//   }
//   let sumre = String(Number(f1.join("")) + Number(f2.join("")));
//   let arr = [];
//   for (let i = sumre.length - 1; i >= 0; i--) {
//     arr.push(Number(sumre[i]));
//   }
//   let strA = arr.join(",");
//   console.log(`[${strA}]`);
// }
// check(l1, l2);
// ** Parolni topish 9-masala
let s = "ooo???xxxx";
function check(s) {}

check(s);
