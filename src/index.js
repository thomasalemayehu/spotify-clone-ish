// Import Libraries
import React from "react";
import ReactDOM from "react-dom";
// Import Components
import App from "./components/App";
// Import Helpers
import reducer, { initialState } from "./helpers/reducer";
import { StateProvider } from "./helpers/StateProvider";
import reportWebVitals from "./reportWebVitals";
// Import Styles
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
