import { useState } from "react";
import { doggoSmall } from "../assets";
import { navLinks } from "../assets/constants";
import { Link } from "react-router-dom";
import styles from "../assets/styles";
import Toggle from "./Toggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Desktop navbar */}
      <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-secondary p-[2px] cursor-pointer`} >
        <img src={doggoSmall}
          alt="profile"
          className="w-[100%] h-[100%] rounded-full" />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-10">
        {navLinks.map((nav) => (
          <li key={nav.id} className='font-poppins font-normal cursor-pointer text-[16px]' >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
        <li className={`cursor-pointer text-[16px]}`}>
          <Toggle />
        </li>
      </ul>

      {/* Mobile navbar */}
      <div className="sm:hidden flex justify-end items-center">
      <div className="z-40" onClick={() => setToggle((prev) => !prev)}>
          { toggle ? (
            <AiOutlineClose className="w-[20px] h-[20px]" />
          ) : (
            <AiOutlineMenu className="w-[20px] h-[20px]" />
          )}
        </div>
      </div>
      <div className={`${ toggle ? "translate-x-0" : "translate-x-full"} 
          transition-transform top-0 right-0 w-full h-full fixed overflow-auto bg-tertiary
          flex flex-col items-end py-12 px-6 z-30`}>
          <ul className="list-none flex flex-col justify-start items-end flex-1 space-y-6 mt-8"
            onClick={() => setToggle((prev) => !prev)}>
            {navLinks.map((nav) => (
              <li key={nav.id} className={styles.navLinks}>
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <li>
              <Toggle />
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
