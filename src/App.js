import React from 'react'
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router >
  )
}

export default App;
