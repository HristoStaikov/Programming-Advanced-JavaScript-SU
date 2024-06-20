function search() {
  let database = document.getElementById("towns");
  let towsData = database.querySelectorAll("li");

  let searchBoxWord = document.getElementById("searchText").value;
  let resultField = document.getElementById("result");

  let searchSymbols = searchBoxWord.length;

  let result = [];

  for (let str = 0; str < towsData.length; str++) {
    const townStr = towsData[str];
    townStr.style.fontWeight = "none";
    townStr.style.textDecoration = "none";
    resultField.textContent = " ";
  }

  for (let index = 0; index < towsData.length; index++) {
    const currentTown = towsData[index].textContent;
    let count = 0;

    for (let i = 0; i < currentTown.length; i++) {
      let charOfTown = currentTown[i];

      for (const char of searchBoxWord) {
        let charOfSearchBox = char;

        if (charOfTown === charOfSearchBox) {
          if (count < searchSymbols) {
            count++;
          }
        }
      }
    }
    if (count === searchSymbols) {
      result.push(currentTown);
    }
  }

  let matchesCount = 0;

  for (let word = 0; word < towsData.length; word++) {
    const element = towsData[word];

    let match = false;

    result.filter((a) => {
      if (a === element.textContent) {
        matchesCount++;
        return (match = true);
      }
    });

    if (match) {
      element.style.fontWeight = "bold";
      element.style.textDecoration = "underline";
    }
  }

  resultField.textContent = `${matchesCount} matches found`;
  matchesCount = 0;
}


// function search() {
//    let database = document.getElementById("towns");
//    let towsData = database.querySelectorAll("li");
//    let resultField = document.getElementById("result");
 
//    let searchBoxWord = document.getElementById("searchText").value;
//    let searchSymbols = searchBoxWord.length;
 
//    // Reset styles
//    towsData.forEach(element => {
//      element.classList.remove("highlight");
//    });
 
//    let result = [];
//    let matchesCount = 0;
 
//    for (let index = 0; index < towsData.length; index++) {
//      const currentTown = towsData[index].textContent;
//      let count = 0;
 
//      for (let i = 0; i < currentTown.length; i++) {
//        let charOfTown = currentTown[i];
 
//        for (const char of searchBoxWord) {
//          let charOfSearchBox = char;
 
//          if (charOfTown === charOfSearchBox) {
//            if (count < searchSymbols) {
//              count++;
//            }
//          }
//        }
//      }
 
//      if (count === searchSymbols) {
//        result.push(index);
//        matchesCount++;
//      }
//    }
 
//    // Apply styles
//    result.forEach(index => {
//      towsData[index].classList.add("highlight");
//    });
 
//    resultField.textContent = `${matchesCount} match${matchesCount !== 1 ? 'es' : ''} found`;
//  }