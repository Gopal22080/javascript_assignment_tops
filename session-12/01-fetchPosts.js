// Q1/Q2/Q3 - Fetch posts and display first 5 titles
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    posts.slice(0, 5).forEach((post) => {
      console.log(post.title);
    });
  })
  .catch((error) => console.error("Error:", error));
