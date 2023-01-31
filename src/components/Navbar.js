import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 md:mb-0">
            <Link to="/about">About</Link>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            </nav>
        </div>
        </header>
  );
}

export default Navbar;