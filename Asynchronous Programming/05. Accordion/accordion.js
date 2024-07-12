document.addEventListener("DOMContentLoaded", solution);

function solution() {

  const mainId = document.getElementById("main");
  const url = "http://localhost:3030/jsonstore/advanced/articles/list";

  fetch(url)
    .then((response) => {

      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Qbalka");
      }
    })
    .then((arrDate) => {

      for (const obj of arrDate) {
        let divAccordion = document.createElement("div");

        let articleHtml = `
<div class="head">
<span>${obj.title}</span>
<button class="button" id="${obj["_id"]}">More</button>
</div>
 <div class="extra">
<p>${obj.title} .....</p>
</div>`;

        divAccordion.classList.add("accordion");
        divAccordion.innerHTML = articleHtml;

        mainId.appendChild(divAccordion);
      }

      let buttons = document.querySelectorAll("button");
      buttons.forEach((btn) => {
        btn.addEventListener("click", onClick);
      });

    })
    .catch((error) => {
      console.log(error);
    });

  function onClick(e) {

    let currentArticle = e.target;
    let btnId = currentArticle.id;

    const urlId = "http://localhost:3030/jsonstore/advanced/articles/details/" + btnId;

    fetch(urlId)
      .then((responseById) => {

        if (responseById.ok) {
          return responseById.json();
        } else {
          throw new Error("Banan");
        }
      })
      .then((responseObj) => {
        
        let pEl = currentArticle.parentNode.parentElement.querySelector("p");
        pEl.textContent = responseObj.content;

        if (currentArticle.textContent === "More") {
          pEl.parentElement.style.display = "block";
          currentArticle.textContent = "Less";
        } else {
          currentArticle.textContent = "More";
          pEl.parentElement.style.display = "none";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
