"use strict";
// 24.02.2022

//let numbers = new Array(12, 32, 1, 25, 02);
/*
numbers.push(16); // add new item from last of array
console.log(numbers);
numbers.unshift(88); // add new item from first of array
console.log(numbers);
numbers.shift(); // remove first item of array
console.log(numbers);
numbers.pop(); // remove last element pf array
console.log(numbers);
numbers.splice(2, 1); //remove one item from third item
console.log(numbers);
*/

// Object
/*
let about = {
  job: "Developer",
  age: 21,
  university: "TATU",
  array: ["Dve", [12, 30, "Hello", "Hi"], "Salom", [22, 33, 44]],
};
*/
// console.log(about.job, about.age);
// console.log(about);
// console.log(about.array[3][1]);

// console.log(about["array"][1][3]); // output: Hi
// let birth = prompt("birth");
// let now = prompt("now");
/*
const aboutMe = {
  birth: 2001,
  now: 2022,
  calcAge: function () {
    return this.now - this.birth;
  },
};
console.log(aboutMe.calcAge());
*/
/*
let juft = function () {
  for (let i = 2; i < 101; i += 2) {
    console.log(i);
  }
};
juft();
let toq = function () {
  for (let i = 1; i < 101; i += 2) {
    console.log(i);
  }
};
toq();*/
/*
let birth = [1996, 1997, 2001, 1999];
let ages = [];
let calcAges = function () {
  for (let i = 0; i < birth.length; i++) {
    let age = 2022 - birth[i];
    ages.push(age);
  }
};
calcAges();
console.log(ages);
for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}
*/
/*
const arr = ["Ibrohim", "Fayzullayev", "Developer", 21, "Tashkent", 2001];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") {
    continue;
  }
  console.log(arr[i]);
}
*/
/*
let arr = new Array(12, 5, 16, -15, 10);
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(max);
console.log(min);
console.log(max - min);
*/
/*
let oxshash = "abbssa";
// if(oxshash)
console.log(oxshash[0]);
console.log(oxshash[oxshash.length - 1]);
if (oxshash[0] === oxshash[oxshash.length - 1]) {
  console.log(`bu soz boshi  oxiri oxshash`);
} else {
  console.log(`bu oxshash emas`);
}
console.log(oxshash.length);
*/
// let pol = "kiyik";
// let b = pol.split("");
// let a = [];
// for (let i = b.length - 1; i > -1; i--) {
//   a.push(b[i]);
// }
// let w = a.join("");
// if (w === pol) {
//   console.log("polindrom");
// } else {
//   console.log("no");
// }

// let twoSum = function (nums, target) {
//   let nums = [2, 7, 10, 12];
// };
/*
let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let usluga = [];
let total = [];
let calc = function () {
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] < 50 || bill[i] > 300) {
      let a = bill[i] * 0.2;
      let c = bill[i] + a;
      usluga.push(a);
      total.push(c);
    } else if (bill[i] >= 50 && bill[i] <= 300) {
      let a = bill[i] * 0.15;
      let c = bill[i] + a;
      usluga.push(a);
      total.push(c);
    } else {
      console.log("xato");
    }
  }
  console.log(total);
};

calc();
*/
// let object = {
//   job: "coder",
//   age: "21",
// };
// let arr = new Array("salom", "dunyo", object);
// console.log(arr);
/*
let arr = new Array(12, 12, 12, 12);

let ortacha = function (arrs) {
  let sum = 0;
  for (let i = 0; i < arrs.length; i++) {
    sum = sum + arrs[i];
  }
  return sum / arrs.length;
};
console.log(ortacha(arr));
*/

