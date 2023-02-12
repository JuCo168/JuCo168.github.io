import React from "react";
import { SiPython, SiJavascript, SiJava, SiLinux, SiReact, SiC, SiTailwindcss } from 'react-icons/si';
import styles from "../assets/styles";
import { profile } from "../assets";

function About() {
  return (
    <div className={`flex flex-col justify-center items-center px-4 md:px-0`}>
      <div className="flex flex-col-reverse md:flex-row justify-center items-start w-auto h-auto">
        <div className="flex justify-start mb-12">
          <p className="text-[18px] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="flex justify-center mb-4 md:mb-0">
          <img src={profile} alt='Julius Co' className="h-[60%] w-[60%] md:h-[50%] md:w-[50%] ring-4 rounded-md"/>
        </div>
      </div>
      <br/>
      <div className="w-full md:mt-12 grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-8">
        <div className={styles.skillRing}>
          <SiPython className={styles.skill}/>
        </div>
        <div className={styles.skillRing}>
          <SiJava className={styles.skill}/>
        </div>
        <div className={styles.skillRing}>
          <SiLinux className={styles.skill}/>
        </div>
        <div className={styles.skillRing}>
          <SiJavascript className={styles.skill}/>
        </div>
        <div className={styles.skillRing}>
          <SiReact className={styles.skill}/>
        </div>
        <div className={styles.skillRing}>
          <SiC className={styles.skill}/>
        </div>
        <div className={styles.skillRing}>
          <SiTailwindcss className={styles.skill}/>
        </div>
      </div>
    </div>
    
  );
}

export default About