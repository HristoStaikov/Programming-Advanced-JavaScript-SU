export function showHide(e, id) {

  const currentCat = document.getElementById(id);

  let currentBtn = e.target;

  if (currentBtn.textContent === "Show status code") {
    currentCat.style.display = "block";
    currentBtn.textContent = "Hide";
  } else {
    currentCat.style.display = "none";
    currentBtn.textContent = "Show status code";
  }
}
