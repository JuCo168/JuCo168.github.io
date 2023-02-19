import { React, useEffect, useState }from 'react';
import styles from './assets/styles'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Home, Projects, Resume, About, Footer } from './components'
import { keepTheme } from './assets/themes';

function App() {
  const [overflow, setOverflow] = useState('overflow-auto');
  // gets the current theme from localstorage
  useEffect(() => {
    keepTheme();
  })
  return (
    <Router>
    <div className={`static w-full flex flex-col h-screen ${overflow}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar setOuter={setOverflow}/>
        </div>
      </div>
      
      <div className={`${styles.flexStart} mb-auto`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
