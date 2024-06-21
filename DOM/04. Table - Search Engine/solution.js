// function solve() {
//   document.querySelector("#searchBtn").addEventListener("click", onClick);

//   let inputField = document.getElementById("searchField");
//   let tableRows = document.querySelectorAll("tbody tr");

//   function onClick() {
//     let inputFieldText = inputField.value;

//     for (const el of tableRows) {
//       let row = el.querySelectorAll("td");

//       for (const td of row) {
//         let word = td.textContent.toLowerCase();

//         if (word.includes(inputFieldText)) {
//           el.classList.add("select");
//           break;
//         } else {
//           el.classList.remove("select");
//         }
//       }
//     }
//     inputField.value = "";
//   }
// }





function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick)

function onClick() {
  let tableRows = document.querySelectorAll("tbody tr td");
  let inputField = document.getElementById("searchField").value;

  let res = document.querySelectorAll("tbody tr");

  for (let i = 0; i < res.length; i++) {
    const element = res[i];
      element.className = "";
    
  }

  for (let index = 0; index < tableRows.length; index++) {
    const row = tableRows[index].textContent.toLowerCase();

    if (row.includes(inputField.toLowerCase()) && inputField !== "") {
      let tdNum = Math.floor(index / 3);
      let wholeRow = document.querySelectorAll("tbody tr")[tdNum];
      wholeRow.className = "select";
    }
  }
}
}