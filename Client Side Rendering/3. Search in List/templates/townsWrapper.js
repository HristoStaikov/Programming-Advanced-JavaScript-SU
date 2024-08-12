import { html } from "../../lab/node_modules/lit-html/lit-html.js";
import { townGenerator } from "./townsCreator.js";

export const wrapper = (townsArr) => {
    
  return html`
    <ul>
      ${townsArr.map((town) => townGenerator(town))}
    </ul>
  `;
};
