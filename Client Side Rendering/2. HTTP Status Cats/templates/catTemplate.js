import { html } from "../../lab/node_modules/lit-html/lit-html.js";
import { showHide } from "../showHideData.js";

export const catElementGenerator = (catData) => {

  let catId = catData.id;
  let catImageLocation = catData.imageLocation;
  let catStatusCode = catData.statusCode;
  let catStatusMessage = catData.statusMessage;

  return html`
<li>
  <img src="./images/${catImageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${(e) => showHide(e,catId)}>Show status code</button>
            <div class="status" style="display: none" id="${catId}">
                <h4>Status Code: ${catStatusCode}</h4>
                <p>${catStatusMessage}</p>
            </div>
        </div> 
</li>
`;
};
