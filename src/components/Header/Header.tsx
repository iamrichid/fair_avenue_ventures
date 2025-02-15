import "./Header.css";
import logo from "../../assets/FAIR AVENUE VENTURES.svg"; 
import mainl from "../../assets/logo.png";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import image1 from "../../carouselle/carroselle_1.jpg";
import image2 from "../../carouselle/carroselle_2.jpg";
import image3 from "../../carouselle/carroselle_3.jpg";
import image4 from "../../carouselle/carroselle_4.jpg";

const Header = () => {

    const images = [
        image1, 
        image2,
        image3,
        image4, 
      ];

      const [currentIndex, setCurrentIndex] = useState(0);


      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
    
      

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []); // Empty dependency array to run once on mount

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

<section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Your Global Export & Import Partner</h1>
                    <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Ensuring your products reach global markets swiftly and securely. Partner with us for seamless international trade.</p>

                    <form action="#" method="POST" className="mt-8 sm:mt-10">
                        <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Enter email address"
                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                
                            />
                            <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Get a catalog of our services</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                    <div className="flex items-center">
                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">2943</p>
                        <p className="ml-3 text-sm text-gray-900 font-pj">Goods<br />Delivered</p>
                    </div>

                    <div className="hidden sm:block">
                        <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                        </svg>
                    </div>

                    <div className="flex items-center">
                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">$1M+</p>
                        <p className="ml-3 text-sm text-gray-900 font-pj">Transaction<br />Completed</p>
                    </div>
                </div>
            </div>

            <div>
                <img 
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded"/>
            </div> 


      
        </div>
    </div>
</section>
</div>

)
};

export default Header;
