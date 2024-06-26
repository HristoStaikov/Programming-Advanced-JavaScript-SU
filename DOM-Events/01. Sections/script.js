function create(words) {

  words.forEach((element) => {
    
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");

    newP.appendChild(document.createTextNode(element));
    newP.style.display = "none";
    newDiv.appendChild(newP);
    newDiv.addEventListener("click", showTxt);

    document.getElementById("content").appendChild(newDiv);
  });

  function showTxt(e) {
    let currentEl = e.target;
    currentEl.querySelector("p").style.display = "inline";
  }

}
