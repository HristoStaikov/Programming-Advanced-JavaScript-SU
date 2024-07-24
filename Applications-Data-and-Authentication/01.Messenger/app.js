function attachEvents() {

  const url = "http://localhost:3030/jsonstore/messenger";

  const fields = document.querySelectorAll("input");
  const submitBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");
  const message = document.getElementById("messages");

  submitBtn.addEventListener("click", () => {

  if(fields[0].value !== "" && fields[1].value !== ""){
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: fields[0].value,
        content: fields[1].value,
      }),
    })
      .then((response) => {
        if (response.status == 200) {
        } else {
          throw new Error(response);
        }
      })
      .catch((error) => {
        console.log(error.status);
      });

    if (fields[0].value !== "") {
      fields[0].value = "";
    }

    if (fields[1].value !== "") {
      fields[1].value = "";
    }
  }
  });

  refreshBtn.addEventListener("click", onLoad);

  function onLoad () {
    
    if (message.textContent !== "") {
      message.textContent = "";
    }

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(response);
        }
      })
      .then((data) => {
        for (const key in data) {
          message.textContent += `${data[key].author}: ${data[key].content}\n`;
        }
        message.textContent = message.textContent.trim()
      })
      .catch((error) => {
        console.log(error.status);
      });
  }
}

attachEvents();
