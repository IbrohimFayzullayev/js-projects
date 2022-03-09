// 09.03.2022 -> First Class vs. Higher-Order Functions

let sum = function (a) {
  return function (c, d) {
    console.log(a * (c - d));
  };
};
let num = sum(5);
num(6, 2); // -> output:20

let add = function (a, b) {
  return a + b;
};
let math = function (c, add) {
  return c + add;
};
let c = 13;
console.log(math(c, add(2, 3)));

function count() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let ct = count();
ct();
ct();
ct();
ct();
