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
// let arr = [1, 2, 3];
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
// let num = 265;
// let num1 = [];
// // let str = String(num);
// for (let i = 0; i < str.length; i++) {
//   num1.unshift(str[i]);
// }
// let num2 = Number(num1.join(""));
// console.log(num2);
// console.log(9 % 3);
// let n = 20;
// let s = 23;
// let k = 6;
// function beautifulDays(i, j, k) {
//   // Write your code here
//   let str1;
//   let count = 0;
//   for (let l = i; l <= j; l++) {
//     str1 = String(l);
//     let nn = [];
//     for (let t = 0; t < str1.length; t++) {
//       nn.unshift(str1[t]);
//     }
//     let n3 = Number(nn.join(""));
//     let div = Math.abs(l - n3) % k;
//     if (div == 0) {
//       count++;
//     } else {
//       continue;
//     }
//   }
//   return count;
// }
// console.log(beautifulDays(n, s, k));
// console.log(Math.trunc(5 / 2) + 3);
let n = 5;
function viralAdvertising(n) {
  // Write your code here
  let recipes = 5;
  let sum = 0;
  let summa = 0;
  for (let i = 0; i < n; i++) {
    sum = Math.trunc(recipes / 2);
    recipes = sum * 3;
    console.log(sum);
    summa += sum;
  }
  return summa;
}
console.log(viralAdvertising(n));
