// Q7/Q8 - Add a new playlist using POST
const addNewPlaylist = () => {
  const playlist = {
    name: "My Favorite Songs",
    description: "A playlist created using the Fetch API."
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(playlist)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Playlist response:", data);
    })
    .catch((error) => console.error("Error:", error));
};

addNewPlaylist();
