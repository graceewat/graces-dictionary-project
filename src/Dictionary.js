import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "f03c7t04000f0dbod331aeefa47ad1f6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}
      &key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
