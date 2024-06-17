function toggle() {
  let text = document.getElementById("extra").textContent;

  let button = document.getElementsByClassName("button")[0].textContent;

  if (button === "More") {
    text = document.getElementById("extra").style.display = "block";
    document.getElementsByClassName("button")[0].textContent = "Less";
  } else {
    text = document.getElementById("extra").style.display = "none";
    document.getElementsByClassName("button")[0].textContent = "More";
  }
}


// function toggle() {
//   let button = document.getElementsByClassName("button")[0];

//   button.textContent === "More" ? (button.textContent = "Less") : (button.textContent = "More");

//   let getId = document.getElementById("extra");

//   if (button.textContent === "Less") {
//     getId.style.display = "block";
//   } else {
//     getId.style.display = "none";
//   }
// }