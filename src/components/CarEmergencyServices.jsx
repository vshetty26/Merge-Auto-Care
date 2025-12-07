import React, { useEffect, useState } from 'react';

const CarEmergencyServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Battery jump start",
            price: "₹ 499.00",
            time: "4 Hour(s)",
            note: "Doorstep Service Available",
            features: [
                "After Jump-start keep vehicle ON at least 3 hours",
                "Car Battery Inspection",
                "Car Battery Jump-start",
                "Safety Precautions",
                "Assessment of Battery Condition"
            ],
            icon: "⚡",
            image: "/emergency_battery.png"
        },
        {
            title: "Wheel lift towing ( 10 Kms )",
            price: "₹ 1199.00",
            time: "3 Hour(s)",
            note: "Doorstep Service Available",
            features: [
                "For Upto 10 Kms",
                "Wheel Lift Towing",
                "Pre-Tow Inspection",
                "Check Towing Equipment",
                "Secure Vehicle",
                "Wheel Alignment"
            ],
            icon: "🚜",
            image: "/emergency_tow_wheel.png"
        },
        {
            title: "Flat Bed Towing",
            price: "₹ 3499.00",
            time: "3 Hour(s)",
            note: "Door-Step Service Available",
            features: [
                "Upto 10 Km",
                "Flat-Belt Towing",
                "Safety Inspection",
                "Secure Straps",
                "Proper Alignment",
                "Inspect Tow Points"
            ],
            icon: "🚛",
            image: "/emergency_tow_flatbed.png"
        }
    ];

    const [hoveredService, setHoveredService] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative overflow-hidden">

            {/* Map-like Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/map.png")',
                    backgroundSize: 'cover'
                }}>
            </div>

            {/* Soft decorative blur */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm mb-4 border border-gray-100">
                        <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse"></span>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Rapid Response Unit</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        Car Emergency <span className="text-red-600">Services</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Stuck on the road? Our dedicated emergency dispatch team is ready to get you moving again.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-3xl p-0 transition-all duration-300 relative overflow-hidden group border-2 flex flex-col ${hoveredService === index ? 'border-red-500 shadow-xl shadow-red-100 transform -translate-y-2' : 'border-gray-100 shadow-lg'}`}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            {/* Service Status Indicator */}
                            <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                <span className={`w-2 h-2 rounded-full ${hoveredService === index ? 'bg-red-500 animate-ping' : 'bg-green-500'}`}></span>
                                <span className="text-xs font-bold text-gray-500 uppercase">Active</span>
                            </div>

                            {/* Image Section */}
                            <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                                {/* Icon Overlay */}
                                <div className={`absolute -bottom-6 left-8 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-colors z-10 ${hoveredService === index ? 'bg-red-600 text-white' : 'bg-white text-gray-600 border border-gray-100'}`}>
                                    {service.icon}
                                </div>
                            </div>

                            <div className="p-8 pt-10 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <div className="text-sm font-semibold text-gray-500 mb-6 flex items-center">
                                    <span className="mr-2">⏱ {service.time}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full mx-2"></span>
                                    <span>{service.note}</span>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex justify-between items-end mb-6">
                                        <div className="text-sm text-gray-400 font-bold uppercase">Estimated Cost</div>
                                        <div className="text-3xl font-black text-gray-900">{service.price}</div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {service.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-600">
                                                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${hoveredService === index ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                        {hoveredService === index ? 'Dispatch Now' : 'Details'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Assistance Banner */}
                <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
                    {/* Decorative background for banner */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent z-0"></div>

                    <div className="relative z-10 flex items-center mb-6 md:mb-0">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl mr-6 shadow-lg shadow-blue-200 animate-bounce-slow">
                            📞
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Direct Helpline</h2>
                            <p className="text-gray-500">Fastest way to get help. 24/7 Support.</p>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <a href="tel:9773994175" className="text-4xl md:text-5xl font-black text-blue-600 hover:text-blue-700 transition-colors tracking-tight">
                            9773994175
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default CarEmergencyServices;
