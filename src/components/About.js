import React from "react";
import { SiPython, SiJavascript, SiJava, SiLinux, SiReact, SiC, SiTailwindcss } from 'react-icons/si';
import styles from "../assets/styles";
import { profile } from "../assets";

function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-start w-auto h-auto">
        <div className="flex justify-start mb-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="flex justify-center">
          <img src={profile} className="h-[50%] w-[50%]"/>
        </div>
      </div>
      <br/>
      <div className="w-full mt-12 grid grid-cols-6 gap-8">
        <div className="transition ease-in-out delay-100 duration-150 flex ring-4 rounded-md justify-center items-center hover:scale-110">
          <SiPython className="w-[64px] h-[64px] my-8"/>
        </div>
        <div className="transition ease-in-out delay-100 duration-150 flex ring-4 rounded-md justify-center items-center hover:scale-110">
          <SiJava className="w-[64px] h-[64px] my-8"/>
        </div>
        <div className="transition ease-in-out delay-100 duration-150 flex ring-4 rounded-md justify-center items-center hover:scale-110">
          <SiLinux className="w-[64px] h-[64px] my-8"/>
        </div>
        <div className="transition ease-in-out delay-100 duration-150 flex ring-4 rounded-md justify-center items-center hover:scale-110">
          <SiJavascript className="w-[64px] h-[64px] my-8"/>
        </div>
        <div className="transition ease-in-out delay-100 duration-150 flex ring-4 rounded-md justify-center items-center hover:scale-110">
          <SiReact className="w-[64px] h-[64px] my-8"/>
        </div>
        <div className="transition ease-in-out delay-100 duration-150 flex ring-4 rounded-md justify-center items-center hover:scale-110">
          <SiC className="w-[64px] h-[64px] my-8"/>
        </div>
      </div>
    </div>
    
  );
}

export default About