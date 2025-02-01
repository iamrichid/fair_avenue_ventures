import "../components/Header/Header.css";
import logo from "../assets/FAIR AVENUE VENTURES.svg"; 
import mainl from "../assets/logo.png";
import Footer from "../components/Footer";
import { NavLink } from "react-router";
import Services_ from "../components/Services_";

const Services = () => {
  return (
    <div className="bg-gray-50">
<header className="py-4 md:py-6">
    <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
                <NavLink to="/" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <img className="w-auto h-4" src={mainl} alt="" />
                    <img className="w-auto h-4 ml-2" src={logo} alt="" />
                </NavLink>
            </div>

            <div className="flex lg:hidden">
                <button type="button" className="text-gray-900">
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                <NavLink to="/" end title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </NavLink>

                <NavLink to="/services" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Services </NavLink>

                <NavLink to="/contact" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact </NavLink>

                <NavLink to="/about" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">About Fair Avenue Venture </NavLink>
            </div>

            
        </div>
    </div>
</header>

<Services_ />



< Footer />





</div>

)
};

export default Services;
