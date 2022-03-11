let str = "hello world";
if (str.startsWith("hed")) {
  console.log("Hello");
} else if (str.endsWith("ld")) {
  console.log("right end");
} else {
  console.log("syntaxError");
}

let slic = str.slice(1, 4);
let sp = str.substring(1, 4); // => substring(4,1); same
let sub = str.substr(2, 2); // (1-index,2-cutCount);
let re = str.replace("ll", "salom"); // (1-ozgarishi kerak bolgan element,2-orniga qoyilishi kerak bolgan elment)
let str1 = "Good bye";
let strAdd = str.concat(" " + str1);
console.log(strAdd);
let text = "  salom  hello world  ";
// console.log(text);
// console.log(text.trim());
// console.log(text.trimEnd());
// console.log(text.trimStart());
console.log(str1.charAt(0));
