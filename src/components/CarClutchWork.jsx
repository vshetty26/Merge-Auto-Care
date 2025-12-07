import React, { useEffect, useState } from 'react';

const CarClutchWork = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 'flywheel-skimming',
            title: "Flywheel Skimming",
            price: "₹ 999.00",
            time: "8 Hour(s) Taken",
            interval: "15 Days or 500kms",
            image: "/service_clutch_placeholder.png",
            features: [
                "In Case of Burning Smell From Clutch",
                "Inspection of Clutch System",
                "Resurfacing of Flywheel",
                "Thickness Measurement",
                "Balancing Considerations",
                "Compatibility with Clutch Components",
                "1 more specifications"
            ]
        },
        {
            id: 'clutch-overhaul',
            title: "Clutch Overhaul",
            price: "₹ 1849.00",
            time: "8 Hour(s) Taken",
            interval: "15 Days or 500kms",
            recommendation: "Every 70,000 - 80,000 Kms (Recommended)",
            image: "/service_clutch_placeholder.png",
            features: [
                "Opening, Inspection, and Fitting of Given Clutch Components",
                "Clutch Plate",
                "Pressure Plate",
                "Clutch Bearing",
                "Slave Cylinder Check",
                "1 more specifications"
            ]
        },
        {
            id: 'flywheel-replacement',
            title: "Flywheel Replacement",
            price: "₹ 1299.00",
            time: "8 Hour(s) Taken",
            interval: "15 Days or 500kms",
            recommendation: "Recommended: In Case of Noise From Clutch",
            image: "/service_clutch_placeholder.png",
            features: [
                "Flywheel Replacement- Labor",
                "Visual Inspection",
                "Bolt Hole Inspection",
                "New Flywheel Installation",
                "Torque Verification",
                "1 more specifications"
            ]
        },
        {
            id: 'clutch-bearing',
            title: "Clutch Bearing Replacement",
            price: "₹ 550.00",
            time: "6 Hour(s) Taken",
            interval: "15 Days or 500kms",
            recommendation: "Recommended: In Case of Vibrations in Clutch Pedal",
            image: "/service_clutch_placeholder.png",
            features: [
                "Clutch Bearing Replacement- Labor",
                "Visual Inspection",
                "Quality Replacement Parts",
                "Bearing Replacement",
                "Clutch System Testing",
                "1 more specifications"
            ]
        },
        {
            id: 'clutch-assembly',
            title: "Clutch Assembly",
            price: "₹ 1299.00",
            time: "6 Hour(s) Taken",
            interval: "15 Days or 500kms",
            recommendation: "Recommended: In Case of Hard Clutch & Pickup Issue",
            image: "/service_clutch_placeholder.png",
            features: [
                "Opening and Fititng of Clutch Assembly",
                "Pressure Plate Strength",
                "Clutch Fork Examination",
                "Inspection of Seals and Gaskets",
                "Torque Specifications",
                "1 more specifications"
            ]
        }
    ];

    const [activeService, setActiveService] = useState(services[0]);

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-primary-red font-bold tracking-wider mb-2 uppercase animate-fade-in-up">Performance & Transmission</p>
                    <h1 className="text-5xl md:text-6xl font-heading text-primary-navy uppercase mb-6 animate-fade-in-up delay-100">Car Clutch Work</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Expert clutch repair and replacement services to ensure smooth shifting and optimal power transmission.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side - Vertical Tabs Navigation */}
                    <div className="lg:w-1/3 space-y-4">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(service)}
                                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-l-8 shadow-md flex justify-between items-center group ${activeService.id === service.id
                                        ? 'bg-white border-primary-red transform translate-x-2'
                                        : 'bg-white/80 border-transparent hover:bg-white hover:border-gray-300'
                                    }`}
                            >
                                <span className={`font-bold text-lg ${activeService.id === service.id ? 'text-primary-red' : 'text-gray-700'}`}>
                                    {service.title}
                                </span>
                                <span className={`text-xl ${activeService.id === service.id ? 'opacity-100 text-primary-red' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'} transition-all`}>
                                    →
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Right Side - Detailed View Area */}
                    <div className="lg:w-2/3">
                        <div key={activeService.id} className="bg-white rounded-3xl shadow-xl overflow-hidden animate-slide-up relative min-h-[600px] flex flex-col">
                            {/* Image Header */}
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={activeService.image}
                                    alt={activeService.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl text-white font-heading mb-2">{activeService.title}</h2>
                                        {activeService.recommendation && (
                                            <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider bg-black/50 px-3 py-1 inline-block rounded">
                                                {activeService.recommendation}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="absolute top-6 right-6 bg-white text-primary-navy px-6 py-3 rounded-full font-extrabold text-2xl shadow-lg">
                                    {activeService.price}
                                </div>
                            </div>

                            {/* Details Body */}
                            <div className="p-8 md:p-10 flex-grow flex flex-col">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide border-b border-gray-100 pb-2">Service Overview</h3>
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-3 text-2xl">⏱️</span>
                                            <div>
                                                <div className="font-bold text-gray-800">Time Required</div>
                                                <div className="text-sm">{activeService.time}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-3 text-2xl">🛡️</span>
                                            <div>
                                                <div className="font-bold text-gray-800">Warranty/Interval</div>
                                                <div className="text-sm">{activeService.interval}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide border-b border-gray-100 pb-2">Service Specifications</h3>
                                        <ul className="space-y-2">
                                            {activeService.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                                    <span className="text-green-500 mr-2 font-bold">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 border-t border-gray-100 flex justify-end">
                                    <button className="bg-primary-red text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg transform active:scale-95 w-full md:w-auto text-center">
                                        Select Your Car
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slideUp 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default CarClutchWork;
