// Q6 - POST request using fetch
const newPost = {
  title: "My JavaScript Project",
  body: "Learning modern JavaScript and Fetch API."
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newPost)
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Response object:", data);
    console.log("Is id present?", Object.prototype.hasOwnProperty.call(data, "id"));
  })
  .catch((error) => console.error("Error:", error));
