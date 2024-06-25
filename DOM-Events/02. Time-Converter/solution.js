// function attachEventsListeners() {
//   const divElements = document.querySelectorAll("div");

//   const daysId = document.querySelector("#days");
//   const hoursId = document.querySelector("#hours");
//   const minutesId = document.querySelector("#minutes");
//   const secondsId = document.querySelector("#seconds");

//   daysId.value = "";
//   hoursId.value = "";
//   minutesId.value = "";
//   secondsId.value = "";

//   for (const div of divElements) {
//     let currentButton = div.querySelectorAll("input")[1];
//     currentButton.addEventListener("click", convert);
//   }

//   function convert(e) {
//     let valueInput = Number(e.target.parentElement.children[1].value);

//     let timeUnits = e.target.parentElement.children[1].id;

//     switch (timeUnits) {
//       case "days":
//         daysConverter(valueInput);
//         break;

//       case "hours":
//         hoursConverter(valueInput);
//         break;

//       case "minutes":
//         minutesConverter(valueInput);
//         break;

//       case "seconds":
//         secondsConverter(valueInput);
//         break;

//       default:
//         break;
//     }
//   }

//   function daysConverter(day) {
//     let hours = day * 24;
//     let minutes = hours * 60;
//     let seconds = minutes * 60;
    
//     hoursId.value = hours;
//     minutesId.value = minutes;
//     secondsId.value = seconds;
//   }

//   function hoursConverter(hours) {
//     let days = hours / 24;
//     let minutes = hours * 60;
//     let seconds = minutes * 60;

//     daysId.value = days;
//     minutesId.value = minutes;
//     secondsId.value = seconds;
//   }
//   function minutesConverter(minutes) {
//     let hours = minutes / 60;
//     let seconds = minutes * 60;
//     let days = hours / 24;

//     daysId.value = days;
//     hoursId.value = hours;
//     secondsId.value = seconds;
//   }

//   function secondsConverter(seconds) {
//     let minutes = seconds / 60;
//     let hours = minutes / 60;
//     let days = hours / 24;

//     daysId.value = days;
//     hoursId.value = hours;
//     minutesId.value = minutes;
//   }
// }

// --------------------- Toshko

function attachEventsListeners() {
  const buttonRef = Array.from(document.querySelectorAll("input[type=button]"));

  const inputs = Array.from(document.querySelectorAll("input[type=text]"));

  buttonRef.forEach((button) => button.addEventListener("click", onClickHandler));

  function onClickHandler(event) {
    let value = Number(event.target.parentElement.children[1].value);
    let unit = event.target.parentElement.children[1].id;

    switch (unit) {
      case "days": propagateValue(value);
        break;
      case "hours": propagateValue(value / 24);
        break;
      case "minutes": propagateValue(value / 24 / 60);
        break;
      case "seconds": propagateValue(value / 24 / 60 / 60);
        break;
    }
  }

  function propagateValue(value) {
    inputs[0].value = value;
    let currentValue = value * 24;

    for (let i = 1; 1 < inputs.length; i++) {
      let input = inputs[i];
      input.value = currentValue;
      currentValue *= 60;
    }
  }
}
