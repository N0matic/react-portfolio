import React, { Component } from 'react'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import projects from './projects.json';

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
          <Footer />
        </div>
      </Router >
    )
  }
}

export default App;