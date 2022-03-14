// // Picking Numbers
// let a = [4, 6, 5, 3, 3, 1];
// let as = [1, 2, 2, 3, 1, 2];
// function pickingNumbers(a) {
//   // Write your code here
//   let count;
//   let max = 0;
//   for (let i = 0; i < a.length; i++) {
//     console.log(count);
//     count = 0;

//     for (let j = i; j < a.length; j++) {
//       let num = a[i];
//       if (Math.abs(num - a[j]) <= 1) {
//         count++;
//         num = a[j];
//       }
//     }
//     if (max < count) {
//       max = count;
//     }
//   }
//   console.log(max);
// }
// pickingNumbers(a);
// pickingNumbers(as);
