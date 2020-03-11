import React from 'react';
import Headshot from "./images/headshot.jpg"

function Home() {
  return (
    <div className="max-w-sm md:max-w-full md:flex mx-auto md:m-16 md:mt-12 shadow-xl">

      <div style={{ backgroundImage: `url(${Headshot})` }} title="Z's Headshot" className="h-56 md:h-auto md:w-56 flex-none bg-cover md:bg-center rounded-t md:rounded-t-none md:rounded-l overflow-hidden" />

      <div className="border-r border-b border-l border-gray-400 md:border-l-0 md:border-t md:border-gray-400 bg-white rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal">

        <div className="text-gray-900 font-bold text-2xl mb-2">About Me</div>

        <hr className="my-3" />

        <div className="text-gray-700 text-md flex flex-col items-center">

          <p className="mb-2">
            Software coder and nomad extraordinaire based out of Austin, Texas. I discovered my passion for coding after years of both learning and teaching languages. In University, I studied Anthropology because I love to spend time with other people and I wanted to understand the “big picture.”
          </p>
          <p className="mb-2">
            I met some of my best friends in the Peace Corps in Ecuador, survived going to school in New York, and pioneered the language section of a dual-degree program in Chengdu, China. More recently, I moved to Austin and completed the full-time Full Stack coding Bootcamp at the University of Texas at Austin, so now I’m trying to balance the frontend and backend like my Yoga tree pose.
          </p>
          <p>
            In the moments that I’m not overenthusiastically tailoring my existing web-projects, I am currently learning as much as I can about the applications of Open Source software specifically in regards to Cybersecurity. I believe we can make the internet a safer and more accessible place for everyone.
          </p>

        </div>
      </div>
    </div>

  )
}

export default Home