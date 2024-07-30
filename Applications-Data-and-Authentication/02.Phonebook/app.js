function attachEvents() {
  
  const loadBtn = document.getElementById("btnLoad");
  const createBtn = document.getElementById("btnCreate");
  const phoneBookUl = document.getElementById("phonebook");
  const person = document.getElementById("person");
  const phone = document.getElementById("phone");

  let url = "http://localhost:3030/jsonstore/phonebook";

  loadBtn.addEventListener("click", onLoad);

  createBtn.addEventListener("click", () => {

    if (person.value !== "" && phone.value !== "") {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ person: person.value, phone: phone.value }),
      })
        .then((response) => {
          if (response.status == 200) {
            return response.json();
          } else {
            throw new Error(response.status);
          }
        })
        .then((data) => {
          console.log(data);
          person.value = "";
          phone.value = "";
          onLoad();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  function onLoad() {

    if (phoneBookUl.textContent !== "") {
      let phoneNumsAll = phoneBookUl.querySelectorAll("li");
      phoneNumsAll.forEach((phone) => {
        phone.remove();
      });
    }

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response);
        }
      })
      .then((data) => {
        console.log(Object.values(data));
        let phonesObj = Object.values(data);
        elementCreator(phonesObj);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function elementCreator(arrObj) {

    for (const obj in arrObj) {
      let liEl = document.createElement("li");
      let delBtn = document.createElement("button");

      delBtn.textContent = "Delete";
      delBtn.id = arrObj[obj]._id;
      liEl.textContent = `${arrObj[obj].person}: ${arrObj[obj].phone}`;
      delBtn.addEventListener("click", deleteNumber);

      if (arrObj[obj].phone.length <= 11) {
        liEl.append(delBtn);
        phoneBookUl.appendChild(liEl);
      }
    }
  }

  function deleteNumber(e) {

    let currentPhoneNum = e.target;
    let id = currentPhoneNum.id;

    fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Delete successful", data);
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });

    currentPhoneNum.parentElement.remove();
  }
}

attachEvents();
