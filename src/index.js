import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { auth, app } from "./shared/firebase/firebase-config";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./shared/app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/Note-App">
      <App />
    </BrowserRouter>
  </Provider>
);
