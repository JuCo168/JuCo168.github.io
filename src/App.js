import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Navbar from "./components/Navbar";
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
        <Route path="/" element={Home}/>
          <Route path="/about" element={About}/>
          <Route path="/projects" element={Projects}/>
          <Route path="/skills" element={Skills}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
