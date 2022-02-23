import { getAccessToken } from "./spotify";

export const initialState = {
  currentUser: null,
  accessToken: null,
  currentUserPlaylists: [],
  discoverWeekly: null,
  discoverWeeklyLoaded: false,
};

const reducer = (state, action) => {
  // console.log("Debug Print", action);

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
    default:
      return state;
  }
};

export default reducer;
