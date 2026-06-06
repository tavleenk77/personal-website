// Entry point of the app.
// This file finds the <div id="root"> in index.html and renders our React app inside it.
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Create the React root and render the App component into it.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
