import React from 'react';
import { Link } from "react-router-dom";

function imageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  )
}

export default imageCard