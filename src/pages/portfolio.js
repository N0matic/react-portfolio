import React from 'react';
import './home.css';
import './portfolio.css';
import ImageCard from '../components/imageCard'
import ATX_Now from "./images/ATX_Now.png"
import DayPlanner from "./images/DayPlanner.png"
import note_taker from "./images/note_taker.png"
import PGen from "./images/PGen.png"
import Quiz from "./images/Quiz.png"

function Portfolio() {
  return (
    <div className="m-auto w-4/5 flex flex-wrap justify-around p-3">

      <ImageCard
        image={ATX_Now}
      // name="ATX Now"
      // website="https://kimiinglet.github.io/meanLeanFreakGoat/"
      // github="https://github.com/kimiinglet/meanLeanFreakGoat"
      // text="ATX Now blah blah"
      />


      <div className="PGen bg-local bg-center bg-no-repeat bg-cover box-content text-grey-200 h-40 w-48 p-4 m-4 border-4 border-gray-400 bg-gray-200">
      </div>

      <div className="quiz bg-local bg-center bg-no-repeat bg-cover box-content text-grey-200 h-40 w-48 p-4 m-4 border-4 border-gray-400 bg-gray-200">
      </div>

      <div className="DayPlanner bg-local bg-center bg-no-repeat bg-cover box-content text-grey-200 h-40 w-48 p-4 m-4 border-4 border-gray-400 bg-gray-200">
      </div>

      {/* <div className="ATX_Now bg-local bg-center bg-no-repeat bg-cover box-content text-grey-200 h-40 w-48 p-4 m-4 border-4 border-gray-400 bg-gray-200">
      </div> */}

      <div className="note_taker bg-local bg-center bg-no-repeat bg-cover box-content text-grey-200 h-40 w-48 p-4 m-4 border-4 border-gray-400 bg-gray-200">
      </div>

      <div className="employee_database bg-local bg-center bg-no-repeat bg-cover box-content text-grey-200 h-40 w-48 p-4 m-4 border-4 border-gray-400 bg-gray-200">
      </div>

    </div>
  )
}

export default Portfolio