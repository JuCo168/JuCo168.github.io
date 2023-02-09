import React, { useEffect, useState } from "react";
import { setTheme } from "./themes";
import ReactSwitch from "react-switch";
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
      <a onClick={handleOnClick} className="sm:flex hidden">
          {theme === 'dark' ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}
      </a>

      <a onClick={handleOnClick} className="sm:hidden">
        {theme === 'dark' ? 'Light mode' : 'Dark mode' }
      </a>
    </div>
  );
}

export default Toggle;
