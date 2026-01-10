import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ default import (no { })

import "./index.css"; // keep if you have it

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
