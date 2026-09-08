// Q15 - Stack trace explanation practice
//
// Example summary:
// "The error means the function received an invalid Spotify URL.
// The problem was caused by the line that throws new Error(), and
// the stack trace shows where that line was called from."
//
// Replace the example summary above with your own words after you
// paste a real stack trace into ChatGPT.

const checkPlaylistURL = (url) => {
  if (!url.startsWith("https://open.spotify.com/")) {
    throw new Error("Invalid Spotify URL");
  }

  return "Valid Spotify URL";
};

checkPlaylistURL("https://example.com/playlist/123");
