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
