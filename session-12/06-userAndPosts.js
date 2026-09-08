// Q10/Q11 - Chain two fetch calls
fetch("https://jsonplaceholder.typicode.com/users/2")
  .then((response) => response.json())
  .then((user) => {
    console.log("User:", user.name);

    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    ).then((response) => response.json())
      .then((posts) => {
        console.log("User name:", user.name);
        console.log("Post titles:");

        posts.forEach((post) => {
          console.log(post.title);
        });
      });
  })
  .catch((error) => console.error("Error:", error));
