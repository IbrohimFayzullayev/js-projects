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
function XO(str) {
  //code here
  let s = str.toLowerCase();
  let st = s.split("");
  let x = 0;
  let o = 0;
  for (let i = 0; i < st.length; i++) {
    if (st[i] == "x") {
      x++;
    } else if (st[i] == "o") {
      o++;
    }
  }

  if (x == 0 && o == 0) {
    return true;
  } else if (x == o) {
    return true;
  } else {
    return false;
  }
}
console.log(XO("xox"));
let son = "GssdG";
let ss = son.toLowerCase();
console.log(ss);
