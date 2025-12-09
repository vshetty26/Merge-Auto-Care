import React, { useEffect } from 'react';

const CarBrakeWheelService = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const brakeWheelServices = [
        {
            title: "Complete Wheel Care",
            price: "₹ 849.00",
            time: "4 Hour(s) Taken",
            interval: "Every 5,000 to 6,000 miles",
            image: "/service_wheel_alignment.png",
            features: [
                "New Tires",
                "Wheel Balancing",
                "Wheel Alignment",
                "Alloy weight additional",
                "Steering adjustment",
                "Wheel Bearing Inspection",
                "1 more specifications"
            ],
            color: "border-l-4 border-yellow-400"
        },
        {
            title: "Wheel Balancing",
            price: "₹ 399.00",
            time: "2 Hour(s) Taken",
            interval: "Every 5,000 to 6,000 miles",
            image: "/service_wheel_alignment.png",
            features: [
                "New Tires",
                "Wheel Balancing",
                "Steering adjustment",
                "Precision Weight Adjustment",
                "Reduced Steering Vibrations",
                "Dynamic Balancing",
                "1 more specifications"
            ],
            color: "border-l-4 border-blue-400"
        },
        {
            title: "Wheel Alignment",
            price: "₹ 399.00",
            time: "2 Hour(s) Taken",
            interval: "Every 6 months",
            image: "/service_wheel_alignment.png",
            features: [
                "Car Pulling to One Side",
                "Steering Wheel Off-Center",
                "Uneven Tread Wear",
                "Wheel Alignment",
                "Steering adjustment",
                "Caster Adjustment",
                "1 more specifications"
            ],
            color: "border-l-4 border-red-500"
        },
        {
            title: "Tyre Rotation",
            price: "₹ 199.00",
            time: "2 Hour(s) Taken",
            interval: "Every 3,000 to 5,000 miles",
            image: "/service_tyre_rotation.png",
            features: [
                "Free Pick-Up & Drop",
                "All 4 Tyre Rotation",
                "Consider wheel alignment",
                "Enhances handling and safety",
                "Customized Rotation Patterns",
                "Even Load Distribution",
                "1 more specifications"
            ],
            color: "border-l-4 border-green-500"
        },
        {
            title: "Brake Drums Turning",
            price: "₹ 599.00",
            time: "4 Hour(s) Taken",
            interval: "Screeching Noise From Brakes",
            image: "/service_brake_pads.png",
            features: [
                "Reduced Braking Efficiency",
                "Brake Drums Turning",
                "Opening and Fitting Drums",
                "Refacing of Brake Drums",
                "Check Drum Mounting",
                "Check Drum Bearings",
                "1 more specifications"
            ],
            color: "border-l-4 border-purple-500"
        },
        {
            title: "Disc Turning",
            price: "₹ 599.00",
            time: "4 Hour(s) Taken",
            interval: "Vibrations on Steering Wheel",
            image: "/service_brake_pads.png",
            features: [
                "Reduced Braking Efficiency",
                "Inspection of Brake Discs",
                "Opening and Fitting Discs",
                "Resurfacing of Brake Discs",
                "Heat Damage Assessment",
                "Disc Thickness Measurement",
                "1 more specifications"
            ],
            color: "border-l-4 border-indigo-500"
        },
        {
            title: "Rear Brake Shoes Replacement",
            price: "₹ 299.00",
            time: "3 Hour(s) Taken",
            interval: "Every 25,000 to 65,000 miles",
            image: "/service_brake_pads.png",
            features: [
                "Reduced Braking Efficiency",
                "Unusual Noise",
                "Unusual Vibrations",
                "Labor Charges Only",
                "Brake Inspection",
                "Hardware Examination",
                "1 more specifications"
            ],
            color: "border-l-4 border-pink-500"
        },
        {
            title: "Front Brake Pad Replacement",
            price: "₹ 299.00",
            time: "3 Hour(s) Taken",
            interval: "Every 25,000 to 60,000 miles",
            image: "/service_brake_pads.png",
            features: [
                "Reduced Braking Efficiency",
                "Unusual or Strange Noise",
                "Labor Charges Only",
                "Brake Inspection",
                "Caliper Piston Inspection",
                "Rotor Inspection",
                "1 more specifications"
            ],
            color: "border-l-4 border-orange-500"
        },
        {
            title: "Front Brake Disc Replacement",
            price: "₹ 299.00",
            time: "5 Hour(s) Taken",
            interval: "Reduced Braking Efficiency",
            image: "/service_brake_pads.png",
            features: [
                "Unusual or Strange Noise",
                "Labor Charges Only",
                "Brake Inspection",
                "Caliper Inspection",
                "Hardware Replacement",
                "Cleaning and Preparation",
                "1 more specifications"
            ],
            color: "border-l-4 border-teal-500"
        }
    ];

    return (
        <div className="bg-primary-bg min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-soft-highlight font-bold tracking-wider mb-2 uppercase animate-fade-in-up">Car Service</p>
                    <h1 className="text-5xl md:text-6xl font-heading text-clean-white uppercase mb-6 animate-fade-in-up delay-100">Car Brake & Wheel Maintenance</h1>
                    <p className="text-text-secondary max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Expert solutions for your wheels and brakes to ensure a safe and smooth ride.
                    </p>
                </div>

                {/* Horizontal Card Layout */}
                <div className="space-y-8">
                    {brakeWheelServices.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row bg-secondary-bg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/10 group ${service.color}`}
                        >
                            {/* Image Section (Left 30%) */}
                            <div className="w-full md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary-bg bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold shadow-md">
                                    {service.interval}
                                </div>
                            </div>

                            {/* Content Section (Right 70%) */}
                            <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between relative">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-clean-white font-heading uppercase group-hover:text-soft-highlight transition-colors">{service.title}</h3>
                                        <div className="flex items-center text-sm text-text-secondary mt-1">
                                            <span className="mr-2">⏱️</span> {service.time}
                                        </div>
                                    </div>
                                    <div className="text-3xl font-extrabold text-clean-white font-heading">{service.price}</div>
                                </div>

                                <hr className="border-white/10 mb-4" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-text-secondary">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 flex-shrink-0 group-hover:bg-primary-red transition-colors"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-end">
                                    <button className="bg-clean-white text-primary-bg px-8 py-3 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors shadow-md transform active:scale-95">
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

export default CarBrakeWheelService;
