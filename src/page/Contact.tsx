import React from "react";
import "../components/Header/Header.css";
import logo from "../assets/FAIR AVENUE VENTURES.svg";
import mainl from "../assets/logo.png";
import Footer from "../components/Footer";
import { NavLink } from "react-router";


const Contact: React.FC = () => {
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
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
              <NavLink
                to="/"
                end
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Contact
              </NavLink>

              <NavLink
                to="/about"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                About Fair Avenue Venture
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Please fill out the form below to get in touch with us.
                </p>
                <form action="mailto:NANAAFIA521@GMAIL.COM" method="post" encType="text/plain">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-primary" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-primary" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                    <textarea id="message" name="message" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-primary"></textarea>
                  </div>
                  <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Send Message
                  </button>
                </form>
            </div>
              </div>

              <div>
<div className="mt-8 mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Our Digital Address Location
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                     GT-138-9752
                    </p>
                  </div>
                </div>
                <div className="mt-8 mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 2C8.268 2 2 8.268 2 16c0 7.732 6.268 14 14 14s14-6.268 14-14C30 8.268 23.732 2 16 2zm0 26c-6.627 0-12-5.373-12-12S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12zm-1-17h2v6h-2zm0 8h2v2h-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                     0544908933 / 0303209145
                    </p>
                  </div>
                </div>
</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
