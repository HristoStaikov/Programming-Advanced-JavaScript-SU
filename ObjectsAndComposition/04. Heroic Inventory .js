function solve(arr) {
  let newArr = [];

  for (const el of arr) {
    let [name, level, items] = el.split(" / ");
    level = Number(level);

    items === undefined ? (items = []) : items = items.split(", ");
    newArr.push({ name, level, items });
  }

  let result = JSON.stringify(newArr);
  console.log(result);
}
solve([
  "Isacc / 25",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
