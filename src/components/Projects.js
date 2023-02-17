import styles from "../assets/styles";
import { projects } from "../assets/constants";

export default function Projects() {
  return (
     <div className="flex flex-col justify-center px-2 md:px-0">
        {/* Projects title */}
        <div className="flex justify-center border-b-2 w-full">
          <p className="text-[48px] font-semibold pb-1">Projects</p>
        </div>
        {/* Projects */}
        <div className="mt-8 mx-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          { projects.map((project) => (
            <a className='transition ease-in-out delay-100 duration-150 ring-4
              rounded-md justify-center items-center cursor-pointer flex flex-col overflow-hidden
              h-80' 
              href={project.link} target='_blank' rel="noreferrer">
              <p className="font-semibold pt-2">
                {project.title}
              </p>
              <p className="text-center p-2">
                {project.description}
              </p>
              <div className="h-auto w-full overflow-hidden rounded-b-md">
                <img src={project.image}
                  className='w-full object-cover'/>
              </div>
            </a>
          ))}
        </div>
     </div>
  );
}