function attachEvents() {

  const fieldValue = document.getElementById("location");
  const btnGet = document.getElementById("submit");
  const forecastId = document.getElementById("forecast");
  const currentId = document.getElementById("current");
  const upcomingId = document.getElementById("upcoming");

  let symbols = {
    Sunny: "&#x2600",
    "Partly sunny": "&#x26C5",
    Overcast: "&#x2601",
    Rain: "&#x2614",
    Degrees: "&#176",
  };

  btnGet.addEventListener("click", onClick);

  const url = "http://localhost:3030/jsonstore/forecaster/locations";

  function onClick() {

    fetch(url)
      .then((response) => {

        if (response.ok) {
          return response.json();
        } else {
          throw new Error("error");
        }
      })
      .then((resArr) => {

        let codeObj = null;

        let validData = false;

        resArr.forEach((element) => {
          if (element.name === fieldValue.value) {
            codeObj = element.code;
            validData = true;
          }

          if (!validData) {
            forecastId.style.display = "block";
            currentId.childNodes[1].textContent = "Error";
            return;
          }
        });

        if (codeObj !== null) {
          currentConditions(codeObj);
          upComingForecast(codeObj);
        }
      })
      .catch((error) => {
        console.log(error, "it is me the evil error haha");
        forecastId.style.display = "block";
        currentId.childNodes[1].textContent = "Error";
      });
  }

  function currentConditions(value) {

    let currentBroadcast = "http://localhost:3030/jsonstore/forecaster/today/" + value;

    fetch(currentBroadcast)
      .then((responseWether) => {

        if (responseWether.ok) {
          return responseWether.json();
        } else {
          throw new Error("error");
        }
      })
      .then((resObj) => {

        let objForecast = Object.values(resObj);
        forecastId.style.display = "block";

        currentId.appendChild(elementCreatorCurrent(objForecast));
      })
      .catch((error) => {
        console.log(error, "it is me the evil error haha");
        currentId.childNodes[1].textContent = "Error";
      });
  }

  function upComingForecast(value) {

    let upComingBroadcast = "http://localhost:3030/jsonstore/forecaster/upcoming/" + value;

    fetch(upComingBroadcast)
      .then((responseUpComing) => {

        if (responseUpComing.ok) {
          return responseUpComing.json();
        } else {
          throw new Error("error");
        }
      })
      .then((resObj) => {

        let arrObj = Object.values(resObj);

        upcomingId.appendChild(elementCreatorUpComing(arrObj));
      })
      .catch((error) => {
        console.log(error, "it is me the evil error haha");
        upcomingId.childNodes[1].textContent = "Error";
      });
  }

  function elementCreatorCurrent(inputArr) {

    let divForecasts = document.createElement("div");
    let spanSymbol = document.createElement("span");
    let spanCondition = document.createElement("span");

    let spanEl1 = document.createElement("span");
    let spanEl2 = document.createElement("span");
    let spanEl3 = document.createElement("span");

    spanEl1.classList.add("forecast-data");
    spanEl2.classList.add("forecast-data");
    spanEl3.classList.add("forecast-data");

    spanEl1.textContent = inputArr[1];
    spanEl2.textContent = `${inputArr[0].low}°/${inputArr[0].high}°`;
    spanEl3.textContent = inputArr[0].condition;

    divForecasts.classList.add("forecasts");

    spanSymbol.classList.add("condition", "symbol"); // Adding multiple classes
    spanCondition.classList.add("condition");

    spanSymbol.innerHTML = symbols[inputArr[0].condition];

    spanCondition.appendChild(spanEl1);
    spanCondition.appendChild(spanEl2);
    spanCondition.appendChild(spanEl3);
    divForecasts.appendChild(spanSymbol);
    divForecasts.appendChild(spanCondition);

    return divForecasts;
  }

  function elementCreatorUpComing(arrayWithObj) {
    
    let divForecastInfo = document.createElement("div");
    divForecastInfo.classList.add("forecast-info");

    for (const obj of arrayWithObj[0]) {
      let spanUpComing = document.createElement("span");
      let spanSymbolUpComing = document.createElement("span");
      let spanForeCastData1 = document.createElement("span");
      let spanForeCastData2 = document.createElement("span");

      spanUpComing.classList.add("upcoming");
      spanSymbolUpComing.classList.add("symbol");
      spanForeCastData1.classList.add("forecast-data");
      spanForeCastData2.classList.add("forecast-data");

      spanSymbolUpComing.innerHTML = symbols[obj.condition];
      spanForeCastData1.textContent = `${obj.low}°/${obj.high}°`;
      spanForeCastData2.textContent = obj.condition;

      spanUpComing.appendChild(spanSymbolUpComing);
      spanUpComing.appendChild(spanForeCastData1);
      spanUpComing.appendChild(spanForeCastData2);

      divForecastInfo.appendChild(spanUpComing);
    }

    return divForecastInfo;
  }
}

attachEvents();
