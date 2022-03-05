// ** Baxtli raqam
let a = 5;
// let arr = [2, 1];
// let num;
// for (let i = 2; i <= n; i++) {
//   num = arr[i - 1] + arr[i - 2];
//   arr.push(num);
// }
// console.log(num);

function check(a) {
  //write your code here
  let n = Number(a);
  let arr = [2, 1];
  let num;
  for (let i = 2; i <= n; i++) {
    num = arr[i - 1] + arr[i - 2];
    arr.push(num);
  }
  console.log(num);
}

check(a);
