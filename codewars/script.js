"use strict";
// let arr = [1, 8, 3, 6, 5, 4, 7, 2, 9, 0];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let min = arr[i];
//   for (let j = i; j < arr.length; j++) {
//     if (arr[j] < min) {
//       min = arr[j];
//     } else {
//       continue;
//     }
//   }
//   newArr.push(min);
// }
// console.log(newArr);

// **
// let text = "bitcoin take over the world maybe who knows perhaps";
// function findShort(s) {
//   let arr = s.split(" ");
//   let min = arr[0].length;
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i].length) {
//       min = arr[i].length;
//     }
//   }
//   return min;
// }
// console.log(findShort(text));

// ** Break camelCase 6 kyu
// let str = "camelCasing";
// function solution(string) {
//   let sol = [];
//   let wer = string;
//   for (let i = 0; i < wer.length; i++) {
//     if (typeof wer[i] == "string" && wer[i] == wer[i].toUpperCase()) {
//       sol.push(" ");
//       sol.push(wer[i].toUpperCase());
//     } else {
//       sol.push(wer[i]);
//     }
//   }
//   return sol.join("");
// }
// console.log(solution(str));

// ** The Hashtag Generator 5kyu - solved
// let txt = "codeWars sddfhg  fdggf";
// function generateHashtag(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//       continue;
//     } else if (str[i - 1] == " ") {
//       arr.push(str[i].toUpperCase());
//     } else {
//       arr.push(str[i]);
//     }
//   }
//   let gd = arr.join("");
//   if (gd.length > 140) {
//     return false;
//   } else if (gd.length == 1) {
//     return false;
//   } else {
//     let gd1 = ["#"];
//     gd1.push(gd[0].toUpperCase());
//     for (let i = 1; i < gd.length; i++) {
//       gd1.push(gd[i]);
//     }
//     return gd1.join("");
//   }
// }
// console.log(generateHashtag(txt));

// ** Create Phone Number 6kyu
// let art = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// function createPhoneNumber(numbers) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (i == 0) {
//       result.push("(");
//       result.push(numbers[0]);
//     } else if (i == 2) {
//       result.push(numbers[i]);
//       result.push(") ");
//     } else if (i == 5) {
//       result.push(numbers[i]);
//       result.push("-");
//     } else {
//       result.push(numbers[i]);
//     }
//   }
//   return result.join("");
// }
// console.log(createPhoneNumber(art));

// ** The Primes as a Result of the Longest Consecutive Sum I 5kyu
// let num = 100;
// function primeMaxLengthChain(n) {
//   var x;
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     let count = 0;
//     for (let j = i; j > 0; j--) {
//       if (i % j == 0) {
//         count++;
//       }
//     }
//     if (count == 2) {
//       if (sum < n / 2) {
//         sum += i;
//         console.log(sum);
//       }
//     }
//   }
//   console.log(sum);
// }
// primeMaxLengthChain(num);

// ** Are they the "same"? 6kyu
// let a = [121, 144, 19, 161, 19, 144, 19, 11];
// let b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
// function comp(array1, array2) {
//   //your code here
//   let arr1 = [...array1];
//   let arr2 = [...array2];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] ** 2 == arr2[j]) {
//         arr2.slice(j,1);
//         continue;
//       }
//     }
//   }
// }

// ** Array.diff 6kyu

// let arr1 = [1, 2, 3];
// let arr2 = [1];

// function arrayDiff(a, b) {
//   let newArr = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i])) {
//       continue;
//     } else {
//       newArr.push(a[i]);
//     }
//   }
//   return newArr;
// }
// console.log(arrayDiff(arr1, arr2));

// ** Pete, the baker 5kyu

// function cakes(recipe, available) {
//   // TODO: insert code
//   let count = 100;
//   let ct1 = Object.keys(recipe);
//   let ct2 = Object.keys(available);
//   if (ct1.length <= ct2.length) {
//     for (let el of Object.entries(recipe)) {
//       for (let el1 of Object.entries(available)) {
//         if (el[0] == el1[0]) {
//           let min = Math.trunc(el1[1] / el[1]);
//           if (count > min) {
//             count = min;
//           }
//         }
//       }
//     }
//     return count;
//   } else {
//     return 0;
//   }
// }
// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );

// ** Which are in? 6kyu
// let a1 = ["arp", "live", "strong"];
// let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// ** Casino chips 6kyu
// me output
// function solve(arr) {
//   let max = arr[0];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   if (sum - max < max) {
//     console.log(sum - max);
//   } else {
//     console.log(Math.trunc(sum / 2));
//   }
// }
// solve([1, 1, 1]); // => 1
// solve([1, 2, 1]); // => 2
// solve([4, 1, 1]); // => 2
// solve([8, 2, 8]); // => 9
// solve([8, 1, 4]); // => 5
// solve([7, 4, 10]); // => 10
// solve([12, 12, 12]); //// => 18

// codewars output
// function solve(arr) {
//   var [a, b, c] = arr.sort((x, y) => x - y);
//   return Math.min(a + b, ~~((a + b + c) / 2));
// }

// ** Clock in Mirror 6kyu
// function WhatIsTheTime(timeInMirror) {
//   //"05:25" --> "06:35";
//   // Happy Coding
//   let time = timeInMirror;
//   let hour = Number(time.substring(0, 2));
//   let minute = Number(time.slice(3, 5));
// }
// WhatIsTheTime("06:35"); // -> "05:25"
// WhatIsTheTime("11:59"); // -> "12:01"
// WhatIsTheTime("12:02"); // -> "11:58"

// ** Matrix Determinant 4kyu

// function determinant(m) {
//   // return the determinant of the matrix passed in
// }
// let m1 = [
//   [1, 3],
//   [2, 5],
// ];
// let m2 = [
//   [2, 5, 3],
//   [1, -2, -1],
//   [1, 3, 4],
// ];
// let ints = [1, 2, 3, 4, 1, 0];
// let ints = [10, 5, 2, 3, 7, 5];
// let s = 10;
// function sumPairs(ints, s) {
//   let arr = [ints.length, ints.length];
//   let result = [];
//   let count = 0;
//   for (let i = 0; i < ints.length; i++) {
//     for (let j = i + 1; j < ints.length; j++) {
//       if (ints[i] + ints[j] == s) {
//         if (arr[1] > j) {
//           arr = [];
//           arr.push(i, j);
//           result = [];
//           result.push(ints[i], ints[j]);
//           count++;
//         }
//       }
//     }
//   }
//   if (result.length == 2 && count >= 1) {
//     return result;
//   } else {
//     return undefined;
//   }
// }
// console.log(sumPairs(ints, s));
// ** Arabian String 6kyu
// let str = "example name";
// function camelize(str) {
//   let txt = str.toLowerCase();
// }
// camelize(str);
// ** What century is it? 6kyu
// me code
// let year = "1234";
// function whatCentury(year) {
//   let xx = Number(year.substr(0, 2));
//   let yy = Number(year.substr(2, 2));
//   let re;
//   if (yy == 0) {
//     re = xx;
//   } else {
//     re = xx + 1;
//   }
//   let res = String(re);
//   let num = Number(res.substr(1, 1));
//   let ted;
//   if (res == 11 || res == 12 || res == 13) {
//     ted = "th";
//   } else if (num == 1) {
//     ted = "st";
//   } else if (num == 2) {
//     ted = "nd";
//   } else if (num == 3) {
//     ted = "rd";
//   } else {
//     ted = "th";
//   }
//   console.log(res + ted);
// }
// whatCentury(year);
// ** site code
// function whatCentury(year)
// {
//   var century = Math.ceil(year/100);
//   return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
// }

// let n = 40;
// let tubSon = function (n) {
//   let count;
//   for (let i = 1; i < n; i++) {
//     count = 0;
//     for (let j = i; j > 0; j--) {
//       if (i % j == 0) {
//         count++;
//       }
//     }
//     if (count == 2) {
//       console.log(i);
//       count = 0;
//     }
//   }
// };
// tubSon(n);

// ** Simple Pig Latin 5kyu

// function pigIt(str) {
//   //Code here
//   let strArr = str.split(" ");
//   for (let i = 0; i < strArr.length; i++) {
//     let first = strArr[i][0];
//     strArr.splice([i][0], 1);
//   }
//   console.log(strArr);
// }

// pigIt("Pig latin is cool"); // igPay atinlay siay oolcay
// pigIt("Hello world !"); //  elloHay orldway !
// let n = 3;
// var fibonacci = function (n) {
//   if (n == 0 || n == 1) return n;
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[arr.length - 1];
// };
// console.log(fibonacci(n));

// // First non-repeating character 5kyu
///// me output
// let s = "a";
// console.log(s.length);
// function firstNonRepeatingLetter(s) {
//   // Add your code here
//   let count;
//   let ct = 0;
//   if (s.length > 0) {
//     let str = s.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//       count = 0;
//       for (let j = i + 1; j < str.length; j++) {
//         if (str[i] === str[j]) {
//           count++;
//         }
//       }
//       for (let k = i - 1; k >= 0; k--) {
//         if (str[i] == str[k]) {
//           count++;
//         }
//       }
//       if (count === 0) {
//         console.log(s[i]);
//         break;
//       } else {
//         ct++;
//       }
//     }
//     if (ct == s.length) {
//       console.log(undefined);
//     }
//   } else {
//     console.log(undefined);
//   }
// }

// firstNonRepeatingLetter(s);

//// Other coder output
// function firstNonRepeatingLetter(s) {
//   for(var i in s) {
//     if(s.match(new RegExp(s[i],"gi")).length === 1) {
//       return s[i];
//     }
//   }
//   return '';
// }

// // Where my anagrams at? 5kyu
// //  me output
// let word = "racer";
// let words = ["crazer", "carer", "racar", "caers", "racer"];
// function anagrams(word, words) {
//   let wr = word.split("").sort();
//   let arrWords = [];
//   for (let i = 0; i < words.length; i++) {
//     let ws;
//     if (words[i].length == wr.length) {
//       ws = words[i].split("").sort().join(",");
//     }
//     if (ws == wr) {
//       arrWords.push(words[i]);
//     }
//   }
//   console.log(arrWords);
// }
// anagrams(word, words);

// // other coder output
// String.prototype.sort = function() {
//   return this.split("").sort().join("");
// };

// function anagrams(word, words) {
//   return words.filter(function(x) {
//       return x.sort() === word.sort();
//   });
// }

// // Moving Zeros To The End 5kyu
// //  me output
// let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
// function moveZeros(arr) {
//   let result = [];
//   let zero = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zero.push(arr[i]);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   let res = [...result, ...zero];
//   console.log(res);
// }
// moveZeros(arr);

// // Other coder output
// var moveZeros = function (arr) {
//   return arr
//     .filter(function (x) {
//       return x !== 0;
//     })
//     .concat(
//       arr.filter(function (x) {
//         return x === 0;
//       })
//     );
// };
// console.log(moveZeros(arr));

// // Gap in Primes 5kyu
// function tubSon() {
//   let res = new Array(1100000).fill(false);
//   let ans = [];
//   for (let i = 2; i < 1100000 / 2; i++)
//     for (let j = i + i; j < 1100000; j += i) res[j] = true;
//   for (let i = 2; i < 1100000; i++) if (!res[i]) ans.push(i);
//   console.log(ans);
// }

// tubSon();

// let g = 8;
// let m = 300;
// let n = 400;
// function gap(g, m, n) {
//   // your code
//   let res = new Array(n + 5).fill(false);
//   let ans = [];
//   for (let i = 2; i < (n + 2) / 2; i++)
//     for (let j = i + i; j < n + 2; j += i) res[j] = true;
//   for (let i = m; i <= n; i++) if (!res[i]) ans.push(i);
//   for (let i = 0; i < ans.length; i++) {
//     if (ans[i + 1] - ans[i] == g) return [ans[i], ans[i + 1]];
//   }
//   return null;
// }
// console.log(gap(g, m, n));
// for (let i = m; i < n; i++) {
//   let count = 0;
//   for (let j = i; j > 0; j--) {
//     if (i % j == 0) {
//       count++;
//     }
//   }
//   rr = [];
//   if (count == 2) {
//     res.push(i);
//   }
// }
// for (let k = 0; k < res.length; k++) {
//   if (res[k] - res[k - 1] == g) {
//     rr.push(res[k - 1]);
//     rr.push(res[k]);
//     break;
//   }
// }
// console.log(rr);
// let result = [];
// for (let i = 0; i < tubArr.length; i++) {
//   if (tubArr[i] - tubArr[i - 1] == g) {
//     result.push(tubArr[i - 1]);
//     result.push(tubArr[i]);
//     break;
//   }
// }
// if (res.length < 2) {
//   console.log(null);
// } else {
//   console.log(res);
// }
