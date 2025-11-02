import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-DFBlue via-DFGreen to-DFTeal text-white py-6 mb-10">
      <div className="w-11/12 mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          {process.env.REACT_APP_EVENT_NAME || 'DevFest London 2025'}
        </h1>
        <p className="text-lg sm:text-xl opacity-95">
          {process.env.REACT_APP_EVENT_TAGLINE || 'Connecting developers, building the future'}
        </p>
        <div className="flex justify-center items-center gap-6 mt-4 text-sm sm:text-base">
          <span className="flex items-center gap-2">
            <span className="text-2xl">📍</span>
            {process.env.REACT_APP_EVENT_CITY || 'London'}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-2xl">📅</span>
            {process.env.REACT_APP_EVENT_DATE || 'November 22nd, 2025'}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            {process.env.REACT_APP_ATTENDEE_COUNT || '250+'} Attendees
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;

