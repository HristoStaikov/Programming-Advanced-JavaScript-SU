// function solve() {
//   document.querySelector("#btnSend").addEventListener("click", onClick);

//   const textArea = document.querySelector("#inputs textarea");
//   const restaurantNameRef = document.querySelector("#bestRestaurant p");
//   const workersListRef = document.querySelector("#workers p");

//   function onClick() {
//     const dataTextField = JSON.parse(textArea.value);
//     let obj = {};

//     for (let index = 0; index < dataTextField.length; index++) {
//       const element = dataTextField[index];

//       let [restaurant, workers] = element.split(" - ");
//       let employAndSalary = workers.split(", ");

//       let buff = {
//         currentRestaurant: restaurant,
//       };

//       for (const employ of employAndSalary) {
//         let [name, salary] = employ.split(" ");
//         buff[name] = salary;
//       }

//       let salariesAll = [];

//       for (const el in buff) {
//         if (el !== "currentRestaurant") {
//           salariesAll.push(+buff[el]);
//         }
//       }

//       let sumSalaries = salariesAll.reduce((a, b) => a + b);
//       let averageSumSalaries = sumSalaries / salariesAll.length;
//       let biggestSalary = Math.max(...salariesAll);

//       buff.averageSalary = averageSumSalaries;
//       buff.bestSalary = biggestSalary;

//       if (!obj.hasOwnProperty(restaurant)) {
//         let equalSalary = false;

//         if (index !== 0) {
//           for (const nameRest in obj) {
//             if (obj[nameRest].averageSalary === averageSumSalaries) {
//               equalSalary = true;
//               break;
//             }
//           }
//         }

//         if (!equalSalary) {
//           obj[restaurant] = {};

//           for (const key in buff) {
//             if (key !== "currentRestaurant") {
//               obj[restaurant][key] = +buff[key];
//             }
//           }
//         }

//       } else {
//         for (const key in buff) {
//           if (key !== "currentRestaurant") {
//             obj[restaurant][key] = +buff[key];
//           }
//         }

//         let currentObj = obj[restaurant];
//         let reCalculateSumSalaries = [];

//         for (const el in currentObj) {
//           if (el !== "averageSalary" && el !== "bestSalary") {
//             reCalculateSumSalaries.push(+currentObj[el]);
//           }
//         }

//         let reCalcSumSalaries = reCalculateSumSalaries.reduce((a, b) => a + b);
//         let reCalcAverageSumSalaries = reCalcSumSalaries / reCalculateSumSalaries.length;
//         let reCalcBiggestSalary = Math.max(...reCalculateSumSalaries);

//         obj[restaurant].averageSalary = reCalcAverageSumSalaries;
//         obj[restaurant].bestSalary = reCalcBiggestSalary;
//       }
//     }

//     for (const restaurantName in obj) {
//       let currentRestaurantSalaries = obj[restaurantName].averageSalary;

//       for (const names in obj) {
//         let restaurantsSalaries = obj[names].averageSalary;

//         if (restaurantName !== names) {
//           if (currentRestaurantSalaries < restaurantsSalaries) {
//             delete obj[restaurantName];
//           }
//         }
//       }
//     }

//     let employs = [];
//     let restaurantBest = "";

//     for (const restName in obj) {
//       let nameRest = restName;
//       let avrgSalary = obj[restName].averageSalary.toFixed(2);
//       let salaryBest = obj[restName].bestSalary.toFixed(2);
//       restaurantBest += `Name: ${nameRest} Average Salary: ${avrgSalary} Best Salary: ${salaryBest}`;

//       for (const key in obj[restName]) {
//         if (key !== "averageSalary" && key !== "bestSalary") {
//           employs.push([key, obj[restName][key]]);
//         }
//       }
//     }

//     let sorted = employs.sort((a, b) => b[1] - a[1]);

//     let employSorted = "";

//     for (const item of sorted) {
//       employSorted += `Name: ${item[0]} With Salary: ${item[1]} `;
//     }

//     restaurantBest = restaurantBest.trim();
//     employSorted = employSorted.trimEnd();

//     restaurantNameRef.textContent = restaurantBest;
//     workersListRef.textContent = employSorted;
//   }
// }

//Toshko -----------------------------------

function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  const textArea = document.querySelector("#inputs textarea");
  const restaurantNameRef = document.querySelector("#bestRestaurant p");
  const workersListRef = document.querySelector("#workers p");

  function onClick() {
    const info = JSON.parse(textArea.value);
    let res = {};

    for (const restaurant of info) {
      let [restaurantName, workersString] = restaurant.split(" - ");
      let workers = workersString.split(", ");

      if (!res.hasOwnProperty(restaurantName)) {
        res[restaurantName] = {
          avgSalary: calcAvgSalary(workers),
          bestSalary: calcBestSalary(workers),
          workers: workers,
        };
      } else {
        res[restaurantName].workers = concatWorkers(
          res[restaurantName].workers,
          workers
        );
        res[restaurantName].avgSalary = calcAvgSalary(
          res[restaurantName].workers
        );
        res[restaurantName].bestSalary = calcBestSalary(
          res[restaurantName].workers
        );
      }
    }

    let sortedRestaurant = Object.entries(res).sort(
      (a, b) => b[1].avgSalary - a[1].avgSalary
    );

let bestRest = sortedRestaurant[0]

restaurantNameRef.textContent = `Name: ${bestRest[0]} Average Salary: ${bestRest[1].avgSalary.toFixed(2)} Best Salary: ${bestRest[1].bestSalary.toFixed(2)}`

let workersAsText = ""
bestRest[1].workers.sort(sortWorker).forEach(e => {
  let [name, salary] = e.split(" ");
  workersAsText += `Name: ${name} With Salary: ${salary} `
})


workersListRef.textContent = workersAsText

function sortWorker(workerA, workerB) {
  
let [nameA, salaryA] = workerA.split(" ")
let [nameB, salaryB] = workerB.split(" ")
salaryA = Number(salaryA)
salaryB = Number(salaryB)
return salaryB - salaryA
}

    function concatWorkers(oldWorkers, newWorkers) {
      return oldWorkers.concat(newWorkers);
    }

    function calcAvgSalary(workers) {
      let sum = 0;

      workers.forEach((worker) => {
        let[name, salary] = worker.split(" ")
salary = Number(salary)
sum += salary

      });
      return sum / workers.length;
    }

    function calcBestSalary(workers) {
      let bestSalary = 0;
      workers.forEach((worker) => {
        let [name, salary] = worker.split(" ");
        salary = +salary;
        if (salary > bestSalary) {
          bestSalary = salary;
        }
        return;
      });
      return bestSalary;
    }
  }
}
