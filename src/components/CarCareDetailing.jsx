import React, { useState, useEffect } from 'react';

const CarCareDetailing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Nano Coating",
            price: "₹ 15599.00",
            time: "6 Day(s) Taken",
            image: "/service_ceramic_coating.png",
            features: [
                "UV Rays Damage Protection",
                "Swirl Marks Reduction",
                "Restores Paint Dullness",
                "Scratch Resistance",
                "Pressure Wash & Polishing",
                "Long-lasting Shine"
            ]
        },
        {
            title: "Ceramic Coating",
            price: "₹ 12999.00",
            time: "6 Hour(s) Taken",
            image: "/service_ceramic_coating.png",
            features: [
                "High Gloss Finish",
                "Hydrophobic Properties",
                "UV Protection",
                "Easy Maintenance",
                "Pressure Wash included",
                "Chemical Resistance"
            ]
        },
        {
            title: "Teflon Coating",
            price: "₹ 3499.00",
            time: "24 Hour(s) Taken",
            image: "/service_foam_wash.png",
            features: [
                "Paint Protection",
                "Gloss Enhancement",
                "Pressure Wash",
                "Polishing With Compound",
                "Tyre Cleaning and Dressing",
                "Wax Polishing"
            ]
        },
        {
            title: "Underchassis Rust Coating",
            price: "₹ 2499.00",
            time: "4 Hour(s) Taken",
            image: "/service_underbody_coating.png",
            features: [
                "Prevents Rust and Corrosion",
                "Rubberized Protective Layer",
                "Sound Deadening",
                "Pre-coating preparation",
                "Chemical Treatment",
                "Quality Control Inspection"
            ]
        },
        {
            title: "Complete Car Detailing",
            price: "₹ 1799.00",
            time: "5 Hour(s) Taken",
            image: "/service_foam_wash.png",
            features: [
                "Interior & Exterior Deep Clean",
                "Paint Correction",
                "Alloy Polishing",
                "Tyre Dressing",
                "Engine Bay Cleaning",
                "Upholstery Shampooing"
            ]
        },
        {
            title: "Exterior Rubbing & Polishing",
            price: "₹ 1299.00",
            time: "4 Hour(s) Taken",
            image: "/service_ceramic_coating.png", // Reuse shiny car img
            features: [
                "Removes Minor Scratches",
                "Eliminates Swirl Marks",
                "Restores Gloss",
                "Machine Polishing",
                "Wax Application",
                "Exterior Wash"
            ]
        },
        {
            title: "Interior Dry Ice Cleaning",
            price: "₹ 1199.00",
            time: "4 Hour(s) Taken",
            image: "/service_interior_detailing.png",
            features: [
                "Deep Stain Removal",
                "Sanitization & Anti-Bacterial",
                "Odor Elimination",
                "Dashboard Polishing",
                "Seat Deep Cleaning",
                "Zero Residue Cleaning"
            ]
        },
        {
            title: "Car Wash",
            price: "₹ 499.00",
            time: "3 Hour(s) Taken",
            image: "/service_foam_wash.png",
            features: [
                "Premium Foam Wash",
                "Interior Vacuuming",
                "Dashboard Polishing",
                "Tyre Dressing",
                "Underbody Wash",
                "Bug and Tar Removal"
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const currentService = services[currentIndex];

    return (
        <div className="relative h-screen w-full bg-gray-900 overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                <div key={currentIndex} className="absolute inset-0 animate-fade-in-slow">
                    <img
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>
            </div>

            {/* Navigation Arrows (Bottom Center) */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-6">
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm group"
                >
                    <span className="text-xl transform group-hover:-translate-x-1 block transition-transform">←</span>
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm group"
                >
                    <span className="text-xl transform group-hover:translate-x-1 block transition-transform">→</span>
                </button>
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
                <div key={currentIndex} className="max-w-4xl text-center animate-slide-up">
                    <h2 className="text-sm md:text-md uppercase tracking-[0.3em] text-primary-yellow mb-4 font-bold">
                        Detailed Perfection
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-heading text-white mb-8 drop-shadow-xl">
                        {currentService.title}
                    </h1>

                    {/* Glass Card for Details */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto shadow-2xl">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-white/10 pb-6">
                            <div className="text-center md:text-left mb-4 md:mb-0">
                                <div className="text-3xl font-bold text-primary-red">{currentService.price}</div>
                                <div className="text-gray-300 text-sm mt-1">Estimating Time: {currentService.time}</div>
                            </div>
                            <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-primary-yellow hover:text-primary-navy transition-colors uppercase tracking-wider text-sm shadow-lg">
                                Select Your Car
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            {currentService.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-gray-200 text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary-yellow rounded-full mr-3 flex-shrink-0"></span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-4 z-30 hidden md:flex">
                {services.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary-yellow h-8' : 'bg-white/50 hover:bg-white'}`}
                    />
                ))}
            </div>

            <style jsx>{`
                @keyframes fadeInSlow {
                    from { opacity: 0; transform: scale(1.05); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-slow {
                    animation: fadeInSlow 1s ease-out forwards;
                }
                .animate-slide-up {
                    animation: slideUp 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default CarCareDetailing;
