function solve(arr) {
  let count = 1;
  return arr
    .sort((a, b) => a.localeCompare(b))
    .map((a) => `${count++}.${a}`)
    .join("\n");
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));
