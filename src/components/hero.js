import React from 'react';
import gif from '../assets/2024_Save_the_date.gif';

const Hero = () => (
 
    <section className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
        <div className='my-5 mx-auto'>
            <img src={gif} className="mx-auto" alt='DevFest Save The Date Gif'></img>
        </div>
        <div className='mx-auto text-center sm:my-5 w-11/12'>
            <h1>DevFest {process.env.REACT_APP_CHAPTER_NAME} <br/>
            </h1>
            <h3 className='text-Green500 font-semibold'>Date: {process.env.REACT_APP_DEVFEST_DATE}</h3>
            <p className='sm:px-5 sm:text-lg'>DevFest {process.env.REACT_APP_CHAPTER_NAME} is a community-run one-day conference aimed to bring technologists, developers, students, tech companies, and speakers together in one location to learn, discuss and experiment with technology.</p>
            <p className='sm:px-5 sm:text-lg'>More info about the speakers and venue is coming in a few days!!!</p>

            <div className='hidden lg:block'>
           {/* <a href="https://www.eventbrite.com/e/devfest-london-2024-tickets-952825616067" className="text-white bg-Red500 hover:bg-Red500 hover:text-white rounded-full text-md px-6 py-4 mx-2">Register</a> */}
          </div> 
            {/*<div className='my-10'>*/}
            {/*        <a href={process.env.REACT_APP_DEVFEST_REGISTRATION_URL} className='text-white bg-Red500 hover:text-white rounded-full text-md px-6 py-4'>Register</a> */}
            {/*</div>*/}
        </div>
    </section>
    
);

export default Hero;