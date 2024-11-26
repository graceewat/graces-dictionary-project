import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        <h2>{props.results.phonetic}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <h3>Definition</h3>
        <h4>{props.results.meanings[0].definition}</h4>
        <h3>Example</h3>
        <h4>{props.results.meanings[0].example}</h4>
        <h3>Synonyms</h3>
        <h4>{props.results.meanings[0].synonyms}</h4>
        <h4>{props.results.meanings[1].synonyms}</h4>
        <h4>{props.results.meanings[2].synonyms}</h4>
      </div>
    );
  } else {
    return null;
  }
}
