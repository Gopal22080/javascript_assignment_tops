// Q15 - Fetch albums and filter only userId === 2
// Constraint: fetch(), .then(), and array methods only. No async/await.

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    const filteredAlbums = albums.filter((album) => album.userId === 2);

    filteredAlbums.forEach((album) => {
      console.log(album.title);
    });
  })
  .catch((error) => console.error("Error:", error));
