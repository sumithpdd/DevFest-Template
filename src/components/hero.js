import React from 'react';
import bannerImage from '../assets/Devfest_London_2025_Banner.png';
import TicketButton from './ticket-button';
import Banner from './banner';

const Hero = () => (
    <>
    <Banner />
    <section className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2 bg-DFBackground py-10 rounded-2xl'>
        <div className='my-5 mx-auto flex items-center justify-center'>
            <img 
                src={bannerImage} 
                className="mx-auto w-full max-w-3xl rounded-2xl shadow-2xl object-contain" 
                alt='DevFest London 2025 Banner'
            />
        </div>
        <div className='mx-auto text-center sm:my-5 w-11/12 px-8'>
            <div className="inline-flex items-center mb-1">
                <span className="text-5xl font-bold text-DFBlue">{'{'}</span>
                <h1 className="text-5xl font-bold mx-3 text-black">DevFest</h1>
                <span className="text-5xl font-bold text-DFGreen">{'}'}</span>
            </div>
            <div className="inline-flex items-center my-1 gap-2">
                <span className="bg-white text-black px-4 py-2 rounded-full border-2 border-black font-bold text-lg">{process.env.REACT_APP_EVENT_CITY || 'London'}</span>
                <span className="text-white px-4 py-2 rounded-full border-2 border-black font-bold text-lg bg-DFBlue">2025</span>
            </div>
            <h3 className='text-DFBlue font-semibold text-xl my-1'>{process.env.REACT_APP_EVENT_DATE || 'November 22nd, 2025'}</h3>
            <p className='sm:px-5 sm:text-lg text-gray-700 my-2'>{process.env.REACT_APP_EVENT_DESCRIPTION || 'We\'re excited to announce that DevFest London will take place at LSE Centre Building (CBG). Join us for a community-run one-day conference aimed to bring technologists, developers, students, tech companies, and speakers together in one location to learn, discuss and experiment with technology.'}</p>
            <p className='sm:px-5 sm:text-lg text-gray-700 my-2'>More info about the speakers is coming soon!</p>

            <div className='mt-2'>
                <TicketButton href={process.env.REACT_APP_REGISTRATION_URL || "https://www.eventbrite.com/e/devfest-london-2025-tickets-1513661063989?aff=oddtdtcreator"} />
            </div>
        </div>
    </section>
    </>
);

export default Hero;