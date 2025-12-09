import React from 'react';

const InfoSection = () => {
    const cards = [
        {
            title: "Multi-Brand Expertise",
            description: "Expertise in multi-brand servicing from premium to everyday vehicles.",
            position: "top-0 -translate-y-full md:-translate-y-[120%]", // Top Center
            delay: "delay-100"
        },
        {
            title: "Collision Repair",
            description: "Dedicated collision & accidental repair facility with advanced equipment.",
            position: "bottom-10 -left-4 md:-left-40 translate-y-full md:translate-y-[80%]", // Bottom Left
            delay: "delay-300"
        },
        {
            title: "Genuine Parts",
            description: "Genuine OES/OEM parts to ensure safety and performance.",
            position: "bottom-10 -right-4 md:-right-40 translate-y-full md:translate-y-[80%]", // Bottom Right
            delay: "delay-500"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-gray-50 min-h-[800px] flex flex-col items-center justify-center">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
                <div className="w-[800px] h-[800px] bg-white rounded-full blur-3xl absolute shadow-inner"></div>
                <div className="w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl absolute animate-pulse"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="mb-20">
                    <p className="text-xl font-bold text-soft-highlight mb-2">About Us</p>
                    <h2 className="text-5xl md:text-6xl font-heading text-primary-bg uppercase mb-4">
                        Why Choose Us
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 font-bold">
                        Auto Car Repair (Powered by Autogine Services) is a leading network of multi-brand car service workshops in Delhi NCR.
                    </p>
                    <p className="mt-4 text-sm text-gray-400 uppercase tracking-widest animate-bounce">
                        Hover over the car to discover
                    </p>
                </div>

                {/* Interactive Area */}
                <div className="relative w-full max-w-lg mx-auto h-[400px] flex items-center justify-center group perspective-1000">

                    {/* Orbit Rings (Decorative) */}
                    <div className="absolute inset-0 border border-gray-200 rounded-full scale-150 animate-[spin_20s_linear_infinite] pointer-events-none group-hover:border-soft-highlight/50 transition-colors duration-700"></div>
                    <div className="absolute inset-0 border border-gray-200 rounded-full scale-125 animate-[spin_15s_linear_infinite_reverse] pointer-events-none group-hover:border-soft-highlight/50 transition-colors duration-700"></div>

                    {/* Central Mascot - The Trigger */}
                    <div className="relative z-20 w-80 md:w-96 transition-transform duration-500 transform group-hover:scale-110 cursor-pointer">
                        <div className="absolute inset-0 bg-yellow-400/30 filter blur-xl rounded-full scale-75 group-hover:scale-100 transition-all duration-500"></div>
                        <img
                            src="/mascot.png"
                            alt="Why Choose Us"
                            className="w-full relative z-10 drop-shadow-2xl floating-animation"
                        />
                    </div>

                    {/* Floating Info Cards */}
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`absolute ${card.position} w-64 md:w-72 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl transition-all duration-700 ease-out transform opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 ${card.delay} z-30 pointer-events-none group-hover:pointer-events-auto`}
                        >
                            <h3 className="text-xl font-heading text-primary-bg mb-2 uppercase">{card.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>

                            {/* Connector Line (Visual only) */}
                            <div className={`absolute w-px h-16 bg-soft-highlight/50 z-[-1]
                                ${index === 0 ? 'bottom-0 left-1/2 -mb-16' : ''} 
                                ${index === 1 ? 'top-0 right-0 -mt-10 md:-mr-10 rotate-45' : ''}
                                ${index === 2 ? 'top-0 left-0 -mt-10 md:-ml-10 -rotate-45' : ''}
                                opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${card.delay}
                            `}></div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .floating-animation {
                    animation: float 3s ease-in-out infinite;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
};

export default InfoSection;
