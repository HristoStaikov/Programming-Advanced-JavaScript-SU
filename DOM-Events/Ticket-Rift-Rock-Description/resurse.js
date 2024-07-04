window.addEventListener("load", solve);

function solve() {
    
  const timeRef = document.getElementById("time");
  const dateRef = document.getElementById("date");
  const placeRef = document.getElementById("place");
  const eventRef = document.getElementById("event-name");
  const contactRef = document.getElementById("email");

  const btnAdd = document.getElementById("add-btn");

  const checkList = document.getElementById("check-list");
  const upcomingList = document.getElementById("upcoming-list");

  let info = {};

  btnAdd.addEventListener("click", (e) => { //ADD LISTER INPUT VALUES 

    e.preventDefault();
    let time = timeRef.value;
    let date = dateRef.value;
    let place = placeRef.value;
    let event = eventRef.value;
    let contact = contactRef.value;

    info.time = time;
    info.date = date;
    info.place = place;
    info.event = event;
    info.contact = contact;

    if (!time || !date || !place || !event || !contact) {
      return;
    }

    let listCheck = elementCreator(time, date, place, event, contact);
    addClear();
    btnAdd.disabled = true;

    let btnEdit = btnGenerator("edit-btn", "Edit");
    let btnContinue = btnGenerator("continue-btn", "Continue");

    listCheck.appendChild(btnEdit);
    listCheck.appendChild(btnContinue);
    checkList.appendChild(listCheck);

    btnEdit.addEventListener("click", editInfo);
    btnContinue.addEventListener("click", continueInfo);
  });

  function elementCreator(timeF, dateF, placeF, eventF, constF) {   //ELEMENT HTML STRUCTURE

    let li = document.createElement("li");

    let article = document.createElement("article");
    let pDate = document.createElement("p");
    let pIn = document.createElement("p");
    let pEvent = document.createElement("p");
    let pContact = document.createElement("p");

    li.classList.add("event-content");
    pDate.textContent = `Begins: ${dateF} at: ${timeF}`;
    pIn.textContent = `In: ${placeF}`;
    pEvent.textContent = `Event: ${eventF}`;
    pContact.textContent = `Contact: ${constF}`;

    article.appendChild(pDate);
    article.appendChild(pIn);
    article.appendChild(pEvent);
    article.appendChild(pContact);

    li.appendChild(article);
    return li;
  }

  function btnGenerator(classStr, str) { //BTN GENERATOR

    let btn = document.createElement("button");
    btn.classList.add(classStr);
    btn.textContent = str;
    return btn;
  }

  function addClear(timeInfo = "", dateInfo = "", placeInfo = "", eventInfo = "", constInfo = "") { // ADD CLEAR INPUT

    timeRef.value = timeInfo;
    dateRef.value = dateInfo;
    placeRef.value = placeInfo;
    eventRef.value = eventInfo;
    contactRef.value = constInfo;
  }

  function editInfo() {

    document.querySelector(".event-content").remove();
    addClear(info.time, info.date, info.place, info.event, info.contact);
    btnAdd.disabled = false;
  }

  function continueInfo() {

    document.querySelector(".event-content").remove();
    btnAdd.disabled = false;

    let upcoming = elementCreator(info.time, info.date, info.place, info.event, info.contact );

    let btnMove = btnGenerator("finished-btn", "Move to Finished");

    upcoming.appendChild(btnMove);
    upcomingList.appendChild(upcoming);

    btnMove.addEventListener("click", () => {
      document.querySelector(".event-content").remove();
      let finishedElement = document.getElementById("finished-list");

      let liEl = elementCreator(info.time, info.date, info.place, info.event, info.contact);
      finishedElement.appendChild(liEl);
    });

    let clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", () => {
      document.querySelector(".event-content").remove();
    });
  }
}
