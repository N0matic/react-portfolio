import React from 'react';
import { Link } from "react-router-dom";
import ATX_Now from "../pages/images/ATX_Now.png"

function ImageCard(props) {
  return (
    <div className="bg-local bg-center bg-no-repeat bg-cover box-content text-grey-200 h-48 w-56 m-4 border-4 border-gray-400 bg-gray-200">
      <img src={props.image} />
      <div>
        <div>ATX Now</div>
      </div>
      <div>
        <div>Website</div>
        <div>GitHub</div>
      </div>
    </div>
  )
}

export default ImageCard