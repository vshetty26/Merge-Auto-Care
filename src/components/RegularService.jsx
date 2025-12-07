import React, { useEffect } from 'react';

const RegularService = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Primary Service",
            price: "₹ 2699.00",
            time: "3 Hour(s) Taken",
            warranty: "Warranty 1000 kms or 1 month",
            frequency: "After every 5,000 kms or 3 Months (Recommended)",
            image: "/service_primary.png",
            features: [
                "Engine Oil Replacement",
                "Oil Filter Replacement",
                "Air Filter Cleaning",
                "Spark Plug Cleaning",
                "Coolant Top Up upto (200 ml)",
                "4 more specifications"
            ],
            color: "border-primary-yellow",
            btnColor: "bg-primary-yellow text-primary-navy"
        },
        {
            title: "Standard Service",
            price: "₹ 3299.00",
            time: "6 Hour(s) Taken",
            warranty: "Warranty 1000 kms or 1 month",
            frequency: "After every 10,000 kms or 3 Months (Recommended)",
            recommended: true,
            image: "/service_standard.png",
            features: [
                "Engine Oil Replacement",
                "Oil Filter Replacement",
                "Air Filter Replacement",
                "Brake and Clutch Fluid Top Up upto (50 ml)",
                "Wiper Fluid Top Up",
                "9 more specifications"
            ],
            color: "border-primary-red",
            btnColor: "bg-primary-red text-white"
        },
        {
            title: "Comprehensive Service",
            price: "₹ 4799.00",
            time: "8 Hour(s) Taken",
            warranty: "Warranty 1000 kms or 1 month",
            frequency: "After every 20,000 kms or 12 Months (Recommended)",
            image: "/service_comprehensive.png",
            features: [
                "Engine Oil Replacement",
                "Air Filter Replacement",
                "Oil Filter Replacement",
                "Ac Filter Replacement",
                "Fuel Filter Check",
                "9 more specifications"
            ],
            color: "border-primary-navy",
            btnColor: "bg-primary-navy text-white"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-primary-red font-bold tracking-wider mb-2 uppercase animate-fade-in-up">Scheduled Packages</p>
                    <h1 className="text-5xl md:text-6xl font-heading text-primary-navy uppercase mb-6 animate-fade-in-up delay-100">Regular Car Service</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Choose from our range of scheduled service packages designed to keep your car running smoothly and efficiently.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-lg border-t-8 ${service.color} overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex flex-col group`}
                        >
                            {service.recommended && (
                                <div className="absolute top-0 right-0 bg-primary-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10 shadow-md">
                                    Recommended
                                </div>
                            )}

                            {/* Image Section with Overlay Effect */}
                            <div className="h-48 overflow-hidden relative">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-8 flex-col flex flex-grow">
                                <h3 className="text-2xl font-bold text-primary-navy mb-2 font-heading tracking-wide group-hover:text-primary-red transition-colors">{service.title}</h3>
                                <div className="text-4xl font-extrabold text-primary-navy mb-6">{service.price}</div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <div className="flex items-start text-sm text-gray-600">
                                        <span className="mr-2 text-lg">⏱️</span> <span className="pt-0.5">{service.time}</span>
                                    </div>
                                    <div className="flex items-start text-sm text-gray-600">
                                        <span className="mr-2 text-lg">🛡️</span> <span className="pt-0.5">{service.warranty}</span>
                                    </div>
                                    <div className="flex items-start text-sm text-gray-600">
                                        <span className="mr-2 text-lg">📅</span> <span className="pt-0.5">{service.frequency}</span>
                                    </div>

                                    <hr className="border-gray-100 my-4" />

                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-700 transition-transform duration-300 hover:translate-x-1">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 ${service.btnColor} shadow-md hover:shadow-lg hover:ring-2 hover:ring-offset-2 ${service.color.replace('border-', 'ring-')}`}>
                                    Select Your Car
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RegularService;
