import { showComments } from "./postComment.js"
export function load() {
  
  let topic = document.getElementById("topics");
  let post = document.getElementById("post");
  let form = document.querySelector(".new-topic-border");
  let comment = document.querySelector(".comment");
  let commentsDiv = document.querySelector("#container")

  topic.addEventListener("click", (e) => {
    commentsDiv.style.display = "block"
    let currentPost = e.target.parentNode;
    let id = currentPost.id;
    
    if (e.target !== null && id !== "") {
      form.style.display = "none";
      topic.style.display = "none";
      post.style.display = "block";

      fetch("http://localhost:3030/jsonstore/collections/myboard/posts/" + id)
        .then((response) => {
          if (response.ok) {
            console.log("post loaded");
            return response.json()
          } else {
            throw new Error(response.status);
          }
        })
        .then((data) => {
          comment.appendChild(renderComments(data));
        });
    }
    showComments()
  });
}

function renderComments(obj) {
let nameTopic = document.querySelector(".theme-name").querySelector("h2")
nameTopic.textContent = obj.topic
  let contentHtml =  `
<img src="./static/profile.png" alt="avatar">
<p><span>${obj.user}</span> posted on <time>${obj.date}</time></p>

<p class="post-content">${obj.text}</p>
`;
  let divEl = document.createElement("div");
  divEl.innerHTML = contentHtml;
  divEl.classList.add("header");
  divEl.id = obj._id;
  return divEl;
}
