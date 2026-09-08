// Q6 - getSongCount() method
class Playlist {
  constructor(name, songs) {
    this.name = name;
    this.songs = songs;
  }

  getSongCount() {
    return this.songs.length;
  }
}

const playlist = new Playlist("Chill Vibes", [
  "Perfect",
  "Until I Found You",
  "Night Changes"
]);

console.log(`Song count: ${playlist.getSongCount()}`);
