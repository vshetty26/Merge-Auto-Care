import React, { useState, useEffect } from 'react';

const CarSuspensionWork = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Suspension Overhaul",
            price: "₹ 1849.00",
            time: "6 Hour(s) Taken",
            warranty: "1 Month Warranty",
            recommendation: "In Case of Vibrations or Unusual Noise",
            features: ["Front Shocker", "Rear Shocker", "Shocker Mount", "Link Rod", "Complete Inspection"]
        },
        {
            title: "Tie Rod Replacement",
            price: "₹ 599.00",
            time: "6 Hour(s) Taken",
            warranty: "1 Month Warranty",
            recommendation: "In Case of Vibration in the Steering Wheel",
            features: ["Tie Rod Replacement- Labor", "Suspension Inspection", "Vehicle Stability Check", "Alignment Check"]
        },
        {
            title: "Link Rod Replacement",
            price: "₹ 399.00",
            time: "6 Hour(s) Taken",
            warranty: "1 Month Warranty",
            recommendation: "In Case of Loose Steering Wheel",
            features: ["Link Rod Replacement- Labor", "Cotter Pin Installation", "Greasing Link Rod", "Wheel Installation"]
        },
        {
            title: "Upper Arm Replacement",
            price: "₹ 449.00",
            time: "4 Hour(s) Taken",
            warranty: "1 Month Warranty",
            recommendation: "In Case of Vibration in the Steering Wheel",
            features: ["Upper Arm Replacement- Labor", "Diagnostic Testing", "Mounting Bracket Exam", "Tightening Torque"]
        },
        {
            title: "Lower Arm Replacement",
            price: "₹ 449.00",
            time: "6 Hour(s) Taken",
            warranty: "1 Month Warranty",
            recommendation: "In Case of Vibration in the Steering Wheel",
            features: ["Lower Arm Replacement- Labor", "Remove Old Arm", "Install New Arm", "Check Alignment"]
        },
        {
            title: "Steering Rack Replace",
            price: "₹ 999.00",
            time: "8 Hour(s) Taken",
            warranty: "1 Month Warranty",
            recommendation: "In Case of Hard Steering",
            features: ["Steering Rack Replacement", "System Assessment", "Diagnostic Testing", "Lubrication"]
        },
        {
            title: "EPS Replacement",
            price: "₹ 349.00",
            time: "6 Hour(s) Taken",
            warranty: "1 Month Warranty",
            recommendation: "In Case of Hard Steering",
            features: ["EPS Module Replacement", "Initial Inspection", "Fluid Drainage", "Wiring Connection"]
        },
        {
            title: "Rear Shock Replacement",
            price: "₹ 499.00",
            time: "6 Hour(s) Taken",
            warranty: "1 Month Warranty",
            recommendation: "In Case of Noisy Suspension",
            features: ["Rear Shock Replacement", "Suspension Inspection", "New Installation", "Check Alignment"]
        },
        {
            title: "Front Shock Replacement",
            price: "₹ 749.00",
            time: "6 Hour(s) Taken",
            warranty: "1 Month Warranty",
            recommendation: "In Case of Noisy Suspension",
            features: ["Front Shock Replacement", "Inspection", "New Installation", "Tightening Hardware"]
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHoveringCenter, setIsHoveringCenter] = useState(false);

    // Calculate position for nodes in a circle
    const getPosition = (index, total, radius) => {
        const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return { x, y };
    };

    const activeService = services[activeIndex];
    // radius for node circle
    const radius = 260; // wide circle

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-bg via-secondary-bg to-primary-bg text-clean-white relative overflow-hidden flex flex-col items-center justify-center py-20 px-4">

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute w-[800px] h-[800px] bg-soft-highlight/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="text-center mb-10 z-10 relative">
                <h1 className="text-4xl md:text-5xl font-heading text-clean-white uppercase mb-2 drop-shadow-lg">Suspension & Steering</h1>
                <p className="text-text-secondary">Hover over the nodes to explore services</p>
            </div>

            <div className="relative w-full max-w-[800px] h-[600px] md:h-[800px] flex items-center justify-center">

                {/* Central Tyre Image */}
                <div
                    className="relative w-64 h-64 md:w-80 md:h-80 z-20 group cursor-pointer"
                    onMouseEnter={() => setIsHoveringCenter(true)}
                    onMouseLeave={() => setIsHoveringCenter(false)}
                >
                    <div className={`absolute inset-0 bg-primary-yellow/20 rounded-full blur-xl transition-all duration-500 ${isHoveringCenter ? 'scale-110 opacity-50' : 'scale-100 opacity-20'}`}></div>
                    <img
                        src="/suspension_tyre.png"
                        alt="Tyre"
                        className={`w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 ${isHoveringCenter ? 'rotate-180 scale-105' : ''}`}
                    />

                    {/* Inner Content Display (Overlaid on Tyre or Center) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center bg-secondary-bg/60 backdrop-blur-sm p-4 rounded-full w-48 h-48 flex flex-col items-center justify-center border border-white/10 shadow-2xl">
                            <h3 className="text-soft-highlight font-bold text-sm tracking-wider uppercase mb-1">Current Selection</h3>
                            <p className="font-heading text-xl md:text-2xl leading-tight mb-2 text-clean-white">{activeService.title}</p>
                            <p className="text-clean-white font-extrabold text-2xl">{activeService.price}</p>
                        </div>
                    </div>
                </div>

                {/* Orbiting Nodes */}
                <div className="absolute inset-0 hidden md:block pointer-events-none">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {services.map((service, index) => {
                            const { x, y } = getPosition(index, services.length, radius);
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={index}
                                    className="absolute pointer-events-auto"
                                    style={{
                                        transform: `translate(${x}px, ${y}px)`,
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <div className={`
                                        flex flex-col items-center justify-center w-28 h-28 rounded-full border-2 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-lg
                                        ${isActive ? 'bg-soft-highlight border-clean-white scale-110 shadow-soft-highlight/50 text-primary-bg font-bold' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 text-text-secondary'}
                                     `}>
                                        <span className="text-2xl mb-1">🔧</span>
                                        <span className="text-[10px] uppercase font-bold text-center px-2 leading-tight">
                                            {service.title.split(" ").slice(0, 2).join(" ")}
                                        </span>
                                    </div>
                                    {/* Connector Line to Center (Optional visual) */}
                                    <div
                                        className={`absolute top-1/2 left-1/2 w-[260px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10 origin-left transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                        style={{
                                            transform: `rotate(${Math.atan2(y, x) * (180 / Math.PI) + 180}deg)`,
                                            width: `${radius}px`,
                                            left: `${-x}px`, /* This logic is tricky, simplifying visually instead */
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content Cards for Mobile / Detail Below on Desktop */}
            <div key={activeService.title} className="w-full max-w-4xl mx-auto mt-8 md:-mt-10 relative z-30 animate-fade-in-up">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-10 text-left shadow-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6 border-b border-white/10 pb-6">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-2 text-clean-white">{activeService.title}</h2>
                            <p className="text-text-secondary italic text-sm">{activeService.recommendation}</p>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                            <div className="text-4xl font-extrabold text-soft-highlight">{activeService.price}</div>
                            <div className="text-sm text-text-secondary mt-1">
                                {activeService.time} | {activeService.warranty}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {activeService.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-text-secondary">
                                <span className="w-6 h-6 rounded-full bg-soft-highlight/20 text-soft-highlight flex items-center justify-center text-xs mr-3">✓</span>
                                {feature}
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-4 rounded-xl font-bold uppercase tracking-widest bg-clean-white text-primary-bg hover:bg-soft-highlight hover:text-white transition-all shadow-lg">
                        Select Your Car
                    </button>
                </div>

                {/* Mobile Navigation Dots */}
                <div className="md:hidden flex justify-center space-x-2 mt-6">
                    {services.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === activeIndex ? 'bg-soft-highlight' : 'bg-white/20'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarSuspensionWork;
