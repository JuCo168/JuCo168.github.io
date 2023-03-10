import { projects } from '../assets/constants';

export default function Projects() {
  return (
     <div className='flex flex-col justify-center px-2 md:px-0'>
        {/* Projects title */}
        <p className='text-5xl text-center font-semibold pb-2 border-b-2 w-full -mt-2'>Projects</p>
        {/* Projects */}
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
          { projects.map((project) => (
            <a className='relative transition ease-in-out delay-100 duration-150 border-4 border-secondary/80
              rounded-md justify-center items-center cursor-pointer flex flex-col overflow-hidden
              h-80' 
              href={project.link} target='_blank' rel='noreferrer'>
              <p className='font-semibold pt-2 text-xl'>
                {project.title}
              </p>
              <p className='text-center p-2'>
                {project.description}
              </p>
              <div className={`h-auto w-full overflow-hidden rounded-b-md pt-2 ${project.image ? '' : 'hidden'}`}>
                <img src={project.image}
                  alt={project.title}
                  className='w-full object-cover'/>
              </div>
              <div className='absolute top-0 right-0 flex flex-row justify-center space-x-4 pr-1 pt-1 text-3xl sm:text-4xl'>
                { project.icons.map((icon) => (
                  icon
                ))}
              </div>
            </a>
          ))}
        </div>
     </div>
  );
}