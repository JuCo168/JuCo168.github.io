import React from 'react'
import styles from '../assets/styles';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import { FaSteam } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={`${styles.flexCenter} py-4 flex-col`}>
            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6'>
                <p className='font-poppins font-medium text-center text-[18px] leading-[27px]'>
                    Developed by Julius Co
                </p>

                <div className='flex flex-row md:mt-0 mt-6'>
                    <a href='https://www.linkedin.com/in/julius-co/' target='_blank' rel="noreferrer"> 
                        <BsLinkedin className={`${styles.socials} mr-6`}/>
                    </a>
                    <a href="https://github.com/JuCo168" target='_blank' rel="noreferrer">
                        <BsGithub className={`${styles.socials} mr-6`}/>
                    </a>
                    <a href='https://www.instagram.com/julius__co/' target='_blank' rel="noreferrer">
                        <BsInstagram className={`${styles.socials} mr-6`}/>
                    </a>
                    <a href='https://steamcommunity.com/id/juco_/' target='_blank' rel="noreferrer">
                        <FaSteam className={`${styles.socials} mr-0`}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;