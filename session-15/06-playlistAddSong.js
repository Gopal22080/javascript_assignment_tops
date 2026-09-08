// Q12 - Add songs using addSong()
class Playlist {
  constructor(name, songs) {
    this.name = name;
    this.songs = songs;
  }

  displayPlaylist() {
    console.log(`${this.name}: ${this.songs.join(", ")}`);
  }

  addSong(songName) {
    this.songs.push(songName);
  }
}

const playlist = new Playlist("Chill Vibes", [
  "Perfect",
  "Until I Found You",
  "Night Changes"
]);

playlist.addSong("Heeriye");
playlist.addSong("Kesariya");

playlist.displayPlaylist();
