function solve(data, command) {
  if (command === "desc") {
    return data.sort((a, b) => b - a);
  } else {
    return data.sort((a, b) => a - b);
  }
}

const array = [6, 7, 8, 14, 17];

console.log(solve(array, "desc"));
