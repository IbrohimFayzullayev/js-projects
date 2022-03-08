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

// ** The Hashtag Generator 5kyu
let txt = "codeWars sddfhg  fdggf";
function generateHashtag(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      continue;
    } else if (str[i - 1] == " ") {
      arr.push(str[i].toUpperCase());
    } else {
      arr.push(str[i]);
    }
  }
  let gd = arr.join("");
  if (gd.length > 140) {
    return false;
  } else if (gd.length == 1) {
    return false;
  } else {
    let gd1 = ["#"];
    gd1.push(gd[0].toUpperCase());
    for (let i = 1; i < gd.length; i++) {
      gd1.push(gd[i]);
    }
    return gd1.join("");
  }
}
console.log(generateHashtag(txt));
