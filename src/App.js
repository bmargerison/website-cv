import React from "react";
import Navbar from "./components/Navbar.js"
import Intro from "./components/pages/Intro.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <main className="text-gray-400 bg-gray-900 body-font">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Intro/>} />
        </Routes>

      </Router>
    </main>
    </>
  );
}

export default App;
