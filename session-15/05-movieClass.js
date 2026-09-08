// Q10/Q11 - Refactor function constructor to a class
class Movie {
  constructor(title, genre) {
    this.title = title;
    this.genre = genre;
  }

  display() {
    console.log(`${this.title} - ${this.genre}`);
  }
}

const movie = new Movie("Jawan", "Action");

movie.display();
