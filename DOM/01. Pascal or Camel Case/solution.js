function solve() {

  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;
  let resultOfTransform = document.getElementById("result");

  let camelCase = true;

  let result = "";

  if (namingConvention === "Camel Case") {
    camelCase = true;

  } else if (namingConvention === "Pascal Case") {
    camelCase = false;

  } else {

    result = "Error!";
    resultOfTransform.textContent = result;
    return;
  }

  text = text.toLowerCase();
  let strToArr = text.split(" ");

  for (let index = 0; index < strToArr.length; index++) {
    let word = strToArr[index];

    if (camelCase) {
      result += index === 0 ? word : firstCharToUpperCase(word);
    } else {
      result += firstCharToUpperCase(word);
    }
  }

  function firstCharToUpperCase(str) {
    let wortCapitalLetter = str[0].toUpperCase() + str.substring(1);
    result += wortCapitalLetter;
    return wortCapitalLetter;
  }

  resultOfTransform.textContent = result;
}


// let textInput = document.getElementById("text").value;
// let typeTransform = document.getElementById("naming-convention").value;

// let result = "";
// let wordToLowCs = textInput.toLowerCase().split(" ");

// switch (typeTransform) {

//   case "Camel Case":

//     wordToLowCs.forEach((element, index) => {
//       if (index !== 0) {
//         let currentChar = element[0];
//         let firstCharUpper = element[0].toUpperCase();
//         let word = element.replace(currentChar, firstCharUpper);
//         result += word;
//       } else {
//         result += element;
//       }
//     });

//     break;

//   case "Pascal Case":

//     for (const el of wordToLowCs) {
//       let currentChar = el[0];
//       let firstCharUpper = el[0].toUpperCase();
//       let word = el.replace(currentChar, firstCharUpper);
//       result += word;
//     }

//     break;

//   default:
//     result = "Error!";
//     break;
// }
// document.getElementById("result").textContent = result;