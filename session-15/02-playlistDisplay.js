// Q4/Q5 - displayPlaylist() method
class Playlist {
  constructor(name, songs) {
    this.name = name;
    this.songs = songs;
  }

  displayPlaylist() {
    console.log(`${this.name}: ${this.songs.join(", ")}`);
  }
}

const playlist = new Playlist("Chill Vibes", [
  "Perfect",
  "Until I Found You",
  "Night Changes"
]);

playlist.displayPlaylist();
