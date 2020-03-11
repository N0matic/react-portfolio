import React from 'react';
import Headshot from "./images/headshot.jpg"

function Home() {
  return (
    <div className="max-w-sm md:max-w-full md:flex mx-auto md:m-16">

      <div style={{ backgroundImage: `url(${Headshot})` }} title="Z's Headshot" className="h-56 md:h-auto md:w-56 flex-none bg-cover md:bg-center rounded-t md:rounded-t-none md:rounded-l overflow-hidden" />

      <div className="border-r border-b border-l border-gray-400 md:border-l-0 md:border-t md:border-gray-400 bg-white rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal">

        <div className="text-gray-900 font-bold text-xl mb-2">About Me</div>

        <hr className="my-3" />

        <p className="text-gray-700 text-md flex items-center">
          Software coder and nomad extraordinaire based out of Austin Texas, a passion for language produced a fluency in Spanish and Modern Greek and led me to coding.
                                <br />
          Served in the Peace Corps in Ecuador and taught EFL for 7 years. Piloted the language
          section of a dual-degree Fire Safety program between Oklahoma State University and Southwest Jiatong University in Chengdu, China, and revamped the curriculum for the Benedict School of English in
          Bologna, Italy. Bachelor of Arts in Anthropology from New York University and a Masters in International
          Studies from Oklahoma State. Dove head first into the world of coding as the proud product of the coding bootcamp at the University of Texas at Austin.
                                <br /><br />
          My passions include being dedicated to my Yoga practice, cooking simple dishes in the
          most extravagant manner possible, being a positive presence in the world... And a perenial addiction to cinema!
          </p>

      </div>
    </div>

  )
}

export default Home