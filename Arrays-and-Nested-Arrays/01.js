function solve(arr, delimiter) {
  
  return arr
    .map((a, index) => {
      let end = arr.length - 1;
      if (index < end) {
        return a + delimiter;
      } else {
        return arr[arr.length - 1];
      }
    })
    .join("");
}
console.log(solve(["One", "Two", "Three", "Four", "Five"], "-"));
console.log(solve(["How about no?", "I", "will", "not", "do", "it!"], "_"));
