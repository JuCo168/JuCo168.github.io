import styles from '../utilities/styles';
import {
  SiPython,
  SiJavascript,
  SiJava,
  SiLinux,
  SiReact,
  SiC,
  SiTailwindcss,
  SiGithub,
} from 'react-icons/si';
import vigenere_decipher from './projects/vigenere_decipher.png';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'resume',
    title: 'Resume',
  },
];

export const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'My personal website built using React, styled with Tailwind CSS, and hosted on GitHub Pages! Dark and light themes were inspired by GMK Hammerhead.',
    image: '',
    link: 'https://github.com/JuCo168/JuCo168.github.io',
  },
  {
    title: 'Vigenere Decipher',
    description:
      'Basic python script to crack a Vigenere cipher using Kasiski elimination.',
    image: vigenere_decipher,
    link: 'https://github.com/JuCo168/Vigenere-decipher',
  },
  {
    title: 'Vigenere Decipher 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: vigenere_decipher,
    link: 'https://github.com/JuCo168/Vigenere-decipher',
  },
];

export const skills = [
  {
    name: 'Python',
    icon: <SiPython className={styles.skill} />,
  },
  {
    name: 'Java',
    icon: <SiJava className={styles.skill} />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className={styles.skill} />,
  },
  {
    name: 'React',
    icon: <SiReact className={styles.skill} />,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className={styles.skill} />,
  },
  {
    name: 'C',
    icon: <SiC className={styles.skill} />,
  },
  {
    name: 'GitHub',
    icon: <SiGithub className={styles.skill} />,
  },
  {
    name: 'Linux',
    icon: <SiLinux className={styles.skill} />,
  },
];
