import React from 'react';
import ImageCard from '../components/imageCard'
import BookWyrm from "./images/BookWyrm.png"
import ATX_Now from "./images/ATX_Now.png"
import DayPlanner from "./images/DayPlanner.png"
import note_taker from "./images/note_taker.png"
import PGen from "./images/PGen.png"
import Quiz from "./images/Quiz.png"

function Portfolio() {
  return (
    <div className="m-auto w-5/6 flex flex-wrap justify-around p-3">

      <ImageCard
        image={ATX_Now}
        name="ATX Now"
        website="https://kgeary.github.io/atxnow/"
        github="https://github.com/kgeary/atxnow.git"
      />

      <ImageCard
        image={BookWyrm}
        name="Book Wyrm"
        website="https://book-wyrm.herokuapp.com"
        github="https://github.com/N0matic/book-wyrm.git"
      />

      <ImageCard
        image={note_taker}
        name="Note Taker"
        website="https://rocky-waters-44071.herokuapp.com"
        github="https://github.com/N0matic/Day.Planner.io.git"
      />

      <ImageCard
        image={Quiz}
        name="Quiz Game"
        website="https://n0matic.github.io/JavaScript.quiz.io/"
        github="https://github.com/N0matic/JavaScript.quiz.io.git"
      />

      <ImageCard
        image={PGen}
        name="Password Generator"
        website="https://n0matic.github.io/Password.Generator.io/"
        github="https://github.com/N0matic/Password.Generator.io.git"
      />

      <ImageCard
        image={DayPlanner}
        name="Day Planner"
        website="https://n0matic.github.io/Day.Planner.io/"
        github="https://github.com/N0matic/Day.Planner.io"
      />

    </div>
  )
}

export default Portfolio