// Import Libraries
import SpotifyWebApi from "spotify-web-api-js";
import React, { useEffect } from "react";

// Import Components
import Login from "./Login";
import Player from "./Player";

// Import Helpers
import { useStateProviderValue } from "../helpers/StateProvider";
import { getAccessTokenFromUri } from "../helpers/spotify";
// Import Styles
import "../assets/css/App.css";

// Spotify Wrapper Init
const spotifyApp = new SpotifyWebApi();

// Main App Component
function App() {
  // State for Access Token

  // Get Data from State Provider
  const [{ accessToken }, dispatch] = useStateProviderValue();

  // Effect for Access Token
  useEffect(() => {
    const _accessToken = getAccessTokenFromUri();

    if (_accessToken) {
      window.location.hash = "";

      dispatch({
        type: "SET_TOKEN",
        accessToken: _accessToken,
      });

      // Set Access Token to Spotify Wrapper
      spotifyApp.setAccessToken(_accessToken);

      // Get Profile Info
      spotifyApp.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          currentUser: user,
        });
      });

      // Get all user playlists
      spotifyApp.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          currentUserPlaylists: playlists,
        });
      });

      // spotifyApp.getPlaylist("37i9dQZEVXcNtRwnkrxpjR").then((playlist) => {
      //   dispatch({
      //     type: "SET_DISCOVER_WEEKLY",
      //     discoverWeekly: playlist,
      //   });
      // });

      // get recently played
      spotifyApp.getMyRecentlyPlayedTracks().then((tracks) => {
        dispatch({
          type: "SET_USER_RECENT",
          currentUserRecent: tracks,
        });
      });

      spotifyApp.getMySavedTracks().then((tracks) => {
        dispatch({
          type: "SET_USER_SAVED_TRACKS",
          currentUserSavedTracks: tracks,
        });
      });

      spotifyApp.getMyCurrentPlayingTrack().then((track) => {
        dispatch({
          type: "SET_USER_CURRENT_PLAYING",
          currentUserPlaying: track,
        });
      });
    }
  });

  return <div className="app">{accessToken ? <Player /> : <Login />}</div>;
}

export default App;
