import { dateTime } from "./date_time.js";

export function postComment() {
  const form = document.getElementById("comment-form");

  form.addEventListener("submit", (e) => {
    let post = document.querySelector(".header");
    e.preventDefault();

    const formData = new FormData(e.target);
    let dataForm = Object.fromEntries(formData.entries());
      if (dataForm.postText === "" || dataForm.username === "") {
        throw new Error("one of the fields is empty");
      
      }
    

    fetch("http://localhost:3030/jsonstore/collections/myboard/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: dataForm.username,
        text: dataForm.postText,
        date: dateTime().currentDate,
        idCurrentPost: post.id,
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          console.log("Comment created");
          form.reset();
        } else {
          throw new Error(response.status);
        }
      })
      .then((error) => {
        console.log(error);
      });
    showComments();
  });
}

export function showComments() {
  const usersComments = document.querySelectorAll("#user-comment");
  const commentDiv = document.querySelector(".comment");

  if (usersComments) {
    usersComments.forEach((element) => {
      element.remove();
    });
  }

  fetch("http://localhost:3030/jsonstore/collections/myboard/comments")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((resData) => {
      let data = Object.values(resData);
      let id = document.querySelector(".header").id;
      for (const obj of data) {
        if (obj.idCurrentPost == id) {
          let contentHtml = `
                        <div class="topic-name-wrapper">
                            <div class="topic-name">
                                <p><strong>${obj.user}</strong> commented on <time>${obj.date}</time></p>
                                <div class="post-content">
                                    <p>${obj.text}</p>
                                </div>
                            </div>
                        </div>
    `;
          let divEl = document.createElement("div");
          divEl.innerHTML = contentHtml;
          divEl.id = "user-comment";
          commentDiv.appendChild(divEl);
        }
      }
    })
    .then((error) => {
      console.log(error);
    });
}
