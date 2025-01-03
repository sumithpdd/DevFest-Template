import React from 'react';
import logo from '../assets/new_logo.svg';
import HamburgerMenu from './hamburger.js';
import Navbar from './navbar.js';

const Header = () => (
 
    <header className="bg-Grey900 py-1 top-0 sticky z-10">
    
        <nav className='flex justify-between items-center w-11/12 mx-auto py-3'>
            <div className='w-64'>
                <a href="/">
                    <img src={logo} className=" h-13 sm:h-20 p-4 sm:p-0"  width="600px" alt="DevFest Logo" />
                </a>
            </div>
            <div>
                <Navbar />
            </div>
            <div className='hidden lg:block'>
           {/* <a href="https://www.eventbrite.com/e/devfest-london-2024-tickets-952825616067" className="text-white bg-Red500 hover:bg-Red500 hover:text-white rounded-full text-md px-6 py-4 mx-2">Register</a> */}
          </div> 
            <div className=''>
                <HamburgerMenu />
            </div>
        </nav>
    </header>

)

export default Header;

