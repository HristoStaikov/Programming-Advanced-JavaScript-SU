function validate() {

  let buttonSubmit = document.getElementById("submit");
  let checkBox = document.getElementById("company");
  let companyNumberField = document.getElementById("companyInfo");
  let textFieldsUserInfo = document.querySelectorAll("#userInfo div");
  let idValid = document.getElementById("valid");

  let inValid = true;
  let checkBoxEnable;

  buttonSubmit.addEventListener("click", checkIfValid);
  checkBox.addEventListener("change", showHide);

  function checkIfValid(event) {

    event.preventDefault();

    for (let index = 0; index < textFieldsUserInfo.length - 1; index++) {
      const elementField = textFieldsUserInfo[index].children[1];

      switch (elementField.id) {

        case "username":
          let userCheck = /^[a-zA-Z0-9]{3,20}$/.test(elementField.value);
          user(elementField, userCheck);
          break;

        case "email":
          let emailCheck = /@.*\./.test(elementField.value);
          user(elementField, emailCheck);
          break;

        case "password":
          let passCheck = /^[\w_]{5,15}$/.test(elementField.value);
          user(elementField, passCheck);
          break;

        case "confirm-password":
          let valid = elementField.value === textFieldsUserInfo[2].children[1].value ? true : false;
          if(valid == false){
            textFieldsUserInfo[2].children[1].style.borderColor = "red";
          }
          if(textFieldsUserInfo[2].children[1].style.borderColor === "red"){
            textFieldsUserInfo[3].children[1].style.borderColor = "red";
            break;
          }
          user(elementField, valid);
          break;
      }

    }

    if (checkBoxEnable) {
      let companyNumField = document.getElementById("companyNumber");
      let numValid = companyNumField.value >= 1000 && companyNumField.value <= 9999 ? true : false;
      user(companyNumField, numValid);
    }

    inValid ? (idValid.style.display = "block") : (idValid.style.display = "none");
  }

  function user(txtField, valid) {

    if (valid) {
      txtField.style.borderColor = "";
    } else {
      txtField.style.borderColor = "red";
      inValid = false;
    }
  }

  function showHide() {
    
    if (checkBox.checked) {
      companyNumberField.style.display = "block";
      checkBoxEnable = true;
    } else {
      companyNumberField.style.display = "none";
      inValid = false;
    }
  }
}