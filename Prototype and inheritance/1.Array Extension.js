let myArr = [1, 2, 3,4,5];
let copyMyArr = myArr.slice(0);

(function solve() {
Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.skip = function (n) {
  let element = this.indexOf(n);
  let buff = this.slice(0);
  buff.splice(element, 1);
  return buff;
};

Array.prototype.take = function (n) {
  return this.slice(0, n);
};

Array.prototype.sum = function () {
  return this.reduce((sum, element) => {
    sum += element;
    return sum;
  });
};

Array.prototype.average = function () {
  return this.sum() / this.length;
};
}) ()
console.log(myArr.take(3));



// Array.prototype.skip = function (n) {
//   return this.reduce((acc, element) => {
//     if (element !== n) {
//       acc.push(element);
//     }
//     return acc;
//   }, []);
// };

// myArr.last = function () {
//    return myArr[myArr.length -1]
// }