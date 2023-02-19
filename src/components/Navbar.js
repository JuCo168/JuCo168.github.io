import { useState } from 'react';
import { doggoSmall } from '../assets';
import { navLinks } from '../assets/constants';
import { Link } from 'react-router-dom';
import styles from '../assets/styles';
import Toggle from './Toggle';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const toggleNavbar = () => {
    setToggle((prev) => !prev)
    toggle ? props.setOuter('') : props.setOuter('overflow-hidden touch-none') 
  }
  return (
    <nav className='w-full flex py-2 justify-between items-center'>
      {/* Desktop navbar */}
      <div className={`${styles.flexCenter} w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-full bg-secondary p-[2px] cursor-pointer`} >
        <Link to='/'>
          <img src={doggoSmall}
            alt='profile'
            className='sm:w-[100%] sm:h-[100%] rounded-full' />
        </Link>
      </div>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 space-x-10'>
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
      <div className='sm:hidden flex justify-end items-center'>
        <div onClick={toggleNavbar}>
          <AiOutlineMenu className='w-[20px] h-[20px]' />
        </div>
      </div>
      <div className={`h-full w-full overflow-hidden overscroll-none inset-0 fixed sm:hidden backdrop-blur-sm bg-black/40 ${toggle ? 'z-20' : 'hidden'}`}
        onClick={toggleNavbar} />
      <div className={`${toggle ? 'translate-x-0' : 'translate-x-full'} 
          transition-transform top-0 right-0 w-auto h-full overflow-hidden fixed bg-tertiary
          flex flex-col items-end p-6 z-30`}>
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
