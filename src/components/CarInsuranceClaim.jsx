import React, { useEffect } from 'react';

const CarInsuranceClaim = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Accidental Claim",
            price: "₹ 1000.00",
            time: "8 Hour(s) Taken",
            description: "Hassle-free insurance claims for major body damage.",
            features: [
                "Body Damage Inspection",
                "Insurance claim Advice",
                "Policy Inspection",
                "Upto 100% file charge wave off",
                "Complimentary full car wash",
                "Upto 50% off on detailing service",
                "All company cashless available"
            ]
        },
        {
            title: "Windshield Replacement",
            price: "₹ 1000.00",
            time: "24 Hour(s) Taken",
            description: "Premium glass replacement for safety and clarity.",
            features: [
                "Cracked or Damaged Windshield",
                "Free Pick-Up & Drop",
                "Opening and Fitting of Windshield",
                "Windshield Replacement- Labor",
                "Windshield Type Identification",
                "Quality Glass Selection",
                "Frame Inspection"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden font-mono">

            {/* Background Hazard Stripes */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 10px, #000 10px, #000 20px)' }}>
            </div>

            {/* Shattered Glass Overlay Effect */}
            <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cracked-glass.png')]"></div>

            <div className="relative z-20 container mx-auto px-4 py-16 flex flex-col items-center">

                {/* Emergency Header */}
                <div className="border-4 border-red-600 p-8 rounded-lg bg-black/80 backdrop-blur-sm mb-16 relative w-full max-w-4xl text-center shadow-[0_0_50px_rgba(220,38,38,0.5)] animate-pulse-slow">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-black font-black px-6 py-2 uppercase tracking-widest text-xl rounded">
                        Emergency Response
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4" style={{ textShadow: '4px 4px 0 #dc2626' }}>
                        CRASH & CLAIM
                    </h1>
                    <p className="text-xl text-gray-300 font-bold max-w-2xl mx-auto">
                        Accidents happen. We handle the mess so you can get back on the road safely.
                    </p>
                </div>

                {/* Services Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                    {services.map((service, idx) => (
                        <div key={idx} className="group relative bg-black border-2 border-yellow-500/50 p-1 hover:border-yellow-500 transition-colors duration-300">
                            {/* Tape Corners */}
                            <div className="absolute -top-2 -left-2 w-16 h-8 bg-yellow-400 transform -rotate-45 z-30 shadow-md"></div>
                            <div className="absolute -bottom-2 -right-2 w-16 h-8 bg-yellow-400 transform -rotate-45 z-30 shadow-md"></div>

                            {/* Inner Content */}
                            <div className="h-full bg-gray-800/50 p-8 relative overflow-hidden">
                                {/* Visual Image Background */}
                                <div className="absolute inset-0 opacity-20 filter grayscale contrast-125 group-hover:opacity-10 transition-opacity">
                                    <img src="/broken_glass_base.png" alt="Crash" className="w-full h-full object-cover" />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <h2 className="text-3xl font-black text-yellow-500 mb-2 uppercase italic">{service.title}</h2>
                                    <div className="text-4xl font-bold text-white mb-4 bg-red-600/80 inline-block px-4 py-1 transform -skew-x-12 origin-left border-l-4 border-white">
                                        {service.price}
                                    </div>

                                    <p className="text-gray-300 mb-6 font-bold">{service.description}</p>

                                    <div className="flex-grow space-y-3 mb-8">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center text-sm font-bold text-gray-400">
                                                <span className="text-red-500 mr-3 text-lg">⚠</span>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm font-bold text-yellow-500/80">
                                            <span>EST. DOWNTIME</span>
                                            <span className="bg-yellow-500/20 px-2 py-1 rounded">{service.time}</span>
                                        </div>
                                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase py-4 tracking-widest text-lg shadow-lg hover:shadow-red-600/50 transition-all clip-path-slant">
                                            Initiate Rescue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Helpline Banner */}
                <div className="w-full max-w-6xl mt-16 bg-yellow-400 text-black p-6 flex flex-col md:flex-row justify-between items-center font-black uppercase tracking-wider relative overflow-hidden">
                    <div className="relative z-10 text-2xl md:text-3xl flex items-center">
                        <span className="text-5xl mr-4">📞</span>
                        <div>
                            <div>24/7 Helpline</div>
                            <div className="text-sm tracking-normal font-bold opacity-80">Immediate Assistance</div>
                        </div>
                    </div>
                    <div className="relative z-10 text-4xl md:text-6xl mt-4 md:mt-0">
                        9810446692
                    </div>
                    {/* Stripes Overlay on Banner */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>
                </div>

            </div>

            <style jsx>{`
                .clip-path-slant {
                    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
                }
                @keyframes pulse-slow {
                    0%, 100% { box-shadow: 0 0 30px rgba(220,38,38,0.3); }
                    50% { box-shadow: 0 0 60px rgba(220,38,38,0.6); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s infinite;
                }
            `}</style>
        </div>
    );
};

export default CarInsuranceClaim;
