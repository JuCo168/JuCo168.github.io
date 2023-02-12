import { useState } from 'react';
import { close, menu } from '../assets';
import { navLinks } from '../assets/constants';
import { Link } from 'react-router-dom'
import styles from '../assets/styles';
import Toggle from './Toggle';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-secondary p-[2px] cursor-pointer`}>
                <img src="https://media.licdn.com/dms/image/C5603AQEQ44dS9gwAXg/profile-displayphoto-shrink_400_400/0/1654752457532?e=1680739200&v=beta&t=OgxNwSr4lAoEvJfwYt7nT1dYCZ5WXEPMOa6X6EwWHKs" alt="profile"
                className='w-[100%] h-[100%] rounded-full'/>
            </div>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}>
                        <Link to={`/${nav.id}`}>
                            {nav.title}
                        </Link>
                    </li>
                ))}
                <li className={`cursor-pointer text-[16px] mr-0}`}>
                    <Toggle/>
                </li>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <div className="object-contain" onClick={() => setToggle((prev) => !prev)}>
                    {toggle ? <AiOutlineClose className='w-[20px] h-[20px]'/> : <AiOutlineMenu className='w-[20px] h-[20px]'/>}
                </div>
                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] mb-4`}>
                                <Link to={`/${nav.id}`}>
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                        <li className={`cursor-pointer text-[16px] mr-0}`}>
                            <Toggle/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;