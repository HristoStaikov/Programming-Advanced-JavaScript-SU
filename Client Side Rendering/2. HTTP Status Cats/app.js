import { cats } from "./catSeeder.js";
import { catsWrapper } from "./templates/wrapperTemplate.js";
import { render, html } from "../lab/node_modules/lit-html/lit-html.js";

let allCatsEl = document.getElementById("allCats");

render(catsWrapper(cats), allCatsEl);
 