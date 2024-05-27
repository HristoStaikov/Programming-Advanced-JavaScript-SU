function solve(input) {
  
  let obj = {};
  let order = 1;

  for (const element of input) {

    let [juice, quantity] = element.split(" => ");
console.log(typeof juice);
    if (!obj.hasOwnProperty(juice)) {

      obj[juice] = {
        quantity: Number(quantity),
        bottles: 0,
        bottleOrder: 0,
        quantitySum: function () {
          this.bottles += Math.floor(this.quantity / 1000);
          this.quantity %= 1000;
        },
      };

      obj[juice].quantitySum();
      addOrder(obj);

    } else {

      obj[juice].quantity += Number(quantity);

      obj[juice].quantitySum();
      addOrder(obj);
    }

  }

  function addOrder(object) {

    for (const key in object) {

      if (obj[key].bottles > 0) {
        if (obj[key].bottleOrder === 0) {
          obj[key].bottleOrder = order;
          order++;
        }
      }
    }
  }

  let sortOrder = Object.entries(obj);
  let result = [];
  
  for (const el of sortOrder) {

    let objectInArr = el[1];
    result.push([el[0], objectInArr.bottles, objectInArr.bottleOrder]);
  }

  result
    .sort((a, b) => a[2] - b[2])
    .forEach((arr) => {
      if (arr[1] !== 0) {
        console.log(`${arr[0]} => ${arr[1]}`);
      }
    });
}
solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);

solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
