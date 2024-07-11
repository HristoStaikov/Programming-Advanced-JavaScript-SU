async function lockedProfile() {
  
  const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
  const date = await response.json();

  const main = document.getElementById("main");
  const profileEmpty = document.querySelector(".profile");
  profileEmpty.style.display = "none";

  creator(date);

  const showInfo = document.querySelectorAll(".user1Username");
  const buttonsShow = document.querySelectorAll("button");
  const checkBox = document.querySelectorAll(".profile");

  checkBox.forEach((LockUnlockBtn) => {
    LockUnlockBtn.childNodes[5].addEventListener("change", checkIfLocked);
    LockUnlockBtn.childNodes[9].addEventListener("change", checkIfLocked);
  });

  showInfo.forEach((profileInfo) => {
    profileInfo.style.display = "none";
  });

  buttonsShow.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let currentButton = e.target;
      let currentInfo = currentButton.parentNode.querySelector(".user1Username");

      if (currentButton.textContent === "Show more") {
        currentInfo.style.display = "block";
        currentButton.textContent = "Hide it";
      } else {
        currentInfo.style.display = "none";
        currentButton.textContent = "Show more";
      }
    });
  });

  function creator(obj) {
    for (const key in date) {
      const element = date[key];

      let profileHTML = `
<img src="./iconProfile2.png" class="userIcon" />
<label>Lock</label>
<input type="radio" name="user1Locked" value="lock" checked>
<label>Unlock</label>
<input type="radio" name="user1Locked" value="unlock"><br>
<hr>
<label>Username</label>
<input type="text" name="user1Username" value=${element.username} disabled readonly />
<div class="user1Username">
    <hr>
    <label>Email:</label>
    <input type="email" name="user1Email" value= ${element.email} disabled readonly />
    <label>Age:</label>
    <input type="text" name="user1Age" value= ${element.age} disabled readonly />
`;

      let profileDiv = document.createElement("div");
      profileDiv.classList.add("profile");
      profileDiv.innerHTML = profileHTML;

      let button = document.createElement("button");
      button.textContent = "Show more";

      profileDiv.appendChild(button);
      main.appendChild(profileDiv);
    }
  }

  function checkIfLocked(e) {
    let currentCheck = e.target;
    if (currentCheck.value === "lock") {
      currentCheck.parentElement.querySelector("button").disabled = true;
    } else {
      currentCheck.parentElement.querySelector("button").disabled = false;
    }
  }
}
