function solve(arr) {
  
  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let firstP = "X";
  let secondP = "O";

  for (let index = 0; index < arr.length; index += 2) {
    
    let firstPRow = arr[index][0];
    let firstPCol = arr[index][2];

    let firstPMove = dashboard[firstPRow][firstPCol];

    if (firstPMove === false) {
      dashboard[firstPRow][firstPCol] = firstP;
    } else {

      let start = index;
      if (index === arr.length - 1) {
        console.log("This place is already taken. Please choose another!");
        break;
      }
      for (let i = start; i < arr.length; i++) {
        const element = arr[i];

        if (arr[index] !== element) {
          index = i;
          break;
        }
      }
      index -= 2;
      console.log("This place is already taken. Please choose another!");
      continue;
    }
    if (checkIfWin(firstP) === true) {
      console.log(`Player ${firstP} wins!`);
      break;
    }

    if (checkIfNoOneWins(dashboard) === true) {
      console.log(`The game ended! Nobody wins :(`);
      break;
    }

    if (arr[index + 1] !== undefined) {
      let secondPRow = arr[index + 1][0];
      let secondPCol = arr[index + 1][2];
      let secondPMove = dashboard[secondPRow][secondPCol];

      if (secondPMove === false) {
        dashboard[secondPRow][secondPCol] = secondP;

      } else {

        let start = index + 1;

        if (start === arr.length - 1) {
          console.log("This place is already taken. Please choose another!");
          break;
        }

        for (let i = start; i < arr.length; i++) {
          const element = arr[i];

          if (arr[index + 1] !== element) {
            index = i;
            let row = arr[i][0];
            let col = arr[i][2];
            dashboard[row][col] = secondP;
            index = i;
            break;
          }
        }
        console.log("This place is already taken. Please choose another!");
        index -= 1;
        continue;
      }

      if (checkIfWin(secondP) === true) {
        console.log(`Player ${secondP} wins!`);
        break;
      }
      if (checkIfNoOneWins(dashboard) === true) {
        console.log(`The game ended! Nobody wins :(`);
        break;
      }
    }
  }

  function checkIfWin(currentPlayer) {
    const player = currentPlayer;

    for (let index = 0; index < dashboard.length; index++) {
      const arr1 = dashboard[0][index];
      const arr2 = dashboard[1][index];
      const arr3 = dashboard[2][index];

      const arrHorEl1 = dashboard[index][0];
      const arrHorEl2 = dashboard[index][1];
      const arrHorEl3 = dashboard[index][2];

      if (
        arrHorEl1 === player &&
        arrHorEl2 === player &&
        arrHorEl3 === player
      ) {
        return true;
      }

      if (arr1 === player && arr2 === player && arr3 === player) {
        return true;
      }
    }
    if (
      (dashboard[0][0] === player &&
        dashboard[1][1] === player &&
        dashboard[2][2] === player) ||
      (dashboard[0][2] === player &&
        dashboard[1][1] === player &&
        dashboard[2][0] === player)
    ) {
      return true;
    }

    return false;
  }

  function checkIfNoOneWins(matrix) {
    let count = 0;

    for (let index = 0; index < matrix[0].length; index++) {
      let el1 = matrix[index][0];
      let el2 = matrix[index][1];
      let el3 = matrix[index][2];

      if (el1 !== false && el2 !== false && el3 !== false) {
        count++;
      }
    }
    if (count === 3) {
      return true;
    }

    return false;
  }

  for (const el of dashboard) {
    console.log(el.join("\t"));
  }
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
console.log(`------`);
solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
console.log(`------`);
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
console.log(`------`);
solve([
  "0 1",
  "0 0",
  "0 0",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
