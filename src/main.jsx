import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./rtk/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
