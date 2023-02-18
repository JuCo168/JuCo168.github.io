import React, { useEffect, useState } from "react";
import styles from "../assets/styles";
import { setTheme } from "../assets/themes";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

function Toggle() {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
      setTogClass("light");
    } else {
      setTheme("dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    localStorage.getItem("theme") === "light" ? setTogClass('light') : setTogClass('dark');
  }, [theme]);

  return (
    <div>
      {/* Desktop theme button */}
      <a onClick={handleOnClick} className="sm:flex hidden">
          {theme === 'dark' ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}
      </a>

      {/* Mobile theme button */}
      <a onClick={handleOnClick} className={styles.navLinks}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode' }
      </a>
    </div>
  );
}

export default Toggle;
