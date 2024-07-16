function attachEvents() {

  const btnLoadPosts = document.getElementById("btnLoadPosts");
  const btnViewPost = document.getElementById("btnViewPost");
  const postId = document.getElementById("posts");

  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const postComment = document.getElementById("post-comments");

  btnLoadPosts.addEventListener("click", loadPost);
  btnViewPost.addEventListener("click", loadComment);

  const url = "http://localhost:3030/jsonstore/blog/";

  function loadPost() {

    let postUrl = url + "posts";

    fetch(postUrl, {
      method: "GET",
    })
      .then((response) => {

        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("error");
        }
      })
      .then((resObj) => {

        for (const obj in resObj) {
          let posts = `<option value= ${resObj[obj].id}> ${resObj[obj].title} </option>
`;
          postId.innerHTML += posts;
        }
      }).catch(error => {
        console.log(error);
              });
  }

  function loadComment() {

    let currentPostId = document.getElementById("posts").value;
    let urlComments = url + "comments";

    fetch(urlComments, {
      method: "GET",
    })
      .then((responseCom) => {

        if (responseCom.status === 200) {
          return responseCom.json();
        } else {
          throw new Error("error");
        }
      })
      .then((resObjCom) => {

        let urlText = url + "posts";

        fetch(urlText)
          .then((res) => {

            if (res.ok) {
              return res.json();
            } else {
              throw new Error("error");
            }
          })
          .then((resObjPost) => {
            postTitle.textContent = resObjPost[currentPostId].title;
            postBody.textContent = resObjPost[currentPostId].body;
          }).catch(error => {
            console.log(error);
                  });

                document.querySelectorAll("li").forEach(li => {
                  li.remove();
                });

        for (const obj in resObjCom) {

          if (currentPostId === resObjCom[obj].postId) {
            let currentComment = `<li id= ${resObjCom[obj].id}>${resObjCom[obj].text} </li>`;
            postComment.innerHTML += currentComment;
          }
        }
      }).catch(error => {
console.log(error);
      });
  }

}

attachEvents();
