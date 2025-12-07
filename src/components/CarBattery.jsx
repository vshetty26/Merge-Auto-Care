import React, { useState, useEffect } from 'react';

const CarBattery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 'replacement',
            title: "Battery Replacement",
            time: "4 Hour(s) Taken",
            price: "Price on Inspection", // "N/A" interpreted as On Inspection/Contact
            image: "/battery_service.png",
            features: [
                "Car Does Not Start",
                "Electrical System Failures",
                "Available at Doorstep",
                "Secure Removal & Fitment",
                "Leak & Corrosion Check",
                "Electronics Reset",
                "Charging System Inspection"
            ]
        },
        {
            id: 'charging',
            title: "Battery Charging",
            time: "24 Hour(s) Taken",
            price: "Price on Inspection",
            image: "/battery_service.png",
            features: [
                "Car Does Not Start",
                "Deep Discharge Recovery",
                "Available at Doorstep",
                "Safety Precautions",
                "Cleanliness Maintenance",
                "Charger Voltage Monitoring",
                "Temperature Monitoring"
            ]
        }
    ];

    const [activeService, setActiveService] = useState('replacement');

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 md:p-10 font-sans overflow-hidden relative">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[100px]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
            </div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-20">

                {/* Visual: The CSS Battery */}
                <div className="w-full md:w-1/2 flex justify-center perspective-1000">
                    <div className="relative w-72 h-80 md:w-96 md:h-[450px] transition-transform duration-500 hover:rotate-y-6">
                        {/* Terminals */}
                        <div className="absolute -top-8 left-10 w-16 h-12 bg-gray-400 rounded-t-lg border-b-4 border-gray-500 shadow-xl z-0">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full shadow-inner flex items-center justify-center font-black text-gray-600 text-xl">-</div>
                        </div>
                        <div className="absolute -top-8 right-10 w-16 h-12 bg-red-600 rounded-t-lg border-b-4 border-red-800 shadow-xl z-0">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full shadow-inner flex items-center justify-center font-black text-white text-xl">+</div>
                        </div>

                        {/* Main Body */}
                        <div className="w-full h-full bg-gradient-to-br from-black to-gray-800 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-gray-700 relative overflow-hidden flex flex-col">
                            {/* Branding Strip */}
                            <div className="h-24 bg-primary-red flex items-center justify-between px-6 shadow-md relative z-10">
                                <div className="font-black text-white text-3xl italic tracking-tighter">POWER<span className="text-black">CORE</span></div>
                                <div className="text-xs font-bold text-white/80 border border-white/50 px-2 py-1 rounded">12V 60Ah</div>
                            </div>

                            {/* Inner Selection Area */}
                            <div className="flex-1 p-6 relative">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-50"></div>

                                <div className="relative z-10 flex flex-col gap-4 h-full justify-center">
                                    {services.map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() => setActiveService(service.id)}
                                            className={`
                                                group relative overflow-hidden rounded-lg p-4 border-2 transition-all duration-300 text-left
                                                ${activeService === service.id
                                                    ? 'bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                                                    : 'bg-white/5 border-gray-700 hover:border-gray-500'}
                                            `}
                                        >
                                            <div className="flex justify-between items-center mb-1">
                                                <h3 className={`font-bold text-lg ${activeService === service.id ? 'text-blue-400' : 'text-gray-300'}`}>{service.title}</h3>
                                                {activeService === service.id && <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></span>}
                                            </div>
                                            <div className="text-xs text-gray-500 font-mono">{service.time}</div>
                                        </button>
                                    ))}
                                </div>

                                {/* Charge Level Indicator */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Charge Status</div>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-8 bg-green-500 rounded-sm shadow-[0_0_10px_#22c55e]"></div>
                                        <div className="w-3 h-8 bg-green-500 rounded-sm shadow-[0_0_10px_#22c55e]"></div>
                                        <div className="w-3 h-8 bg-green-500 rounded-sm shadow-[0_0_10px_#22c55e]"></div>
                                        <div className="w-3 h-8 bg-gray-700 rounded-sm animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reflections/Gloss */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 left-4 w-2 h-full bg-white/5 blur-sm pointer-events-none"></div>
                    </div>
                </div>

                {/* Content Panel: The "Energy Display" */}
                <div className="w-full md:w-1/2">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`transition-all duration-500 ${activeService === service.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 hidden'}`}
                        >
                            {/* Service Image */}
                            <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 border border-gray-700 shadow-2xl relative">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight font-heading">
                                {service.title}
                            </h2>
                            <div className="h-1 w-24 bg-blue-500 mb-8 shadow-[0_0_15px_#3b82f6]"></div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Time Required</div>
                                        <div className="text-white text-xl font-bold">{service.time}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Service Cost</div>
                                        <div className="text-blue-400 text-2xl font-black">{service.price}</div>
                                    </div>
                                </div>

                                <h3 className="text-gray-300 font-bold mb-4 uppercase text-sm border-b border-gray-700 pb-2">Technical Specifications</h3>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-300">
                                            <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs mr-3 border border-blue-500/50">⚡</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black uppercase tracking-widest rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                                    Book {service.title.split(' ')[1]}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .rotate-y-6 {
                    transform: rotateY(6deg);
                }
            `}</style>
        </div>
    );
};

export default CarBattery;
