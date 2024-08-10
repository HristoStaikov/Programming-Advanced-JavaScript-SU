import { town } from "./temlpates/townTemplate.js";
import { render, html } from "../lab/node_modules/lit-html/lit-html.js";

let root = document.getElementById("root");

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  let townsData = data.towns.split(", ");

  let txtTowns = html`<ul>${townsData.map((currentTown) => town(currentTown))}</ul>`;

  render(txtTowns, root);
});
