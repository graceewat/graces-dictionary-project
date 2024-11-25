import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  function search(event) {
    event.preventDefault();

    alert(`Searching for ${keyWord}`);
  }
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Please type a word here..."
          autoFocus={true}
          onChange={handleKeyWordChange}
        />
        <input type="submit" />
      </form>
      Hello from Dictionary
    </div>
  );
}
