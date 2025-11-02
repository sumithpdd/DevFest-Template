import React from 'react';

const LocationSection = () => {
    // Venue images from environment variables
    const venueImages = [
        process.env.REACT_APP_VENUE_IMAGE_1,
        process.env.REACT_APP_VENUE_IMAGE_2,
        process.env.REACT_APP_VENUE_IMAGE_3
    ].filter(Boolean); // Remove undefined values

    return (
        <section className='bg-gradient-to-br from-DFBlue to-DFGreen text-white py-20 my-20 rounded-2xl'>
            <div className="w-11/12 mx-auto">
                <h2 className='text-center text-4xl font-bold mb-12'>Venue</h2>
                
                <div className="flex justify-center mb-12">
                    <span className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold text-lg">
                        22nd November 2025
                    </span>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                    {/* Left Column - Information */}
                    <div className="space-y-6">
                        <div>
                            <h3 className='text-2xl font-bold mb-4'>
                                {process.env.REACT_APP_VENUE_NAME || 'LSE Centre Building (CBG)'}
                            </h3>
                            <p className='text-lg leading-relaxed'>
                                {process.env.REACT_APP_VENUE_ADDRESS ? (
                                    <>
                                        {process.env.REACT_APP_VENUE_ADDRESS.split(',').map((line, idx) => (
                                            <span key={idx}>
                                                {line}<br />
                                            </span>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        LSE Centre Building (CBG)<br />
                                        Houghton St,<br />
                                        London,<br />
                                        WC2A 2AE
                                    </>
                                )}
                            </p>
                        </div>

                        {process.env.REACT_APP_VENUE_LEVEL && (
                            <p className='text-lg'>
                                <strong>Level:</strong> {process.env.REACT_APP_VENUE_LEVEL}
                            </p>
                        )}

                        <p className='text-lg'>
                            Please use these coordinates if you have difficulty locating the entrance: <strong>51.514204, -0.116150</strong>
                        </p>

                        {(process.env.REACT_APP_VENUE_TRANSPORT || !process.env.REACT_APP_VENUE_TRANSPORT) && (
                            <div className='text-lg'>
                                <strong>How to get to LSE Centre Building (CBG)</strong><br />
                                {process.env.REACT_APP_VENUE_TRANSPORT || 'The nearest underground stations are Temple station which is Circle and District line Or Covent Garden station which is Piccadilly line.'}
                            </div>
                        )}
                    </div>

                    {/* Right Column - Staggered Images */}
                    {venueImages.length > 0 && (
                        <div className="relative" style={{ minHeight: '500px' }}>
                            {/* Figure 1 - Top Left */}
                            {venueImages[0] && (
                                <div className="absolute top-0 left-0 w-56 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform z-30">
                                    <img 
                                        src={venueImages[0]} 
                                        alt="Venue view 1"
                                        className="w-full h-64 object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                            
                            {/* Figure 2 - Top Right */}
                            {venueImages[1] && (
                                <div className="absolute top-24 right-0 w-56 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform z-20">
                                    <img 
                                        src={venueImages[1]} 
                                        alt="Venue view 2"
                                        className="w-full h-64 object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                            
                            {/* Figure 3 - Bottom Left */}
                            {venueImages[2] && (
                                <div className="absolute bottom-0 left-12 w-56 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform z-10">
                                    <img 
                                        src={venueImages[2]} 
                                        alt="Venue view 3"
                                        className="w-full h-64 object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Map Section */}
                <div className="mt-12">
                    <h3 className='text-2xl font-bold mb-6 text-center'>Location Map</h3>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe 
                            src={process.env.REACT_APP_VENUE_MAP_URL || "https://maps.google.com/maps?q=LSE+Centre+Building+(CBG),+Houghton+St,+London,+WC2A+2AE&output=embed"}
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Venue Location Map"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;