// ** 25.02.2022
/*
let week = new Array(
  `Dushanba`,
  `Seshanba`,
  `Chorshanba`,
  `Payshanba`,
  `Juma`,
  `Shanba`,
  `Yakshanba`
);
let incre = 2;
for (let i = 0; i < week.length; i++) {
  console.log(`Bugun: ${week[i]}`);
  let summa = 0;
  for (let j = 1; j < incre; j++) {
    summa++;
  }
  console.log(`${week[i]}: kuni ${summa} para dars bor`);
  incre++;
}
*/
/*
let sonlar = Math.trunc(Math.random() * 9) + 1;
while (!(sonlar > 5 && sonlar % 2 == 1)) {
  console.log(`${sonlar} xali chiqmadi`);
  sonlar = Math.trunc(Math.random() * 9) + 1;
}
console.log(`${sonlar} tugadi`);
*/
/*
let i = 0;
while (true) {
  console.log(i);
  if (i == 10) {
    break;
  }
  i++;
}
*/
/*
let n = 6;
let char = "#";
for (let i = 0; i < n; i++) {
  console.log(char);
}
*/
/*
let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
function diagonalDifference(arr) {
  // Write your code here
  let sum1 = 0;
  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    sum1 = sum1 + arr[i][j];
  }
  let sum2 = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
    sum2 = sum2 + arr[i][j];
  }
  return Math.abs(sum1 - sum2);
}
console.log(diagonalDifference(arr));
*/
// function plusMinus
/*
let arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      num1++;
    } else if (arr[i] < 0) {
      num2++;
    } else if (arr[i] === 0) {
      num3++;
    } else {
      continue;
    }
  }
  num.push(num1 / arr.length);
  num.push(num2 / arr.length);
  num.push(num3 / arr.length);
  return num;
}
console.log(plusMinus(arr));
*/
// Staircase
/*
let str = "";
for (let i = 0, j = 5; i < 5, j > 0; i++, j--) {
  str = str + "#";
  console.log(str);
}
// console.log(str);
*/
/*
let arr = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
  // Write your code here
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let minMax = [];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else {
      continue;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else {
      continue;
    }
  }
  let minSum = sum - max;
  let maxSum = sum - min;
  // minMax.push(minSum);
  // minMax.push(maxSum);
  console.log(minSum, maxSum);
  // return minMax;
}
// console.log(miniMaxSum(arr));
miniMaxSum(arr);
*/

// function hour(time){
//   if(time[time.length - 2]==="P"){
//     let s=Number
//   }

// }
/*
function staircase(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let k = n - i; k < n; k++) {
      str += "#";
    }
    str += "\n";
  }
  console.log(str);
}
staircase(5);
*/

// console.log(time);
// console.log(time.substring(0, 2));
// let num1 = String(Number(time.substring(0, 2)) + 12);
// console.log(num1);
// let num3 = time.substring(2, time.length - 2);
// console.log(num3);
// let num4 = num1 + num3;
// console.log(num4);
/*
let time = "12:45:45AM";
function timeConversion(s) {
  let str = Number(s.substring(0, 2));
  if (s[s.length - 2] == "P" && str < 12) {
    let num = String(Number(s.substring(0, 2)) + 12);
    let num1 = s.substring(2, s.length - 2);
    let num2 = num + num1;
    return num2;
  } else if (str >= 12 && s[s.length - 2] == "A") {
    let num4 = String(Number(s.substring(0, 2)) - 12);
    let num5 = s.substring(2, s.length - 2);
    let num6 = num4 + "0" + num5;
    return num6;
  } else if (s[s.length - 2] == "A" || s[s.length - 2] == "P") {
    let num3 = s.substring(0, s.length - 2);
    return num3;
  }
}
console.log(timeConversion(time));*/
//HackerLand University has the following grading policy:
// let num = 67;
// if (num % 5 > 2) {
//   let sum = Math.trunc(num / 5) + 1;
//   let summa = sum * 5;
//   console.log(summa);
// } else {
//   console.log(num);
// }
/*
let grade = [73, 67, 38, 33, 84];
function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 35) {
      if (grades[i] % 5 > 2) {
        let sum = Math.trunc(grades[i] / 5) + 1;
        let summa = sum * 5;
        console.log(summa);
      } else {
        console.log(grades[i]);
      }
    } else {
      console.log(grades[i]);
    }
  }
}
gradingStudents(grade);
*/
/*
let arr = [5, 4, 4, 2, 2, 8];
function cutTheSticks(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  let x;
  for (let i = 0; i < arr.length; i++) {
    x = arr[i] - min;
    arr.splice(i, 1, x);
  }
  console.log(arr.length);
  return arr;
}
console.log(cutTheSticks(arr));
*/
/*
let score = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let arr = [0, 0];
  for (let i = 1; i < scores.length; i++) {
    if (min > scores[i]) {
      min = scores[i];
      arr[1]++;
    } else if (max < scores[i]) {
      max = scores[i];
      arr[0]++;
    } else {
      continue;
    }
  }
  return arr;
}
console.log(breakingRecords(score));
*/
/*
let s = [2, 2, 1, 3, 2];
function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum = sum + s[j];
    }
    if (sum == d) {
      count++;
    }
  }
  return count;
}
console.log(birthday(s, 4, 2));
*/
/*
let ar = [1, 2, 3, 4, 5, 6];
function divisibleSumPairs(k, ar) {
  // Write your code here
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    let sum;
    for (let j = i + 1; j < ar.length; j++) {
      sum = ar[i] + ar[j];
      if (sum % 5 == 0) {
        count++;
      } else {
        continue;
      }
    }
  }
  return count;
}
console.log(divisibleSumPairs(5, ar));
*/
/*
let arr = [1, 4, 4, 4, 5, 3];
let arrs = arr.sort();
console.log(arrs[0]);
function migratoryBirds(arr) {
  let sorted = arr.sort();
  let ans = sorted[0];
  let maxOccur = 1,
    counter = 0;
  for (let i = 0; i < sorted.length; i++) {
    counter = sorted[i] === sorted[i - 1] ? counter + 1 : 0;
    if (counter > maxOccur) {
      ans = sorted[i];
      maxOccur = counter;
    }
  }

  return ans;
}
console.log(migratoryBirds(arr));
*/
/*
function migratoryBirds(arr) {
  let num;
  let count1;
  let str = 0;
  for (let i = 0; i < arr.length; i++) {
    count1 = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count1++;
      }
    }
    if (count1 > str) {
      str = count1;
      num = arr[i];
    }
  }
  return num;
}*/

