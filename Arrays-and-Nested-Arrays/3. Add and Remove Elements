function solve(arr) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    
    const element = arr[index];
    let count = index + 1;
    newArr.push(count);

    if (element === "remove") {
      let findIndex = newArr.indexOf(count);
      newArr.splice(findIndex - 1, 2);
    }
  }
  
  if (newArr.length === 0) {
    return console.log("Empty");
  }

  for (const el of newArr) {
    console.log(el);
  }
}
solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
