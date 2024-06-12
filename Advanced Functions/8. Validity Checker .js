function solve(...num) {
  let one = Math.pow(0 - num[0], 2) + Math.pow(0 - num[1], 2);
  let two = Math.pow(num[2] - 0, 2) + Math.pow(num[3] - 0, 2);
  let three = Math.pow(num[2] - num[0], 2) + Math.pow(num[3] - num[1], 2);

  let resultOne = Number.isInteger(squareRoot(one))
    ? `{${num[0]}, ${num[1]}} to {0, 0} is valid`
    : `{${num[0]}, ${num[1]}} to {0, 0} is invalid`;
  let resultTwo = Number.isInteger(squareRoot(two))
    ? `{${num[2]}, ${num[3]}} to {0, 0} is valid`
    : `{${num[2]}, ${num[3]}} to {0, 0} is invalid`;
  let resultThree = Number.isInteger(squareRoot(three))
    ? `{${num[0]}, ${num[1]}} to {${num[2]}, ${num[3]}} is valid`
    : `{${num[0]}, ${num[1]}} to {${num[2]}, ${num[3]}} is invalid`;

  function squareRoot(result) {
    return (distanceCheck = Math.sqrt(result));
  }
  console.log(resultOne);
  console.log(resultTwo);
  console.log(resultThree);
}
solve(3, 0, 0, 4);
console.log(`-----`);
solve(2, 1, 1, 1);
