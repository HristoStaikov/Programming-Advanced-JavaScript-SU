function solution() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      let postRes = `Post: ${this.title}\nContent: ${this.content}`;
      let resultSocialMedia = `Comments:`;
      let additionalText = `Rating: ${this.likes - this.dislikes}`;
      postRes = postRes.trim()
     
      if (this.comments) {
        if (this.comments.length > 0) {
          this.comments.forEach((element) => {
            resultSocialMedia += `\n * ${element}`;
          });
          resultSocialMedia = resultSocialMedia.trim();
          return (postRes + "\n" + additionalText + "\n" + resultSocialMedia);
        }
        return postRes + "\n" + additionalText;
      }

      if (this.view) {
        return postRes + "\n" + `Views: ${this.views}`;
      }
      return postRes;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }
    addComment(str) {
        if(typeof str !== "undefined" && str !== ""){
            this.comments.push(str);
        }
      
    }
  }

  class BlogPost extends Post {
    constructor(title, content,views) {
      super(title, content);
      this.views = views
    }
    view() {
      this.views++;
      return this;
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 54, 35);
scm.toString()
scm.addComment("good ");
scm.addComment("Very good post");
scm.addComment("Wow!");


console.log(scm.toString());

let blog = new classes.BlogPost("qbalka", "qbalka v dupeto",2);
blog.view().view().view();;
console.log(blog.toString());
scm.addComment("Qbalka");
console.log(scm.toString());