import React from 'react';

function ImageCard(props) {
  return (
    <div className="grid bg-local bg-center bg-no-repeat bg-cover box-content bg-blue-500 h-56 w-64 m-4 border-4 border-gray-400 shadow-xl hover:shadow-outline text-indigo-100
    text-indigo-100">
      <a target="_blank" rel="noopener noreferrer" href={props.website} alt={props.name}>
        <img className="h-32 w-full" src={props.image} alt={props.name} />
      </a>
      <div className="z-10 text-center font-serif">
        <p>{props.description}</p>
        <div className="inline-flex bg-teal-400 p-1 my-1">
          <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-900 font-extrabold" href={props.website}>{props.name}</a>
          <p className="mx-2">|</p>
          <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-900 font-bold" href={props.github}>GitHub Link</a>
        </div>
      </div>
    </div>
  )
}

export default ImageCard