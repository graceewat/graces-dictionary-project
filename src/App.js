import "./App.css";
import React from "react";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          📚<div>Welcome to Grace's Dictionary</div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by Grace Waterman and is open-sourced on{" "}
          <a href="https://github.com/graceewat/graces-dictionary-project">
            Github.
          </a>{" "}
          This page is hosted on{" "}
          <a href="https://gracesdictionary.netlify.app/">Netlify.</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
