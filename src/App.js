import React from "react";
import Navbar from "./components/Navbar.js"
import Intro from "./components/pages/Intro.js"
import Portfolio from "./components/pages/Portfolio.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  document.body.className="text-gray-400 bg-gray-900 body-font"
  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Intro/>} />
            <Route path='/projects' element={<Portfolio/>} />
        </Routes>
      </Router>
  );
}

export default App;
