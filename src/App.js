import { React, useEffect, useState }from 'react';
import { debounce } from './utilities/debounce';
import styles from './utilities/styles'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Home, Projects, Resume, About, Footer } from './components'

function App() {
  // used to display navbar
  const [visible, setVisibility] = useState(true);
  // used to save last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);
  // handles behavior on scroll
  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;
    const navbarHeight = document.getElementById('navbar').offsetHeight;

    currentScrollPos < navbarHeight || 
      (currentScrollPos < lastScrollY && lastScrollY - currentScrollPos > 50)
      ? setVisibility(true) : setVisibility(false);
      
    setLastScrollY(currentScrollPos);
  }, 100);
  // used to block scrolling on mobile
  const [scrollable, setScrollable] = useState('');
  // updates visibilty depending on scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, handleScroll])

  return (
    <Router>
    <div className={`static w-full flex flex-col h-screen ${scrollable} 
      bg-white dark:bg-dark-primary text-black dark:text-dark-text`}>
      <div id='navbar' className={`${styles.paddingX} ${styles.flexCenter}
        w-full h-auto fixed top-0 z-30 transition-transform 
        ${visible ? 'translate-y-0' : '-translate-y-full'} bg-secondary/80`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar setOuter={setScrollable}/>
        </div>
      </div>
      
      <main className={`${styles.flexStart} relative mt-20 sm:mt-24 bg-inherit text-inherit`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </div>
      </main>

      <div className={`${styles.paddingX} ${styles.flexStart} mt-auto bg-inherit text-inherit`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
