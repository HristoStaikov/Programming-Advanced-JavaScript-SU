export async function createPostPreview() {

  const response = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts");

  try {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayPosts(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

   async function displayPosts(resObj) {

    const topics = document.getElementById("topics");

    let objectDate = await Object.values(resObj);

    for (const key of objectDate) {
      let contentHtml = `
            <div class="topic-title" id="${key._id}">
                <h2>
                    ${key.topic}
                </h2>
                <div class="topic-container">
                    <span class="time">
                    Date: ${key.date}
                    </span>
                    <p>
                    Username: ${key.user}
                    </p>
                </div>
            </div>
            `;
      let divEl = document.createElement("div");
      divEl.classList.add("topic-name-wrapper");
      divEl.innerHTML = contentHtml;

      topics.appendChild(divEl);
    }
    
  }

}
