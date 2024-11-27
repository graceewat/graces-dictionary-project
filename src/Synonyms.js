import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <strong>Synonym:</strong>
        {props.synonyms}
      </div>
    );
  } else {
    return null;
  }
}
