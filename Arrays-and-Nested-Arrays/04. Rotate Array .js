function solve(arr, rotations) {
  for (let index = 0; index < rotations; index++) {
    const element = arr[index];
    let lastEl = arr.pop();
    let firstEl = arr.unshift(lastEl);
  }
  console.log(arr.join(" "));
}
solve(["1", "2", "3", "4"], 2);
solve(["Banana", "Orange", "Coconut", "Apple"], 15);
