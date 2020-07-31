import React from 'react';
import ImageCard from '../components/imageCard'
import BookWyrm from "./images/BookWyrm.png"
import ATX_Now from "./images/ATX_Now.png"
import PGen from "./images/PGen.png"
import Quiz from "./images/Quiz.png"
import Forkify from "./images/my.forkify.png"
import BudgetBuilder from "./images/BudgetBuilder.png"

function Portfolio() {
  return (
    <div className="m-auto w-5/6 flex flex-wrap justify-around p-3">

      <ImageCard
        image={ATX_Now}
        name="ATX Now"
        website="https://kgeary.github.io/atxnow/"
        github="https://github.com/kgeary/atxnow.git"
        description="Frontend Styling and Project Management"
      />

      <ImageCard
        image={BookWyrm}
        name="Book Wyrm"
        website="https://book-wyrm.herokuapp.com"
        github="https://github.com/N0matic/book-wyrm.git"
        description="Frontend Styling and Project Management"
      />

      <ImageCard
        image={Forkify}
        name="my.forkify"
        website="my-forkify.herokuapp.com/"
        github="https://github.com/N0matic/my.forkify"
        description="Recipe search app, cloned and developed for a Udemy course"
      />

      <ImageCard
        image={Quiz}
        name="Quiz Game"
        website="https://n0matic.github.io/JavaScript.quiz.io/"
        github="https://github.com/N0matic/JavaScript.quiz.io.git"
        description="Personal project for a trivia game"
      />

      <ImageCard
        image={PGen}
        name="Password Gen"
        website="https://n0matic.github.io/Password.Generator.io/"
        github="https://github.com/N0matic/Password.Generator.io.git"
        description="Personal project for an animated keygen"
      />

      <ImageCard
        image={BudgetBuilder}
        name="BudgetBuilder"
        website="https://n0matic.github.io/BudgetBuilder/"
        github="https://github.com/N0matic/BudgetBuilder"
        description="JavaScript app for budgetting for a Udemy course"
      />

    </div>
  )
}

export default Portfolio