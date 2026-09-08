// Q4/Q5 - Import Spotify utilities
import {
  formatSongTitle,
  getSongDurationInMinutes
} from "./spotifyUtils.js";

const song = {
  title: "blinding lights",
  duration: 203
};

console.log(`Song: ${formatSongTitle(song.title)}`);
console.log(`Duration: ${getSongDurationInMinutes(song.duration)}`);
