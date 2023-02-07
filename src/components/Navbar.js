import { useState, useEffect } from 'react';
import { close, menu } from '../assets';
import { navLinks } from '../assets/constants';
import styles from '../styles';
import Toggle from './Toggle';

function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
                <img src="https://media.licdn.com/dms/image/C5603AQEQ44dS9gwAXg/profile-displayphoto-shrink_400_400/0/1654752457532?e=1680739200&v=beta&t=OgxNwSr4lAoEvJfwYt7nT1dYCZ5WXEPMOa6X6EwWHKs" alt="profile"
                className='w-[100%] h-[100%] rounded-full'/>
            </div>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                <li className={`cursor-pointer text-[16px] mr-0}`}>
                    <Toggle/>
                </li>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                    src={toggle ? close : menu }
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;