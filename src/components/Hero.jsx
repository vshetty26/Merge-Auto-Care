import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[80vh] bg-primary-bg overflow-hidden flex flex-col items-center justify-start pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src="/service_comprehensive.png" alt="Workshop Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/70"></div> {/* Dark overlay for text readability */}
            </div>

            <div className="relative z-10 text-center max-w-4xl px-4 mt-10">
                <h1 className="text-5xl md:text-7xl font-heading text-clean-white uppercase leading-none tracking-tight">
                    Premium Luxury Car Service & Repair<br />
                    <span className="text-soft-highlight">Merge Auto Care</span>
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-text-secondary font-bold tracking-wide max-w-2xl mx-auto">
                    Specialized maintenance, repair and detailing for luxury vehicles with genuine spare parts and expert technicians.
                </p>
                <a
                    href="https://www.facebook.com/people/Merge-Auto-Care/100090113804781/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block bg-clean-white text-primary-bg px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition"
                >
                    View Our Work on Facebook
                </a>
            </div>

            {/* Mascot Removed */}
        </section>
    );
};

export default Hero;
