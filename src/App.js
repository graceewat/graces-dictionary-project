import "./App.css";
import React from "react";
import Dictionary from "./Dictionary.js";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">Welcome to my dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Grace Waterman</footer>
      </div>
    </div>
  );
}

export default App;
