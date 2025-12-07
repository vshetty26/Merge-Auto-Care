import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[80vh] bg-white overflow-hidden flex flex-col items-center justify-start pt-20">
            {/* Background Faint Building - Placeholder */}
            <div className="absolute inset-0 bg-gray-50 opacity-50 z-0">
                {/* We can add a pattern or light image here */}
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-white"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl px-4 mt-10">
                <h1 className="text-5xl md:text-7xl font-heading text-primary-navy uppercase leading-none tracking-tight">
                    Automotive Expertise<br />
                    Center
                </h1>
                <h2 className="text-3xl md:text-5xl font-heading text-primary-red uppercase mt-2">
                    Drive-In Auto Care
                </h2>
                <p className="mt-6 text-xl md:text-2xl text-primary-navy font-bold tracking-wide">
                    🔧 Premium Car Care, Just a Step Away
                </p>
                <button className="mt-8 bg-primary-red text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-red-700 transition">
                    Explore
                </button>
            </div>

            {/* Mascot */}
            <div className="relative z-10 mt-8 mb-[-80px] md:mb-[-120px]">
                <div className="w-64 h-64 md:w-96 md:h-96 relative">
                    <img src="/mascot.png" alt="Mascot" className="w-full h-full object-contain drop-shadow-2xl animate-bounce-slow" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
