// Q13/Q14 - Stack trace practice
// Run this code in the browser console to generate a stack trace.
// Then copy the stack trace and ask ChatGPT to explain it.
//
// Example summary to write in your own words:
// "The stack trace shows the error type/message and the sequence of
// function calls that led to the error. The first relevant line points
// to the code location where the error was thrown."

const validateSpotifyURL = (url) => {
  if (!url.startsWith("https://open.spotify.com/")) {
    throw new Error("Invalid Spotify URL");
  }
};

validateSpotifyURL("https://example.com");
