// Q4/Q5 - Fetch albums as trending movies
const fetchTopMovies = () => {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((movies) => {
      console.log("Trending Movies:");
      movies.slice(0, 3).forEach((movie) => {
        console.log(movie.title);
      });
    })
    .catch((error) => console.error("Error:", error));
};

fetchTopMovies();
