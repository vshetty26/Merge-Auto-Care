import React from 'react';

const Testimonials = () => {
    return (
        <section className="bg-primary-bg py-20 px-4">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <p className="text-xl text-soft-highlight font-bold mb-2">What our clients say</p>
                <h2 className="text-5xl md:text-7xl font-heading text-clean-white uppercase">
                    Trusted by Luxury Car Owners
                </h2>
            </div>

            {/* Carousel / Grid of Testimonials */}
            <div className="relative overflow-hidden w-full py-10">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary-bg to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary-bg to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-marquee-infinite pause-on-hover space-x-8">
                    {/* First Set of Cards */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex-none w-80 md:w-96 bg-secondary-bg rounded-xl p-8 shadow-md relative border-l-4 border-soft-highlight transform transition-transform hover:scale-105 duration-300">
                            <div className="text-clean-white font-bold text-lg mb-4">"Excellent Service!"</div>
                            <p className="text-text-secondary italic mb-6">
                                "Great experience with Merge Auto Care. They handled my car with care and the detailing was top notch. Highly recommended for anyone in Gurgaon."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary-bg rounded-full flex items-center justify-center text-clean-white font-bold mr-3 border border-white/10">
                                    {String.fromCharCode(64 + ((i - 1) % 3) + 1)}
                                </div>
                                <div>
                                    <p className="font-bold text-clean-white">Customer {i}</p>
                                    <p className="text-sm text-gray-500">Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Second Set of Cards (Duplicate for seamless loop) */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={`dup-${i}`} className="flex-none w-80 md:w-96 bg-secondary-bg rounded-xl p-8 shadow-md relative border-l-4 border-soft-highlight transform transition-transform hover:scale-105 duration-300">
                            <div className="text-clean-white font-bold text-lg mb-4">"Excellent Service!"</div>
                            <p className="text-text-secondary italic mb-6">
                                "Great experience with Merge Auto Care. They handled my car with care and the detailing was top notch. Highly recommended for anyone in Gurgaon."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary-bg rounded-full flex items-center justify-center text-clean-white font-bold mr-3 border border-white/10">
                                    {String.fromCharCode(64 + ((i - 1) % 3) + 1)}
                                </div>
                                <div>
                                    <p className="font-bold text-clean-white">Customer {i}</p>
                                    <p className="text-sm text-gray-500">Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <button className="bg-clean-white text-primary-bg font-heading text-xl px-10 py-4 rounded-full hover:bg-gray-200 transition-colors uppercase tracking-wider">
                    See All Reviews
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
