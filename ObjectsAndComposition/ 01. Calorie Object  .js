function solve(arr) {
  let obj = {};

  arr.forEach((element, index) => {
    index % 2 === 0 ? (obj[element] = null) : (obj[arr[index - 1]] = +element);
  });

  console.log(obj);
}
solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
