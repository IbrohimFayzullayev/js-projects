// function squareDigits(num) {
//   let nums = String(num).split("");
//   let sum = "";
//   for (let i = 0; i < nums.length; i++) {
//     sum += String(Number(nums[i]) ** 2);
//   }
//   return sum;
// }
// console.log(squareDigits(9119));
// let num = 9119;
// let nums = String(num).split("");
// console.log(nums);
// console.log(XO("xoxo"));
// function XO(str) {
//   //code here
//   let s = str.toLowerCase();
//   let st = s.split("");
//   let x = 0;
//   let o = 0;
//   for (let i = 0; i < st.length; i++) {
//     if (st[i] == "x") {
//       x++;
//     } else if (st[i] == "o") {
//       o++;
//     }
//   }

//   if (x == 0 && o == 0) {
//     return true;
//   } else if (x == o) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let son = "GssdG";
// let ss = son.toLowerCase();
// console.log(ss);
// console.log(XO("salom"));
// let trss = "xoxossld";
// console.log(XO(trss));
// let func = function (salom) {};
// let myFunc = (sdd, ddd) => {

// };
// let myObject={
//   boyi=1.7,
//   eni=80,
//   harf="salom",
//   myfn=function(){
//     let dd= myObject.boyi*myObject.eni;
//     let ss=this.boyi+this.eni;
//   }
// }
// function validatePIN(pin) {
//   let num = Number(pin);
//   console.log(typeof num);
//   console.log(num);
//   if (num === NaN) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(validatePIN("saa1222"));
let arr = [1, 2, 3];
// let query = [1, 2];
// let n = 4;
// function circularArrayRotation(a, k, queries) {
//   let ctn = 0;
//   let arrr = [...a];
//   while (ctn < k) {
//     for (let i = 0; i < arrr.length; i++) {
//       arrr[0] = arrr[arrr.length - 1];
//       arrr[i] = arrr[i + 1];
//     }
//     console.log(arrr);
//     ctn++;
//   }
// }
// circularArrayRotation(arr, n, 2);

// let count = 0;
// let arv = a;
// let arrNew = [...arv];
// while (count < k) {
//   for (let i = 0; i < arrNew.length - 1; i++) {
//     arrNew[0] = a[a.length - 1];
//     arrNew[i + 1] = a[i];
//   }
//   console.log(arrNew);
//   count++;
// }
