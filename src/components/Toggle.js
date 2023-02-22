import React, { useEffect, useState } from 'react';
import styles from '../utilities/styles';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

function Toggle() {
  const [theme, setTheme] = useState(localStorage.getItem('color-theme'));

  const handleOnClick = () => {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
          setTheme('dark')
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
          setTheme('light')
      }
    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setTheme('light')
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setTheme('dark')
        }
    }
  };

  return (
    <div>
      {/* Desktop theme button */}
      <a onClick={handleOnClick} className='sm:flex hidden text-dark-text'>
          {theme === 'dark' ? <BsFillSunFill className='hover:brightness-125'/> : <BsFillMoonStarsFill className='hover:brightness-50'/>}
      </a>

      {/* Mobile theme button */}
      <a onClick={handleOnClick} className={styles.navLinks}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode' }
      </a>
    </div>
  );
}

export default Toggle;
