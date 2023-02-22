 import { useState } from 'react';
import { doggoSmall } from '../assets';
import { navLinks } from '../assets/constants';
import { Link } from 'react-router-dom';
import styles from '../utilities/styles';
import Toggle from './Toggle';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const toggleNavbar = () => {
    setToggle((prev) => !prev)
    toggle ? props.setOuter('') : props.setOuter('touch-none') 
  }
  return (
    <nav className='w-full flex py-2 justify-between items-center'>
      {/* Desktop navbar */}
      <div className={`${styles.flexCenter} w-14 h-14 rounded-full bg-dark-text p-0.5 cursor-pointer hover:brightness-125`} >
        <Link to='/'>
          <img src={doggoSmall}
            alt='profile'
            className='rounded-full' />
        </Link>
      </div>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 space-x-10'>
        {navLinks.map((nav) => (
          <li key={nav.id} className='font-poppins font-normal cursor-pointer text-base text-dark-text' >
            <Link to={`/${nav.id}`} className='hover:brightness-125'>{nav.title}</Link>
          </li>
        ))}
        <li className='cursor-pointer text-base'>
          <Toggle />
        </li>
      </ul>

      {/* Mobile navbar */}
      <div className='sm:hidden flex justify-end items-center'>
        <div onClick={toggleNavbar}>
          <AiOutlineMenu className='w-5 h-5' />
        </div>
      </div>
      <div className={`h-screen w-full inset-0 fixed sm:hidden backdrop-blur-sm bg-black/40 ${toggle ? 'z-40' : 'hidden'}`}
        onClick={toggleNavbar} />
      <div className={`${toggle ? 'translate-x-0' : 'translate-x-full'} 
          transition-transform top-0 right-0 w-auto h-screen fixed bg-secondary
          flex flex-col items-end p-6 z-50`}>
          <ul className='list-none flex flex-col justify-start items-end flex-1 space-y-6 mt-8'>
            {navLinks.map((nav) => (
              <li key={nav.id} className={styles.navLinks}
                onClick={toggleNavbar}>
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
