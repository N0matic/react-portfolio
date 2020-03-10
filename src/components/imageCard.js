import React from 'react';

function ImageCard(props) {
  return (
    <div className="grid bg-local bg-center bg-no-repeat bg-cover box-content bg-blue-500 h-48 w-56 m-4 border-4 border-gray-400">
      <a href={props.website} alt={props.name}>
        <img className="h-32 w-full" src={props.image} alt={props.name} />
      </a>
      <div className="z-10 inline align-middle text-center  font-serif font-bold">
        <a className="hover:text-indigo-900 text-indigo-100" href={props.website}>{props.name}</a>
        <br />
        <a className="hover:text-indigo-900 text-indigo-100" href={props.github}>GitHub</a>
      </div>
    </div>
  )
}

export default ImageCard