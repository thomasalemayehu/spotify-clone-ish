export const initialState = {
  spotifyApp: null,
  currentUser: null,
  accessToken: null,
  currentUserPlaylists: null,
  discoverWeekly: null,
  discoverWeeklyLoaded: false,
  currentUserRecentPlayed: null,
  currentUserSavedTracks: null,
  currentUserPlaying: null,
};

const reducer = (state, action) => {
  console.log("Debug Print", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.currentUser,
      };
    case "SET_TOKEN":
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        currentUserPlaylists: action.currentUserPlaylists,
      };
    case "SET_DISCOVER_WEEKLY_LOADED":
      return {
        ...state,
        discoverWeeklyLoaded: action.discoverWeeklyLoaded,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
    case "SET_USER_RECENT":
      return {
        ...state,
        currentUserRecentPlayed: action.currentUserRecent,
      };
    case "SET_USER_SAVED_TRACKS":
      return {
        ...state,
        currentUserSavedTracks: action.currentUserSavedTracks,
      };
    case "SET_USER_CURRENT_PLAYING":
      return {
        ...state,
        currentUserPlaying: action.currentUserPlaying,
      };
    default:
      return state;
  }
};

export default reducer;
