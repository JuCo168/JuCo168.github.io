import { React, createContext, useState, useEffect }from 'react';
import styles from './styles'
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Home, Projects, Resume, About, Footer } from './components'
import { keepTheme } from './components/themes';

function App() {
  // gets the current theme from localstorage
  useEffect(() => {
    keepTheme();
  })
  return (
    <div className={`w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`{styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Projects />
          <Skills />
          <About /> */}
          <Resume />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
