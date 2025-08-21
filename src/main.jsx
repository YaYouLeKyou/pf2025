import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// Ensure root fills viewport for mobile responsiveness
const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.style.height = "100vh";
  rootElement.style.width = "100vw";
  rootElement.style.overflowX = "hidden"; // prevent horizontal scroll on mobile
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
