function registerUser() {

  const logoutBtn = document.querySelector("#logout");
  logoutBtn.style.display = "none";

  const url = "http://localhost:3030/users/register";

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    let data = Object.fromEntries(formData);

    let regExEmptyField = /^\s*$/;
    let regExEmailValidation = /^\w+@\w+\.\w+$/;

    try {
      if (regExEmptyField.test(data.password)) {
        throw new Error("Try again, invalid pass");
      }

      if (regExEmptyField.test(data.rePass)) {
        throw new Error("Try again, invalid re pass");
      }

      if (!regExEmailValidation.test(data.email)) {
        throw new Error("Try again, invalid Email");
      }

      if (data.password !== data.rePass) {
        throw new Error("Try again, passwords don't match");
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
        email: data.email,
        password: data.password,
        rePass: data.rePass,
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
        sessionStorage.setItem("token", data.accessToken);
        sessionStorage.setItem("id", data._id);
        sessionStorage.setItem("email", data._email);

        window.location.href = "index.html?source=register";
      })
      .catch((error) => {
        console.log(error);
      });
  });

}
registerUser();
