// Promise ni ichidagi funksiya ekzekyutor funksiya deyiladi
// Bu funksiya bizga funksiya yaratib beradi bu call back function emas
// const tanga = new Promise(function (yutdik, yutqazdik) {
//   if (Math.random() >= 0.5) {
//     yutdik("Biz galaba qozondik");
//   } else {
//     throw new Error("Biz yutqazdik");
//   }
// });
// let nimadir = async function () {
//   const data = Promise.all([
//     fetch(`https://restcountries.com/v3.1/name/uzbekistan`),
//     fetch(`https://restcountries.com/v3.1/name/peru`),
//     fetch(`https://restcountries.com/v3.1/name/usa`),
//   ]);
//   const timeout = function (sec) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve(new Error("Sizning internetingiz sekin"));
//       }, sec * 1000);
//     });
//   };
//   const data1 = await Promise.race([data, timeout(1)]);
//   console.log(data1);
// };
// nimadir();
