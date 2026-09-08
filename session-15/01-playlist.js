// Q1/Q2/Q3 - Playlist class
class Playlist {
  constructor(name, songs) {
    this.name = name;
    this.songs = songs;
  }

  displayPlaylist() {
    console.log(`${this.name}: ${this.songs.join(", ")}`);
  }

  getSongCount() {
    return this.songs.length;
  }

  addSong(songName) {
    this.songs.push(songName);
  }
}

const chillVibes = new Playlist("Chill Vibes", [
  "Perfect",
  "Until I Found You",
  "Night Changes"
]);

console.log(chillVibes);
