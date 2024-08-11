import { html } from "../../lab/node_modules/lit-html/lit-html.js";
import { catElementGenerator } from "./catTemplate.js";

export const catsWrapper = (arrCats) => {
  return html`
    <ul>
      ${arrCats.map((catIndex) => catElementGenerator(catIndex))}
    </ul>
  `;
};
