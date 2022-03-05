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

let str = "ooo???xxxx";
let num = "0123456789";
let arr = [];
let arrE = [];
for (let i = 0, j = 0; i < str.length, j < num.length; i++, j++) {
  if (str[i] == "o") {
    arr.push(num[i]);
  } else if (str[i] == "?") {
    arrE.push(num[i]);
  } else {
    continue;
  }
}
console.log(arr);
console.log(arrE);
