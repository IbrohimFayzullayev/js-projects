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

let input = [[[1], [2], [3], [4]]];
function arrayLength(input) {
  // Write your code here;
  for (let i = 0; i < input.length; i++) {
    if (input[i].length > 0) {
      input.splice(i, 1, ...input[i]);
      input.push([]);
    }
  }
  console.log(input.length);
}
// let arr = [];
// console.log(arr.length);
arrayLength(input);
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
