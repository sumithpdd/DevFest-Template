import React from 'react';
import VenueImage from '../assets/Bush-House.jpeg';
import VenueLocationPin from '../assets/venue-location-pin.png';


const LocationSection = () => (

    <section className='my-20'>
        <h2 className='text-center'>Venue</h2>
        <div className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
            <div className="mx-auto px-auto text-center">
                <p className='text-xl lg:text-left lg:pt-0'>We're excited to announce that DevFest {process.env.REACT_APP_CHAPTER_NAME} will take place at <span className="font-semibold">King's College BVSH House.</span></p>

                <a href="https://maps.app.goo.gl/UZJNyzMfo3iKkqxo6" className='hover:text-Blue500 lg:text-left'>
                    <p className='text-lg'>King's College BVSH House<br />
                        30 Aldwych,<br />
                        London,<br />
                        WC2B 4BG
                    </p>
                </a>
                <p className='text-xl lg:text-left lg:pt-0'>Please use these coordinates if you have difficulty locating the entrance, 51.513144, -0.117439 .</p>
            </div>
            <div className="mx-auto px-4">
                <a href="https://maps.app.goo.gl/UZJNyzMfo3iKkqxo6"><img src={VenueImage} className='rounded-2xl overflow-hidden' alt='LOCATION'></img>
                </a>
            </div>
            <div className="mx-auto px-4">
                <a href="https://maps.app.goo.gl/UZJNyzMfo3iKkqxo6"><img src={VenueLocationPin} className='rounded-2xl overflow-hidden' alt='LOCATION'></img>
                </a>
            </div>
            <div className="mx-auto px-auto text-center">
                <br />
                <br />
                <br />
                <p className='text-xl lg:text-left lg:pt-0'><span className="font-semibold"> How to get to King's College BVSH House.</span></p>
                <p className='text-xl lg:text-left lg:pt-0'>The nearest underground stations are <span className="font-semibold"> Temple</span> station which is Circle and District line Or <span className="font-semibold"> Covent Garden</span> station which is Piccadilly line. </p>
            </div>
        </div>
    </section>
);

export default LocationSection;