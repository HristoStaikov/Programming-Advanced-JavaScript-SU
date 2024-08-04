function loginUser() {

  const url = "http://localhost:3030/users/login";
  const logoutBtn = document.querySelector("#logout");
  logoutBtn.style.display = "none";

  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries());

    let regExEmptyFieldLogIn = /^\s*$/;
    let regExEmailValidationLogIn = /^\w+@\w+\.\w+$/;

    try {
      if (!regExEmailValidationLogIn.test(dataObj.email)) {
        throw new Error("Try again, invalid email");
      }

      if (regExEmptyFieldLogIn.test(dataObj.password)) {
        throw new Error("Try again, invalid password");
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
        email: dataObj.email,
        password: dataObj.password,
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

        console.log(data);
        sessionStorage.setItem("email", data.email);
        sessionStorage.setItem("id", data._id);
        sessionStorage.setItem("token", data.accessToken);
        console.log("Login successful");
        window.location.href = "index.html?source=login"
      })
      .catch((error) => {
        console.log("Login failed:", error);
      });
  });

}
loginUser();
