// Q6 - Simulate fetching lyrics using a callback
const fetchSongLyrics = (song, callback) => {
  setTimeout(() => {
    const lyrics = `Lyrics for "${song}" are loaded successfully.`;
    callback(lyrics);
  }, 1000);
};

fetchSongLyrics("Kesariya", (lyrics) => {
  console.log(lyrics);
});
