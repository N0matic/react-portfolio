import React from 'react';
import './home.css';

function Portfolio() {
  return (
    <div className="m-auto w-4/5 md:p-5 grid grid-rows-2 grid-flow-col gap-10 justify-center">

      <div class="box-content h-40 w-52 p-4 border-4 border-gray-400 bg-gray-200">
        <div className="ATX_Now">Password Generator</div>
      </div>

      <div class="box-content h-40 w-52 p-4 border-4 border-gray-400 bg-gray-200">
        <div className="quiz">Javascript Quiz</div>
      </div>

      <div class="box-content h-40 w-52 p-4 border-4 border-gray-400 bg-gray-200">
        <div className="DayPlanner">Day Planner</div>
      </div>

      <div class="box-content h-40 w-52 p-4 border-4 border-gray-400 bg-gray-200">
        <div className="ATX_Now">ATX Now</div>
      </div>

      <div class="box-content h-40 w-52 p-4 border-4 border-gray-400 bg-gray-200">
        <div className="note_taker">Note Taker</div>
      </div>

      <div class="box-content h-40 w-52 p-4 border-4 border-gray-400 bg-gray-200">
        <div className="employee_database">Employee Database</div>
      </div>

    </div>
  )
}

export default Portfolio


{/* <div className="container">
        <div className="row">

          <div className=".container">

            <div className="jumbotron" id="content">

              <h2 className="display-8">Portfolio</h2>

              <hr className="my-3" />

              <div className="row">
                <div className="col-md-12">

                  <div className="d-flex justify-content-md-around box-set">
                    <div className="box" id="box1">
                      <div className="title">
                        <a href="https://n0matic.github.io/Password.Generator.io/" target="_blank" rel="noopener noreferrer">Password Generator</a>
                      </div>
                    </div>
                    <div className="box" id="box2">
                      <div className="title">
                        <a href="https://n0matic.github.io/JavaScript.quiz.io/" target="_blank" rel="noopener noreferrer">Javascript Quiz</a>
                      </div>
                    </div>
                    <div className="box" id="box3">
                      <div className="title">
                        <a href="https://n0matic.github.io/Day.Planner.io/" target="_blank" rel="noopener noreferrer">Day Planner</a></div>
                    </div>
                    <div className="box" id="box4">
                      <div className="title">
                        <a href="https://kgeary.github.io/atxnow/" target="_blank" rel="noopener noreferrer">ATX Now</a></div>
                    </div>
                    <div className="box" id="box5">
                      <div className="title">
                        <a href="https://rocky-waters-44071.herokuapp.com/" target="_blank" rel="noopener noreferrer">Note Taker</a></div>
                    </div>
                    <div className="box" id="box6">
                      <div className="title">
                        <a href="https://github.com/N0matic/Employee.tracker" target="_blank" rel="noopener noreferrer">Employee Database</a></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div> */}