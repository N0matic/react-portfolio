import React from 'react'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Contact from "./pages/contact"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import styled, { keyframes } from "styled-components";
// import greek from "./pages/images/greek-vase.png"

const App = () => {
  //   const useMediaQuery = (query) => {
  //     const mediaMatch = window.matchMedia(query);
  //     const [matches, setMatches] = useState(mediaMatch.matches);

  //     useEffect(() => {
  //       const handler = e => setMatches(e.matches);
  //       mediaMatch.addListener(handler);
  //       return () => mediaMatch.removeListener(handler);
  //     });
  //     return matches;
  //   };

  //   const isRowBased = useMediaQuery('(min-width: 500px)');

  //   console.log("media query info:", isRowBased)

  //   var slide = keyframes`
  // from { background-position: 0 0; }
  // to { background-position: -400px 0 }
  // `;

  //   const Container = styled.div`
  // background: url(${greek}) repeat 0 0;
  // width: 100%;
  // margin: 0;
  // text-align: center;
  // padding-top: 5px;
  // box-sizing: border-box;
  // animation: ${isRowBased ? slide : ""} 30s linear infinite;
  // `


  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />

        <Footer />
      </div>
    </Router>
  )
}


export default App;