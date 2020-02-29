import React, { Component } from 'react'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import projects from './projects.json';
import imageCard from './components/imageCard'

class App extends Component {

  state = {
    projects
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio}>
          </Route>
        </div>
      </Router >
    )
  }
}

export default App;

// {this.state.projects.map(project => (
//   <imageCard
//     id={project.id}
//     key={project.id}
//     name={project.name}
//     image={project.image}
//     target={project.occupation}
//     gitLink={project.location}
//   />
// ))}
