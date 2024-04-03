function solve(matrix) {
  let equalSum = true;

  for (let index = 0; index < matrix.length; index++) {
    const horizontalArr = matrix[index];
    let vertical = horizontalArr.length;

    let horizontalSum = horizontalArr.reduce((a, b) => a + b);

    for (let i = 0; i < vertical; i++) {
      let verticalSum = 0;

      for (let j = 0; j < matrix.length; j++) {
        let element = matrix[j][i];
        verticalSum += element;
      }
      if (verticalSum !== horizontalSum) {
        equalSum = false;
        break;
      }
    }
  }

  console.log(equalSum);

//   let equalSum = true;
// for (const el of matrix) {

//     matrix.forEach((element,index)=> {
//        console.log(element[0]);
//     });


// }

  




}
solve([
  [1, 0],
  [0, 1],
  [1, 0],
]);
console.log(`------`);
solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
console.log(`------`);
solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
