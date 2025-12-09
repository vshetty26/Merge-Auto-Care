import React, { useEffect } from 'react';

const CarDentingPainting = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Full Body Paint",
            price: "₹ 28800.00",
            time: "7 Day(s) Taken",
            warranty: "2 Year Warranty on Paint",
            image: "/service_full_body_paint.png",
            features: ["Removal of minor Dent & scratches", "Grade A Primer", "High quality 2K Painting", "Clear Coat Application", "Rubbing and Polishing"],
            class: "col-span-1 md:col-span-2 lg:col-span-3" // Highlighted item
        },
        { title: "Right Fender Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Right Running Board Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Left Running Board Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Right Quarter Panel Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Left Quarter Panel Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Right Front Door Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Right Rear Door Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Left Rear Door Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Left Front Door Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Left Fender Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Alloy Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_alloy_paint.png" },
        { title: "Boot Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Bonnet Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_panel_paint.png" },
        { title: "Rear Bumper Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_bumper_paint.png" },
        { title: "Front Bumper Paint", price: "₹ 2250.00", time: "2 Day(s) Taken", warranty: "2 Year Warranty", image: "/service_bumper_paint.png" },
    ];

    // Common features for standard panels if not specified
    const defaultFeatures = ["Removal of minor Dent & scratches", "Grade A Primer", "High quality 2K Painting", "Clear Coat Application", "Rubbing and Polishing"];

    return (
        <div className="bg-primary-bg min-h-screen py-20 px-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-soft-highlight opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-accent opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-soft-highlight font-bold tracking-wider mb-2 uppercase animate-fade-in-up">Restoration & Care</p>
                    <h1 className="text-5xl md:text-6xl font-heading text-clean-white uppercase mb-6 animate-fade-in-up delay-100">Car Denting & Painting</h1>
                    <p className="text-text-secondary max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Restore your car's showroom shine with our premium painting and dent removal services.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative ${service.class ? service.class : ''}`}
                        >
                            {/* Card Background (The "Card" behind the image) */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500 border border-white/10"></div>

                            {/* Main Content Card */}
                            <div className="relative bg-secondary-bg rounded-3xl p-6 h-full flex flex-col border border-white/10 hover:border-soft-highlight/50 transition-colors duration-300">

                                {/* Image Container (Overlapping) */}
                                <div className="relative -mt-16 mb-6 mx-auto w-48 h-48">
                                    <div className="absolute inset-0 bg-soft-highlight rounded-2xl transform rotate-6 opacity-80 group-hover:rotate-12 transition-transform duration-500"></div>
                                    <div className="absolute inset-0 bg-primary-bg rounded-2xl transform -rotate-3 overflow-hidden border-4 border-secondary-bg group-hover:rotate-0 transition-transform duration-500">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="text-center flex-grow">
                                    <h3 className="text-2xl font-bold text-clean-white mb-2 font-heading tracking-wide group-hover:text-soft-highlight transition-colors">{service.title}</h3>
                                    <div className="text-3xl font-extrabold text-clean-white mb-4">{service.price}</div>

                                    <div className="space-y-2 mb-6 text-sm text-text-secondary">
                                        <p>⏱️ {service.time}</p>
                                        <p>🛡️ {service.warranty}</p>
                                    </div>

                                    <div className="text-left bg-black/20 p-4 rounded-xl mb-6">
                                        <ul className="space-y-2">
                                            {(service.features || defaultFeatures).slice(0, 3).map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-xs text-text-secondary">
                                                    <span className="text-soft-highlight mr-2">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                            {(service.features || defaultFeatures).length > 3 && (
                                                <li className="text-xs text-gray-500 italic pl-5">
                                                    + {(service.features || defaultFeatures).length - 3} more
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <button className="w-full py-3 rounded-xl font-bold uppercase tracking-widest bg-clean-white text-primary-bg hover:bg-soft-highlight transition-colors shadow-lg transform active:scale-95">
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

export default CarDentingPainting;
