import React from 'react';
import Hero from '../components/hero.js';
// import About from '../components/about.js';
import SpeakerProfiles from '../components/speakers.js';
import SponsorLogos from '../components/sponsors.js';
import LocationSection from '../components/location.js';
// import MobileApp from "./app";

const Home = () => (
  <div>
    {/* <MobileApp/> */}
    <Hero />
    {/*<About />*/}
    <SpeakerProfiles />
     {/* <LocationSection />
   <SponsorLogos /> */}
  </div>
  
)
   


export default Home;