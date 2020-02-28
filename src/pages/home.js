import React from 'react';
import "./home.css";

function Home() {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex content-center">

      <img className="w-auto lg:h-auto lg:w-1/4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src={process.env.PUBLIC_URL + '/images/headshot.jpg'} alt="Z's Headshot">
      </img>

      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">

          <div className="lg:text-left text-center text-gray-900 font-bold text-xl mb-2">About Me</div>

          <hr className="my-3" />

          <p className="text-gray-700 text-base flex items-center">Software coder and nomad extraordinaire based out of Austin Texas, a passion for language produced a fluency in Spanish and Modern Greek and led me to coding.
                                <br /><br />
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
    </div>
  )
}

export default Home