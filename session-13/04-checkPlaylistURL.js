// Q6 - Validate playlist URL with try...catch...finally
const checkPlaylistURL = (url) => {
  if (!url.startsWith("https://open.spotify.com/")) {
    throw new Error("Invalid Spotify URL");
  }

  return "Valid Spotify URL";
};

try {
  console.log(checkPlaylistURL("https://example.com/playlist/123"));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Validation complete");
}
