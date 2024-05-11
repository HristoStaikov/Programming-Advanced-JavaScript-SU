function getFibonator() {
  let arr = [0, 1];
  let sum = 1;
  let firstCall = true;

  return function () {
    if (firstCall) {
      firstCall = false;
      return 1;
    }

    sum = 0;
    sum += arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = sum;
    return sum;
  };
}

// console.log(fib());
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13


// function getFibonator(){

// let fistNum = 0 
// let secondNum = 1

// function fibonator (){

// let result = 0
// result = fistNum + secondNum
// secondNum = fistNum 
// fistNum = result
// return result
// }

// return fibonator

// }


let fib = getFibonator();
fib();
fib();
fib();
fib();
fib();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
