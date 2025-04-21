import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/sparkle.png"
import ClickSpark from './ClickSpark';
import "../index.css";

const NavigationBar=()=> { 
  return(
      <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
      >
      <nav className="bg-nav top-0 h-16 z-50 fixed w-screen">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between pt-4 md:mx-auto md:p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse ml-4">
              <img src={Logo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Gwyneth Tan</span>
          </a>
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center mr-4 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-solid-bg" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-screen md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium bg-nav rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
              <NavLink to="/" className="block py-3 px-5 md:p-0 text-neon rounded-sm md:hover:bg-transparent md:border-0">Home</NavLink>            
              </li>
              <li>
              <NavLink to="/Projects" className="block py-3 px-5 md:pl-10 md:p-0 text-neon rounded-sm md:hover:bg-transparent md:border-0">Projects</NavLink>            
              </li>
              <li>
              <NavLink to="/Experiences" className="block py-3 px-5 md:pl-10 md:p-0 text-neon rounded-sm md:hover:bg-transparent md:border-0">Experiences</NavLink>            
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="block py-3 px-5 md:pl-10 md:p-0 text-neon rounded-sm md:hover:bg-transparent md:border-0">
                  Resume
                </a>              
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </ClickSpark>
);
}

export default NavigationBar