function solve(arr, num) {
  let NthEl = [];
  for (let index = 0; index < arr.length; index += num) {
    const element = arr[index];
    NthEl.push(element);
  }
  return NthEl;
}
console.log(solve(["5", "20", "31", "4", "20"], 2));
