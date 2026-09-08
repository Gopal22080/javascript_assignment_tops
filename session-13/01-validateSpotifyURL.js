// Q1/Q2 - Validate Spotify URL with a custom Error
const validateSpotifyURL = (url) => {
  if (!url.startsWith("https://open.spotify.com/")) {
    throw new Error("Invalid Spotify URL");
  }

  return "Valid Spotify URL";
};

try {
  console.log(validateSpotifyURL("https://open.spotify.com/playlist/123"));
  console.log(validateSpotifyURL("https://example.com/playlist/123"));
} catch (error) {
  console.log(error.message);
}
