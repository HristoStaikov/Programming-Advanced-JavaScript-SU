function solve(arr) {
  let obj = {};

  for (const el of arr) {
    let [productName, productPrice] = el.split(" : ");

    obj[productName] = productPrice;
  }

  let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

  let newObj = {};

  for (let index = 0; index < sorted.length; index++) {
    const element = sorted[index];
    const key = sorted[index][0][0];

    if (!newObj.hasOwnProperty(key)) {
      newObj[key] = [];
    }

    newObj[key].push(element[0], element[1]);
  }

  let capitalLetter = Object.entries(newObj);

  for (const element of capitalLetter) {
    const arrays = element[1];
    
    console.log(element[0]);

    for (let i = 0; i < arrays.length; i += 2) {
      const product = arrays[i];
      const price = arrays[i + 1];

      console.log(`  ${product}: ${price}`);
    }
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
