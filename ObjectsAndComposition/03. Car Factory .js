function solve(obj) {
  const engineType = {
    smallEngine: { power: 90, volume: 1800 },
    normalEngine: { power: 120, volume: 2400 },
    monsterEngine: { power: 200, volume: 3500 },
  };

  let buff = [];

  for (const key in engineType) {
    const nearNum = Math.abs(engineType[key].power - obj.power);
    buff.push(nearNum);
  }

  let minNum = Math.min(...buff);
  let enginePower = buff.indexOf(minNum);

  let newObj = {};
  newObj.model = obj.model;

  if (enginePower === 0) {
    newObj.engine = {
      power: engineType.smallEngine.power,
      volume: engineType.smallEngine.volume,
    };
  } else if (enginePower === 1) {
    newObj.engine = {
      power: engineType.normalEngine.power,
      volume: engineType.normalEngine.volume,
    };
  } else if (enginePower === 2) {
    newObj.engine = {
      power: engineType.monsterEngine.power,
      volume: engineType.monsterEngine.volume,
    };
  }
  newObj.carriage = { type: obj.carriage, color: obj.color };

  let wheelsSizeResult = 0;
  let wheelInch = obj.wheelsize;

  wheelInch % 2 === 1
    ? (wheelsSizeResult = wheelInch)
    : (wheelsSizeResult = wheelInch - 1);

  let wheelsCount = [];

  for (let index = 1; index <= 4; index++) {
    wheelsCount.push(wheelsSizeResult);
  }
  newObj.wheels = wheelsCount;

  return newObj;
}
console.log(
  solve({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
