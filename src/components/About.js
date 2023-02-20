import React from 'react';
import { skills } from '../assets/constants';
import { profile, profileSquare } from '../assets';

function About() {
  return (
    <div className='flex flex-col justify-center items-center px-4 md:px-0'>
      <div className='flex flex-col-reverse md:flex-row justify-center items-start w-auto h-auto'>
        {/* About me */}
        <div className='flex justify-start mb-12'>
          <p className='text-xl leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        {/* Picture */}
        <div className='flex justify-center mb-4 md:mb-0'>
          <img src={profileSquare} alt='Julius Co' className='h-3/5 w-3/5 md:h-2/3 md:w-2/3 ring-4 rounded-md m-1'/>
        </div>
      </div>
      {/* Skills */}
      <div className='w-full md:mt-14 grid grid-cols-4 gap-4 md:gap-8'>
        { skills.map((skill) => (
          <div className='transition ease-in-out delay-100 duration-150
            flex ring-4 rounded-md justify-center items-center hover:scale-110'>
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About