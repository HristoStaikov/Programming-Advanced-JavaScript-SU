window.addEventListener("load", solve);

function solve() {

    const ticketNumRef = document.getElementById("num-tickets");
    const seatingsRef = document.getElementById("seating-preference");
    const fullNameRef = document.getElementById("full-name");
    const emailRef = document.getElementById("email");
    const phoneNUmRef = document.getElementById("phone-number");

    const btnGetTickets = document.getElementById("purchase-btn")

    const preview = document.getElementById("ticket-preview")
    const readyToGet = document.getElementById("ticket-purchase")

    let info = {}

    btnGetTickets.addEventListener("click", ()=> {

let tickets = ticketNumRef.value
let seats = seatingsRef.value
let fullName = fullNameRef.value
let email = emailRef.value
let phone = phoneNUmRef.value


if (!tickets || !seats || !fullName || !email || !phone) {
    return; 
}


if (isNaN(tickets) || isNaN(phone)) {
    return; 
}


if (typeof fullName !== 'string' || typeof email !== 'string') {
    return; 
}

info.tickets = tickets
info.seats = seats
info.fullName = fullName
info.email = email
info.phone = phone

let elementTicket = elementCreator(tickets, seats, fullName, email, phone)

let btnContainer = document.createElement("div")

btnContainer.classList.add("btn-container")

let btnEdit = btnGenerator("edit-btn", "Edit");
let btnContinue = btnGenerator("next-btn", "Next");

btnContainer.appendChild(btnEdit)
btnContainer.appendChild(btnContinue)
elementTicket.appendChild(btnContainer)
preview.appendChild(elementTicket)

btnGetTickets.disabled = true
addClear()

btnEdit.addEventListener("click", editInfo)
btnContinue.addEventListener("click", continueInfo)

    });


    function elementCreator(ticketF, seatF, nameF, emailF, phoneF) {   //ELEMENT HTML STRUCTURE

        let li = document.createElement("li");
    
        let article = document.createElement("article");
        let pCount = document.createElement("p");
        let pPref = document.createElement("p");
        let pName = document.createElement("p");
        let pEmail = document.createElement("p");
        let pPhone = document.createElement("p");
    
        li.classList.add("ticket-purchase");
        pCount.textContent = `Count: ${ticketF}`;
        pPref.textContent = `Preference: ${seatF}`;
        pName.textContent = `To: ${nameF}`;
        pEmail.textContent = `Email: ${emailF}`;
        pPhone.textContent = `Phone Number: ${phoneF}`;
    
        article.appendChild(pCount);
        article.appendChild(pPref);
        article.appendChild(pName);
        article.appendChild(pEmail);
        article.appendChild(pPhone);
    
        li.appendChild(article);
        return li;
      }

      function btnGenerator(classStr, str) { //BTN GENERATOR

        let btn = document.createElement("button");
        btn.classList.add(classStr);
        btn.textContent = str;
        return btn;
      }

      function addClear(ticketsInfo = "", seatsInfo = "", fullNameInfo = "", emailInfo = "", phoneInfo = "") { // ADD CLEAR INPUT

        ticketNumRef.value = ticketsInfo;
        seatingsRef.value = seatsInfo;
        fullNameRef.value = fullNameInfo;
        emailRef.value = emailInfo;
        phoneNUmRef.value = phoneInfo;
      }

      function editInfo() {

        document.querySelector(".ticket-purchase").remove();
        addClear(info.tickets, info.seats, info.fullName, info.email, info.phone);
        btnGetTickets.disabled = false;
      }


      function continueInfo() {

        document.querySelector(".ticket-purchase").remove();
        btnGetTickets.disabled = false;
    
        let getTicketsEL = elementCreator(info.tickets, info.seats, info.fullName, info.email, info.phone );
    
        let buyBtn = btnGenerator("buy-btn", "Buy");
        buyBtn.addEventListener("click", buy)
        getTicketsEL.appendChild(buyBtn)
        readyToGet.appendChild(getTicketsEL)

document.querySelector(".ticket-purchase").querySelector("article").appendChild(buyBtn)
      }

      function buy (){
        document.querySelector(".ticket-purchase").remove();

        let h2 = document.createElement("h2");
        h2.textContent = "Thank you for your purchase!";
        let backBtn = btnGenerator("back-btn", "Back");
        
        let btnContent = document.querySelector(".bottom-content");
        btnContent.appendChild(h2);
        btnContent.appendChild(backBtn);
        
        backBtn.addEventListener("click", () => {
            location.reload();
        });
    }
}
