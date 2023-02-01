import React from "react";
import styles from './styles/styles'
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Navbar, Home, Projects, Skills, About, Footer } from './components'

function App() {
  return (
    <div className=" bg-slate-800 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` bg-slate-800 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Home /> */}
        </div>
      </div>

      <div className={` bg-slate-800 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Projects />
          <Skills />
          <About />
          <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
