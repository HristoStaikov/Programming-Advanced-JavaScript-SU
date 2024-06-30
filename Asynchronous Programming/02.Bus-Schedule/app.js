function solve() {

  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const infoBox = document.getElementById("info");
  let stopNameId = "depot";

  function depart() {

    let urlDepart = "http://localhost:3030/jsonstore/bus/schedule/" + stopNameId;
    console.log("depart");

    fetch(urlDepart, {
      method: "GET",
    })
      .then((response) => {

        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("error");
        }
      })
      .then((resObj) => {

        infoBox.textContent = `Next stop ${resObj.name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
      }).catch(err =>{
        infoBox.textContent = `Error`;
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      })
  }

  function arrive() {

    let urlArrive = "http://localhost:3030/jsonstore/bus/schedule/" + stopNameId;

    fetch(urlArrive, {
      method: "GET",
    })
      .then((response) => {
        
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("error");
        }
      })
      .then((resObj) => {

        infoBox.textContent = `Arriving at ${resObj.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        stopNameId = resObj.next;
      }).catch(err =>{
        infoBox.textContent = `Error`;
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      });
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
