import { createPostPreview } from "./createPost.js"
import { post } from "./formPost.js"
import { load } from "./loadComments.js"
import { postComment } from "./postComment.js"

post()
createPostPreview()
load ()
postComment()


let home = document.querySelector("a")
home.addEventListener("click", ()=>{
debugger
    let topic = document.getElementById("topics");
    let post = document.getElementById("post");
    let form = document.querySelector(".new-topic-border");
  
        form.style.display = "block";
        topic.style.display = "block";
        post.style.display = "block";
  
    
    let commentsDiv = document.querySelector("#container")
    commentsDiv.style.display = "none"

    let commentDiv = document.querySelector('.comment');

    // Select all div elements within the comment div
    let divsToRemove = commentDiv.querySelectorAll('div');
    
    // Iterate through the list and remove each div
    divsToRemove.forEach(function(div) {
        div.remove();
    });
    });
  
