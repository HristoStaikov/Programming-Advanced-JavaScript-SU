import { createPostPreview } from "./createPost.js"
import { dateTime } from "./date_time.js"

export function post() {

    const form = document.querySelector("form");
    let buttonClicked;

    form.addEventListener("submit", async(e) => {
        e.preventDefault();

        const topics = document.querySelector("#topics")
        let divEls = topics.querySelectorAll("div")
        divEls.forEach(div => div.remove())
       
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        buttonClicked = e.submitter;
        
        try {
          if ((data.topicName === "" || data.topicName === "" || data.topicName === "") && buttonClicked.textContent !== "Cancel") {
            throw new Error("Error, one of the fields is empty!");
          } else if (buttonClicked.textContent === "Post") {
            await createPost(data);
          }
        } catch (error) {
          console.log(error);
        }finally {
            form.reset(); // Reset the form regardless of success or failure
          }
    
      });

    }

      function createPost(dataForm) {

  fetch("http://localhost:3030/jsonstore/collections/myboard/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic: dataForm.topicName,
      user: dataForm.username,
      text: dataForm.postText,
      date: `${dateTime().year}-${dateTime().month}-${dateTime().day}/ ${dateTime().hours} : ${dateTime().minutes} : ${dateTime().seconds}`
    }),
  })
    .then((response) => {
      if (response.status == 200) {
        createPostPreview()
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((error) => {
      console.log(error);
    });
}