// function extraLongFactorials(n) {
//   // Write your code here
//   let s = 1;
//   for (let i = n; i > 0; i--) {
//     s = s * i;
//   }
//   return BigInt(s);
// }
// console.log(extraLongFactorials(25));
/*
let year = 2017;
function dayOfProgrammer(year) {
  // Write your code here
  let num;
  if (year % 4 == 0) {
    num = "12.09." + String(year);
  } else {
    num = "13.09." + String(year);
  }
  return num;
}
console.log(dayOfProgrammer(year));
*/
// let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// function sockMerchant(n, ar) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       if (ar[i] == ar[j]) {
//       }
//     }
//   }
// }

// let str = "salomssddfS";
// let str1 = str.lastIndexOf("s");
// let str2 = str[0];
// console.log(str1);
// console.log(str.slice(-1));
// console.log(str.substring(3, 1));
// let strr = "Assalom TATU";
// let s1 = strr.lastIndexOf("s");
// let s2 = strr.indexOf("o");
// let s3 = strr.indexOf("T");
// let s4 = strr.lastIndexOf("U");
// let s5 = strr.slice(s1, s2) + strr[s3] + strr[s4];
// console.log(s5);
// let swq = str.toUpperCase();
// console.log(swq);

// concat
// trim

// let myStr1 = " Sa";
// let myStr2 = "lom";
// let myStr3 = "alik";
// let myStr4 = "vassalom";
// let full = "";
// // full = full.concat(myStr1, myStr2);
// myStr1 = myStr1.concat(myStr2, myStr3, myStr4, " nima");
// console.log(myStr1);
// console.log(myStr1.trim());
// console.log(myStr1.trimStart());

// let newStr = "Salom salom alik";
// let arr = newStr.split("");
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== " ") {
//     arr2.push(arr[i]);
//     if (arr[i] == "l") {
//       arr2.push("l");
//     }
//   }
// }
// console.log(arr2);

// let number = 4.25;
// console.log(Math.ceil(number));

// function consecutiveOnes(nums) {
//   //code me
//   let count;
//   let ctn = 0;
//   for (let i = 0; i < nums.length; i++) {
//     count = 0;
//     if (nums[i] === 1) {
//       for (let j = i; j < nums.length; j++) {
//         if (nums[j] == 1) {
//           count++;
//         } else {
//           break;
//         }
//       }
//     }
//     if (ctn < count) {
//       ctn = count;
//     }
//   }
//   console.log(ctn);
// }
// consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1]);
