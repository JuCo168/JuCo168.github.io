import styles from "../assets/styles";
import { projects } from "../assets/constants";

export default function Projects() {
  return (
     <div className="flex flex-col justify-center">
        <div className="flex justify-center border-b-2 w-full">
          <p className="text-[48px] font-semibold pb-1">Projects</p>
        </div>
        <div className="mt-8 mx-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          { projects.map((project) => (
            <div className='transition ease-in-out delay-100 duration-150 ring-4
              rounded-md justify-center items-center cursor-pointer flex flex-col overflow-hidden' 
            href={project.link} target='_blank' rel="noreferrer">
              <p className="font-semibold">
                {project.title}
              </p>
              <p className="text-center py-2">
                {project.description}
              </p>
              <img src={project.image}
                className="rounded-b-md"/>
            </div>
          ))}
        </div>
     </div>
  );
}