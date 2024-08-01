function solve() {

  const form = document.getElementById("form");
  const result = document.querySelector("tbody");
  const inputs = document.querySelectorAll("input")

  const url = "http://localhost:3030/jsonstore/collections/students";

  resultSub()


  form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const arrData = [...formData.entries()];

    try {
      if (arrData[0][1] === "" || arrData[1][1] === "" || arrData[2][1] === "" || arrData[3][1] === "") {
        throw new Error("Error: Please fill in all required fields.");
      }
    } catch (error) {
      console.log(error.message);
      return;
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: arrData[0][1],
        lastName: arrData[1][1],
        facultyNumber: arrData[2][1],
        grade: arrData[3][1],
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        resultSub(data);
        inputs.forEach(field => {
            if(field.value !== ""){
                field.value = "";
            }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  async function resultSub() {

    let response = await fetch(url);
    let data = null;

    try {
      if (response.ok) {
        data = await response.json();
      } else {
        throw new Error("neshto si eba maikata");
      }
    } catch (error) {
      console.log(error.message);
    }

    if (data !== null) {
      let arrObj = Object.values(data);
      resultStudents(arrObj);
    }
  }

  function resultStudents(arr) {
  
    let check = document.querySelector("tbody").querySelectorAll("tr[id]");

    let bufferArrId = [];

    check.forEach(student => {
      bufferArrId.push(student.id);
    });

    for (const obj in arr) {
      let currentId = arr[obj]._id;

      let trEl = document.createElement("tr");
      trEl.id = currentId;
      let thElFirst = document.createElement("th");
      let thElLast = document.createElement("th");
      let thElFaculty = document.createElement("th");
      let thElGrade = document.createElement("th");

      thElFirst.textContent = arr[obj].firstName;
      thElLast.textContent = arr[obj].lastName;
      thElFaculty.textContent = arr[obj].facultyNumber;
      thElGrade.textContent = arr[obj].grade;

if(!bufferArrId.includes(currentId)){
  trEl.appendChild(thElFirst);
  trEl.appendChild(thElLast);
  trEl.appendChild(thElFaculty);
  trEl.appendChild(thElGrade);
  result.appendChild(trEl);
}
  
    
  }

}

}
solve();
