import { React, useEffect, useState }from 'react';
import styles from './assets/styles'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Home, Projects, Resume, About, Footer } from './components'
import { keepTheme } from './assets/themes';

function App() {
  // used to display navbar
  const [visible, setVisibility] = useState(true);
  // used to save last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);
  // handles behavior on scroll
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const navbarHeight = document.getElementById('navbar').offsetHeight;

    if (currentScrollPos > navbarHeight && currentScrollPos < lastScrollY) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
    setLastScrollY(currentScrollPos);
  }
  // used to block scrolling on mobile
  const [overflow, setOverflow] = useState('');
  // gets the current theme from localstorage
  useEffect(() => {
    keepTheme();
  })
  // updates visibilty depending on scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, handleScroll])

  return (
    <Router>
    <div className={`static w-full flex flex-col h-screen ${overflow}`}>
      <div id='navbar' className={`${styles.paddingX} ${styles.flexCenter}`}>
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
