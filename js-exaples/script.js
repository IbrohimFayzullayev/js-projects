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
function validatePIN(pin) {
  let num = Number(pin);
  console.log(typeof num);
  console.log(num);
  if (num === NaN) {
    return false;
  } else {
    return true;
  }
}
console.log(validatePIN("saa1222"));
