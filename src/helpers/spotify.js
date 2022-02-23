// Spotify JS

const authenticationEndPoint = "https://accounts.spotify.com/authorize?";

const redirectUri = "http://localhost:3000/";

const clientId = "10d817c39e25462596fa4610cbaadb89";

const appScopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
  "user-library-read",
  "user-modify-playback-state",
];

export const getAccessTokenFromUri = () => {
  return window.location.hash.split("access_token=")[1];
};
export const loginUrl = `${authenticationEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${appScopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
