import React from 'react';
import styles from '../utilities/styles';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { FaSteam } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='w-full flex flex-col md:flex-row justify-between items-center py-4'>
      <p className='font-poppins font-medium text-center text-lg'>
        Developed by Julius Co
      </p>

      <div className='flex flex-row md:mt-0 mt-4 space-x-6'>
        <a href='https://www.linkedin.com/in/julius-co/'
          target='_blank'
          rel='noreferrer'>
          <BsLinkedin className={styles.socials} />
        </a>
        <a href='https://github.com/JuCo168' target='_blank' rel='noreferrer'>
          <BsGithub className={styles.socials} />
        </a>
        <a href='https://www.instagram.com/julius__co/'
          target='_blank'
          rel='noreferrer'>
          <BsInstagram className={styles.socials} />
        </a>
        <a href='https://steamcommunity.com/id/juco168/'
          target='_blank'
          rel='noreferrer'>
          <FaSteam className={styles.socials} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
