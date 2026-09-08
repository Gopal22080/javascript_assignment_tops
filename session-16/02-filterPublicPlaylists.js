// Q3 - filter() public playlists
const playlists = [
  { name: "Chill Vibes", isPublic: true },
  { name: "Private Mix", isPublic: false },
  { name: "Workout Songs", isPublic: true }
];

const publicPlaylists = playlists.filter((playlist) => playlist.isPublic);

console.log(publicPlaylists);
