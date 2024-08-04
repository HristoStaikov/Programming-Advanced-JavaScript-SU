function homePage() {

  let baseUrl = "http://localhost:3030";

  const catches = document.getElementById("catches");
  const email = document.getElementsByClassName("email");
  const form = document.querySelector("form");

  const addBtn = document.querySelector(".add");
  const loadBtn = document.querySelector(".load");
  const logoutBtn = document.querySelector("#logout");
  const loginBtn = document.getElementById("login");
  const registerBtn = document.getElementById("register");

  logoutBtn.addEventListener("click", logOut);
  loadBtn.addEventListener("click", onLoad);

  const token = sessionStorage.getItem("token");
  const emailUser = sessionStorage.getItem("email");
  const id = sessionStorage.getItem("id");

  let creatorsCatches = [];

  const urlParams = new URLSearchParams(window.location.search);
  const source = urlParams.get("source");

  if (!token || source === "register") {

    logoutBtn.style.display = "none";
    loginBtn.style.display = "inline";
    registerBtn.style.display = "inline";
    email[0].textContent = `Welcome, guest`;
  } else {

    logoutBtn.style.display = "inline";
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
    const storedEmail = sessionStorage.getItem("email");
    email[0].textContent = `Welcome, ${storedEmail}`;
    console.log("User is authenticated with token:", token);
    add();
  }

  function logOut(e) {

    e.preventDefault();

    creatorsCatches = [];

    fetch(baseUrl + "/users/logout", {
      method: "GET",
      headers: {
        "X-Authorization": token,
      },
    })
      .then((response) => {

        if (response.status == 204) {
          console.log("Logout successful");
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("id");
          window.location.href = "index.html";
        } else {
          throw new Error(response.status);
        }
      })
      .catch((error) => {
        console.log("Logout failed:", error);
      });
  }

  function onLoad() {
    fetch(baseUrl + "/data/catches")
      .then((resCatches) => {

        if (resCatches.ok) {
          return resCatches.json();
        } else {
          throw new Error(resCatches.status);
        }
      })
      .then((dataCatches) => {
        creator(dataCatches);

        checkUserId();
      });

    let commands = catches.querySelectorAll("div");

    for (let index = 0; index < commands.length; index++) {
      commands[index].remove();
    }
  }

  function creator(arr) {

    arr.forEach((element) => {
      let divEl = document.createElement("div");
      divEl.classList.add("catch");

      let htmlStructure = `<label>Angler</label>
<input type="text" class="angler" value="${element.angler}" disabled>
<label>Weight</label>
<input type="text" class="weight" value="${element.weight}" disabled>
<label>Species</label>
<input type="text" class="species" value="${element.species}" disabled>
<label>Location</label>
<input type="text" class="location" value="${element.location}" disabled>
<label>Bait</label>
<input type="text" class="bait" value="${element.bait}" disabled>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${element.captureTime}" disabled>
<button class="update" data-id="${element._id}" disabled>Update</button>
<button class="delete" data-id="${element.email}" disabled>Delete</button>`;

      divEl.innerHTML = htmlStructure;
      catches.appendChild(divEl);
    });
  }

  function add() {

    addBtn.disabled = false;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const dataObj = Object.fromEntries(formData.entries());

      try {
        if (
          dataObj.angler === "" ||
          dataObj.weight === "" ||
          dataObj.species === "" ||
          dataObj.location === "" ||
          dataObj.bait === "" ||
          dataObj.captureTime === ""
        ) {
          throw new Error("one or more of the fields is empty");
        }
      } catch (error) {
        console.log(error.message);
        return;
      }

      fetch(baseUrl + "/data/catches", {
        method: "POST",
        headers: {
          "X-Authorization": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          angler: dataObj.angler,
          weight: dataObj.weight,
          species: dataObj.species,
          location: dataObj.location,
          bait: dataObj.bait,
          captureTime: dataObj.captureTime,
          email: emailUser,
        }),
      })
        .then((response) => {

          if (response.status == 200) {
            console.log("Catch added successfully");
            let fieldsForm = form.querySelectorAll("input");

            for (let element = 0; element < fieldsForm.length; element++) {
              const currentField = fieldsForm[element];

              if (currentField.value !== "") {
                currentField.value = "";
              }
            }
          } else {
            throw new Error(response.status);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  function checkUserId() {

    const deleteBtn = document.querySelectorAll(".delete");

    fetch(baseUrl + "/data/catches")
      .then((response) => {

        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        data.forEach((obj) => {

          if (obj["_ownerId"] === id) {
            creatorsCatches.push(obj);
          }
        });

        if (creatorsCatches.length > 0) {

          for (let index = 0; index < creatorsCatches.length; index++) {

            const currObj = creatorsCatches[index];

            deleteBtn.forEach((btn) => {
              let upDateBtn = btn.parentNode.querySelector(".update");
              if (currObj.email === btn.dataset.id) {
                btn.disabled = false;
                upDateBtn.disabled = false;
                btn.addEventListener("click", deleteCatch);
                upDateBtn.addEventListener("click", updateCath);
              } else {
                btn.disabled = true;
                upDateBtn.disabled = true;
              }
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateCath(e) {

    let CurrentCatch = e.currentTarget;

    let fieldsForm = CurrentCatch.parentNode.querySelectorAll("input");

    if (fieldsForm[0].disabled) {
      for (let element = 0; element < fieldsForm.length; element++) {
        const currentField = fieldsForm[element];
        currentField.disabled = false;
      }
      return;
    }

    let valuesArr = [];

    fieldsForm.forEach((input) => {

      if (input.value !== "") {
        valuesArr.push(input.value);
      } else {
        console.log("one or more fields are empty");
        return;
      }
    });

    if (valuesArr.length == 0) {
      console.log("error arr");
      return;
    }

    fetch(baseUrl + "/data/catches/" + CurrentCatch.dataset.id, {
      method: "PUT",
      headers: {
        "X-Authorization": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        angler: valuesArr[0],
        weight: valuesArr[1],
        species: valuesArr[2],
        location: valuesArr[3],
        bait: valuesArr[4],
        captureTime: valuesArr[5],
        email: emailUser,
      }),
    })
      .then((response) => {

        if (response.status == 200) {
          console.log("Catch updated");
        } else {
          throw new Error(response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteCatch(e) {

    let currentDeleteBtn = e.target.parentNode;

    let id = currentDeleteBtn.querySelector(".update").dataset.id;

    async function deleteRequest() {

      let request = await fetch(baseUrl + "/data/catches/" + id, {
        method: "DELETE",
        headers: {
          "X-Authorization": token,
          "Content-Type": "application/json",
        },
      });

      try {
        
        if (request.ok) {
          console.log("Catch DELETED successfully");
        } else {
          throw new Error(response.status);
        }
      } catch (error) {
        console.log(error);
      }

      let element = document.querySelector(`[data-id="${id}"]`);
      element.parentNode.remove();
    }

    deleteRequest();
  }
}
homePage();
