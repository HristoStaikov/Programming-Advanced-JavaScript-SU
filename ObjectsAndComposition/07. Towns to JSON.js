function solve(arr) {
  let tables = arr
    .shift()
    .split(" ")
    .filter((a) => a !== "|");

  let [Town, Latitude, Longitude] = tables;

  let result = [];

  for (const element of arr) {
    [Town, Latitude, Longitude] = tables;

    let lastPipe = element.lastIndexOf("|");
    let towns = element.substring(1, lastPipe).trim().split(" | ");

    let [city, latitudeDate, longitudeDate] = towns;

    latitudeDate = Number(latitudeDate).toFixed(2);
    longitudeDate = Number(longitudeDate).toFixed(2);

    let obj = {
      Town: city,
      Latitude: +latitudeDate,
      Longitude: +longitudeDate,
    };

    result.push(obj);
  }

  console.log(JSON.stringify(result));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
