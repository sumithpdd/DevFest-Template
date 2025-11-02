import React from 'react';
import logo from '../assets/Devfest_London_2025.png';
import HamburgerMenu from './hamburger.js';
import Navbar from './navbar.js';
import TicketButton from './ticket-button';

const Header = () => (
 
    <header className="bg-white border-b-2 border-black py-1 top-0 sticky z-10 shadow-lg">
    
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
                <TicketButton 
                    href={process.env.REACT_APP_REGISTRATION_URL || "https://www.eventbrite.com/e/devfest-london-2025-tickets-1513661063989?aff=oddtdtcreator"}
                    compact={true}
                />
            </div> 
            <div className=''>
                <HamburgerMenu />
            </div>
        </nav>
    </header>

)

export default Header;

