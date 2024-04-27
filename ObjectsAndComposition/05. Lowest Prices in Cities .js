function solve(arr) {
    
    let newObj = new Map();
  
    for (const el of arr) {
  
      let [townName, productName, productPrice] = el.split(" | ");
      productPrice = Number(productPrice);
  
      if (!newObj.has(productName)) {
          newObj.set(productName, [productPrice, townName]);;
  
      } else {
  
        if (newObj.get(productName)[0] > productPrice) {
          newObj.set(productName, [productPrice, townName]);
        }
      }
    }
  
    for (const [productName, [lowestPrice, townName]] of newObj) {
      console.log(`${productName} -> ${lowestPrice} (${townName})`);
    }
  
  }
  solve([
    "Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "Mexico City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Washington City | Mercedes | 1000",
  ]);
  
  //     Audi -> 1000 (Mexico City)
  // BMW -> 99999 (Mexico City)
  // Mitsubishi -> 1000 (New York City)
  // Mercedes -> 1000 (Washington City)
  // NoOffenseToCarLovers -> 0 (Sofia City)