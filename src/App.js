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
  const [scrollable, setScrollable] = useState('');
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
    <div className={`static w-full flex flex-col h-screen ${scrollable}`}>
    <div id='navbar' className={`${styles.paddingX} ${styles.flexCenter}
        w-full absolute top-0 z-30 transition-transform ${visible ? '-translate-y-full' : 'translate-y-0'} bg-black`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar setOuter={setScrollable}/>
        </div>
      </div>
      <div id='navbar' className={`${styles.paddingX} ${styles.flexCenter} bg-tertiary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar setOuter={setScrollable}/>
        </div>
      </div>
      
      <div className={`${styles.flexStart} relative`}>
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

      <div className={`${styles.paddingX} ${styles.flexStart} mt-auto`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
