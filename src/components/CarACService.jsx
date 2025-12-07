import React, { useEffect } from 'react';

const CarACService = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const acServices = [
        {
            title: "Periodic AC Service",
            price: "₹ 1799.00",
            time: "4 Hour(s) Taken",
            warranty: "Warranty 500 kms or 1 month",
            frequency: "After every 5,000 kms or 3 Months (Recommended)",
            image: "/service_ac_periodic.png",
            features: [
                "AC Inspection",
                "AC Gas Top Up (400gms)",
                "AC Filter Cleaning",
                "AC Vent Cleaning",
                "Condenser Cleaning"
            ],
            color: "from-blue-400 to-blue-600",
            shadow: "shadow-blue-200"
        },
        {
            title: "Full AC service",
            price: "₹ 3199.00",
            time: "8 Hour(s) Taken",
            recommended: true,
            warranty: "Warranty 1000 kms or 1 month",
            frequency: "After every 10,000 kms or 1 year (Recommended)",
            image: "/service_ac_full.png",
            features: [
                "AC Inspection",
                "AC Vent Cleaning",
                "Condenser Cleaning",
                "Cooling Coil Cleaning",
                "Dashboard Removing fitting",
                "3 more specifications"
            ],
            color: "from-primary-red to-red-600",
            shadow: "shadow-red-200"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-primary-red font-bold tracking-wider mb-2 uppercase animate-fade-in-up">Car Service</p>
                    <h1 className="text-5xl md:text-6xl font-heading text-primary-navy uppercase mb-6 animate-fade-in-up delay-100">Car AC Service & Repair</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Stay cool and comfortable with our expert AC repair and maintenance packages.
                    </p>
                </div>

                {/* New Animating Cards - "Hover Reveal" Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {acServices.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl ${service.shadow} transition-all duration-500 hover:shadow-2xl`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                            </div>

                            {/* Default Content (Visible initially) */}
                            <div className="absolute top-0 left-0 w-full p-8 z-10 flex justify-between items-start">
                                {service.recommended && (
                                    <span className="bg-primary-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                                        Recommended
                                    </span>
                                )}
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 z-10 transform transition-transform duration-500 group-hover:-translate-y-20">
                                <h3 className="text-3xl font-heading text-white mb-2 shadow-sm drop-shadow-md">{service.title}</h3>
                                <div className="text-4xl font-extrabold text-primary-yellow mb-2 drop-shadow-md">{service.price}</div>
                                <div className="text-white text-sm opacity-90 mb-4 flex items-center">
                                    <span className="mr-2">⏱️ {service.time}</span>
                                </div>
                            </div>

                            {/* Reveal Content (Slides up on hover) */}
                            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-md p-8 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 z-20 rounded-t-3xl">
                                <div className="flex flex-col h-full">
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">Package Details</div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-start text-xs text-gray-700">
                                            <span className="mr-2 font-bold">🛡️ Warranty:</span> {service.warranty}
                                        </div>
                                        <div className="flex items-start text-xs text-gray-700">
                                            <span className="mr-2 font-bold">📅 Frequency:</span> {service.frequency}
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-primary-navy font-medium">
                                                <span className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-br ${service.color}`}></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-3 rounded-xl font-bold uppercase tracking-widest text-white bg-gradient-to-r ${service.color} shadow-lg transform active:scale-95 transition-transform`}>
                                        Select Your Car
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarACService;
