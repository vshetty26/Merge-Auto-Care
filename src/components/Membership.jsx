import React from 'react';

const Membership = () => {
    return (
        <section className="bg-primary-navy py-20 px-4 md:px-8 relative overflow-hidden">
            {/* Diagonal Red Shape/Overlay? In image 4top right corner has red/orange. 
                 But mainly dark blue background.
             */}

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-white mb-10 md:mb-0 z-10">
                    <p className="text-yellow-400 font-bold mb-2 uppercase tracking-wider">Car Service Offer</p>
                    <h2 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
                        QUALITY SERVICING,<br />
                        UNBEATABLE OFFERS!
                    </h2>
                    <p className="text-lg md:text-xl font-medium mb-8 max-w-lg">
                        Premium Car Care, Just a Step Away. Book now to experience the difference.
                    </p>
                    <button className="bg-primary-yellow text-primary-navy px-8 py-3 rounded-full font-bold uppercase hover:bg-white transition-colors">
                        Book Now
                    </button>
                </div>

                <div className="md:w-1/2 relative z-10 flex justify-center">
                    {/* Card Image Placeholder - mimicking the Speeders card/person holding it */}
                    <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="w-80 h-96 bg-white rounded-xl shadow-2xl p-4 flex flex-col items-center border-[10px] border-white">
                            <div className="w-full h-full bg-primary-red rounded-lg overflow-hidden relative flex flex-col items-center justify-center">
                                {/* Inner Content */}
                                <div className="text-white font-heading text-6xl italic mb-4">20%</div>
                                <div className="text-white font-bold text-2xl uppercase">OFF</div>
                                <div className="absolute bottom-10 left-0 w-full text-center text-white text-sm">On First Service</div>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-xl font-bold text-primary-navy">
                            Limited Time!
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600 to-transparent opacity-20 transform skew-x-12 origin-top-right"></div>
        </section>
    );
};

export default Membership;
