function solution() {

  let ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  let check = false;

  return function (input) {
    let [command, microelement, quantity] = input.split(" ");
    quantity = +quantity;

    let message;

    let commandParser = {
      restock: (element, amount) => {
        if(amount > 0){
        ingredients[element] += amount;
        message = "Success";
        }else{
          return message = "Error"
        }
      },

      prepare: (cook, counts) => {
        if(counts < 1){
            return message = "Error"
        }

        let ingredientsNeeded = recipes[cook];

        for (const el in ingredientsNeeded) {
          if (ingredients.hasOwnProperty(el)) {
            let ingredientsInStock = ingredients[el];
            let ingredientInRecipe = ingredientsNeeded[el] * counts;

            let checkIfEnought = ingredientsInStock - ingredientInRecipe;

            if (checkIfEnought >= 0) {
              check = true;
            } else {
              message = `Error: not enough ${el} in stock`;
              check = false;
              break;
            }
          }
        }
        if (check) {
          for (const key in ingredientsNeeded) {
            if (ingredients.hasOwnProperty(key)) {
              ingredients[key] -= ingredientsNeeded[key] * counts;
            }

          }
          check = false
          message = "Success";
        }
      },

      report: () => {
        let stock = [];
        for (const key in ingredients) {
          let element = `${key}=${ingredients[key]}`;
          stock.push(element);
        }
        message = stock.join(" ");
      },
    };

    commandParser[command](microelement, quantity);

    return message;
  };
}

let manager = solution();
// //   console.log (manager ("restock flavour 50"))
// //   console.log (manager ("prepare lemonade 4"))
//console.log(manager("prepare turkey 1"));

// console.log(manager("restock protein 10"));
// console.log(manager("restock protein 10"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));


  // manager ("prepare apple 2")
//   manager ("restock protein 10")
//   manager ("prepare turkey 1")
//   manager ("restock carbohydrate 10")
//   manager ("prepare turkey 1")
//   manager ("restock fat 10")
//   manager ("prepare turkey 1")
//   manager ("restock flavour 10")
//   manager ("prepare turkey 1")
//   manager ("report")
// // console.log(manager("restock flavour 50"))
// console.log(manager("prepare eggs 1"))
// console.log(manager("restock carbohydrate 10"))
// console.log(manager("restock flavour 10"))
// console.log(manager("prepare apple 1"))
// console.log(manager("restock fat 10"))
// console.log(manager("prepare burger 1"))
// console.log(manager("report"))

// manager("restock protein 10")
// manager("restock protein 10")
// manager("restock carbohydrate 10")
// manager("prepare turkey 1")
// manager("restock fat 10")
// manager("prepare turkey 1");
// manager("restock flavour 10");
// manager("prepare turkey 1");
// manager("report");

manager ("prepare turkey 1")
manager ("restock protein 10")
manager ("prepare turkey 1")
manager ("restock carbohydrate 10")
manager ("prepare turkey 1")
manager ("restock fat 10")
manager ("prepare turkey 1")
manager ("restock flavour 10")
manager ("prepare turkey 1")
manager ("report")


