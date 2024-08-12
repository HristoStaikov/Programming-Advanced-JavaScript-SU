import { towns } from "./towns.js";
import { render } from "../lab/node_modules/lit-html/lit-html.js";
import { wrapper } from "./templates/townsWrapper.js";

const townsDiv = document.getElementById("towns");
const fieldData = document.getElementById("searchText");
const searchBtn = document.querySelector("button");
const result = document.querySelector("#result");

render(wrapper(towns), townsDiv);

searchBtn.addEventListener("click", search);

function search() {
  let matches = false;
  let count = 0;

  let textFromField = fieldData.value;
  let towsElements = document.querySelectorAll("li");

  towns.forEach((town, index) => {
    debugger;
    if (town.includes(textFromField) && textFromField !== "") {
      towsElements[index].classList.add("active");
      matches = true;
      count++;
    }
  });

  if (matches) {
    addMatches(count);
  }
  matches = false;
}

function addMatches(count) {
  let matchesEl = document.createElement("matches");
  matchesEl.textContent = `${count} matches found`;
  result.appendChild(matchesEl);
}
