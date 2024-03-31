function solve(arr) {
  
  let newArr = [arr[0]];

  arr.reduce((a, b) => {
    let biggest = Math.max(...newArr);

    if (a <= b) {
      if (b >= biggest) {
        newArr.push(b);
      }
    }
    return b;
  });

  return newArr;
}

//   let biggest = [arr[0]];

//   for (let index = 0; index < arr.length; index++) {
//     const currentEl = arr[index];

//     for (let i = 0; i < index; i++) {
//       const beforeEls = arr[i];

//       if (beforeEls <= currentEl) {
//         let biggestInArr = Math.max(...biggest);

//         if (biggestInArr <= currentEl) {
//           biggest.push(currentEl);
//           break;
//         }
//       }
//     }
//   }

//   return biggest;
// }
///console.log(solve([20, 3, 2, 15, 6, 1]));
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
