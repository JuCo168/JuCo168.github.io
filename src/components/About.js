import React from 'react';
import { skills } from '../assets/constants';
import { profile, profileSquare } from '../assets';

function About() {
  return (
    <div className='flex flex-col justify-center items-center px-4 md:px-0'>
      {/* About me */}
      <div className='flex flex-col-reverse md:flex-row justify-center items-center w-auto h-auto mb-8 md:mb-14'>
        {/* About text */}
        <div className='text-l sm:text-xl leading-normal w-full h-full'>
          <h1 className='text-3xl sm:text-5xl font-semibold pb-6'>Hello! I'm Julius Co</h1>
          <p className='mb-4'>I am a new grad from the University of California, San Diego majoring in Computer Science & Engineering.</p>
          <p className='mb-4'>Currently I am working freelance as a Java backend engineer at Senvo.</p>
          <p className='mb-4'>I'm interested in full-stack, backend, networking, and security.</p>
          <p>Other than coding I like:</p>
          <ul className='list-disc list-inside'>
            <li>Video games (lots of Destiny 2)</li>
            <li>Gundam model kits (Gunpla)</li>
            <li>PC, keyboards, and setups</li>
          </ul>
        </div>
        {/* Picture */}
        <div className='flex justify-center h-3/5 w-3/5 md:h-2/3 md:w-2/3'>
          <img src={profileSquare} alt='Julius Co' className='rounded-md m-1'/>
        </div>
      </div>
      {/* Skills */}
      <div className='w-full grid grid-cols-4 gap-4 md:gap-8'>
        { skills.map((skill) => (
          <div className='transition ease-in-out delay-100 duration-150
            flex border-4 border-secondary rounded-md justify-center items-center hover:scale-110'>
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About