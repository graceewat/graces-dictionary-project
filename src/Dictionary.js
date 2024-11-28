import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "f03c7t04000f0dbod331aeefa47ad1f6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}
      &key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let apiPhotoKey = "f03c7t04000f0dbod331aeefa47ad1f6";
    let apiPhotoUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${apiPhotoKey}`;
    let headers = { Authorization: `${apiPhotoKey}` };
    axios.get(apiPhotoUrl, { headers: headers }).then(handlePhotosResponse);
  }
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="What word would you like to look up?"
          autoFocus={true}
          onChange={handleKeyWordChange}
        />
        <input type="submit" />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
