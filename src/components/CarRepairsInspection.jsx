import React, { useState, useEffect } from 'react';

const CarRepairsInspection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { id: 'inspection', name: 'General Inspection', icon: '🔍' },
        { id: 'mechanical', name: 'Mechanical & Engine', icon: '⚙️' },
        { id: 'electrical', name: 'Electrical & Electronics', icon: '⚡' },
        { id: 'body', name: 'Body & Exterior', icon: '🚗' },
        { id: 'cooling', name: 'Cooling System', icon: '❄️' }
    ];

    const allServices = [
        // General Inspection
        { category: 'inspection', title: "Car Fluids Check", price: "₹ 499.00", time: "3 Hour(s)", check: ["Fluid Leakage", "Warning Light", "Brake Fluid", "Coolant", "Engine Oil"] },
        { category: 'inspection', title: "Complete Suspension Inspection", price: "₹ 499.00", time: "4 Hour(s)", check: ["Vibrations", "Noise", "Shocker Check", "Link Rod", "Bush Check"] },
        { category: 'inspection', title: "Insurance Claim Inspection", price: "₹ 1000.00", time: "5 Hour(s)", check: ["Real-Time Claim", "Free Pickup", "Claim Intimation", "Insurance Check"] },
        { category: 'inspection', title: "Road Trip Inspection", price: "₹ 1199.00", time: "6 Hour(s)", check: ["Full Inspection", "Alignment", "Fluid Leakage", "Report", "Suspension"] },
        { category: 'inspection', title: "Pre-Owned Car Inspection", price: "₹ 499.00", time: "4 Hour(s)", check: ["Second-Hand Check", "Valuation", "Engine Bay", "Electrical Test", "Exterior/Interior"] },
        { category: 'inspection', title: "Car Inspection", price: "₹ 499.00", time: "4 Hour(s)", check: ["Full Diagnostics", "Engine Scanning", "Exterior", "Tire", "Lights"] },
        { category: 'inspection', title: "Rat/Pest Treatment", price: "₹ 499.00", time: "2 Hour(s)", check: ["Repellent Spray", "Visual Inspection", "Clean Interior", "Seal Entry", "Trunk Check"] },

        // Mechanical & Engine
        { category: 'mechanical', title: "Engine Scanning", price: "₹ 499.00", time: "3 Hour(s)", check: ["Electrical Scanning", "Sensor Reset", "Error Codes", "Exhaust Smoke", "Check Engine Light"] },
        { category: 'mechanical', title: "Starter Motor Repair", price: "₹ 2499.00", time: "5 Hour(s)", check: ["Motor Repair", "Bench Test", "Voltage Drop", "Drive Gear", "Opening/Fitting"] },
        { category: 'mechanical', title: "Gear Box Mounting", price: "₹ 349.00", time: "5 Hour(s)", check: ["Unusual Noise", "Vibrations", "Visual Inspection", "Bolt Tightness", "Test Drive"] },
        { category: 'mechanical', title: "Engine Mounting Replacement", price: "₹ 699.00", time: "6 Hour(s)", check: ["Unusual Noise", "Vibrations", "Replacment Labor", "Safety Precautions", "Final Inspection"] },
        { category: 'mechanical', title: "V Belt Replacement", price: "₹ 649.00", time: "6 Hour(s)", check: ["Unusual Sounds", "Belt Inspection", "Tension Assessment", "Alignment Check", "Replacement Labor"] },

        // Electrical
        { category: 'electrical', title: "Horn Replacement", price: "₹ 349.00", time: "4 Hour(s)", check: ["Low Intensity", "Wire Check", "Horn Selection", "Bracket Adjust", "Bumper Opening"] },
        { category: 'electrical', title: "Faulty Electricals", price: "₹ 499.00", time: "6 Hour(s)", check: ["Malfunctioning", "Dead Battery", "Scanning", "Battery Assess", "Alternator Check"] },
        { category: 'electrical', title: "Alternator Repair", price: "₹ 2499.00", time: "6 Hour(s)", check: ["Battery Discharging", "Voltage Output", "Load Test", "Belt Inspection", "Repair Labor"] },
        { category: 'electrical', title: "Alternator New", price: "₹ 649.00", time: "3 Hour(s)", check: ["Battery Discharging", "Replacement Labor", "Compatibility", "Connector Exam", "Initial Inspection"] },

        // Body
        { category: 'body', title: "Rear Bumper Replacement", price: "₹ 249.00", time: "4 Hour(s)", check: ["Broken/Cracked", "Opening/Fitting", "Reinforcement", "Sensor Calib", "Alignment"] },
        { category: 'body', title: "Front Bumper Replacement", price: "₹ 249.00", time: "4 Hour(s)", check: ["Broken/Cracked", "parts Inspection", "Alignment Check", "Paint Match", "Replacement Labor"] },
        { category: 'body', title: "Mudflaps Replacement", price: "₹ 199.00", time: "3 Hour(s)", check: ["Damaged/Loose", "Material Quality", "Visual Inspection", "Compatibility", "Clearance"] },
        { category: 'body', title: "Silencer Coating", price: "₹ 1299.00", time: "6 Hour(s)", check: ["Anti-rust", "Inspection", "Surface Prep", "Rust Removal", "Coating Select"] },

        // Cooling
        { category: 'cooling', title: "Radiator Flush Clean", price: "₹ 999.00", time: "2 Hour(s)", check: ["Coolant Drain", "Replacement", "Leakage Check", "Flushing", "Cleaning"] },
        { category: 'cooling', title: "Radiator Replacement", price: "₹ 849.00", time: "6 Hour(s)", check: ["Leakage/Blockage", "Pressure Test", "System Inspection", "Hose Connection", "Replacement Labor"] },
        { category: 'cooling', title: "Compressor Replacement", price: "₹ 849.00", time: "8 Hour(s)", check: ["Inefficient Cooling", "Leakage", "Compatibility", "Oil Drainage", "O-ring Replace"] },
        { category: 'cooling', title: "Condensor Replacement", price: "₹ 849.00", time: "8 Hour(s)", check: ["Inefficient Cooling", "Access Inspect", "Pressure Test", "Installation", "Re-install"] },
        { category: 'cooling', title: "Cooling Coil Replacement", price: "₹ 2499.00", time: "8 Hour(s)", check: ["No Cooling", "Coolant Drain", "Pressure Relief", "Remove Old", "Refill"] },
    ];

    const [activeCategory, setActiveCategory] = useState('inspection');
    const [scannedService, setScannedService] = useState(null);

    const filteredServices = allServices.filter(s => s.category === activeCategory);

    return (
        <div className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden flex flex-col md:flex-row">

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Left Panel: Diagnostic Scanner Visual (40%) */}
            <div className="w-full md:w-2/5 p-4 md:p-8 flex flex-col items-center justify-center relative border-r border-green-900/50 bg-black/80 backdrop-blur-sm z-10">
                <div className="w-full max-w-md relative group">
                    {/* Scanner Frame */}
                    <div className="absolute inset-0 border-2 border-green-500/30 rounded-lg"></div>
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-right-2 border-green-500 border-r-2"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-right-2 border-green-500 border-r-2"></div>

                    {/* Car Image with Blueprint Filter */}
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/repair_scan_base.png"
                            alt="Diagnostic Scan"
                            className="w-full h-auto filter grayscale sepia hue-rotate-[90deg] saturate-[300%] opacity-80"
                        />
                        {/* Scanning Line Animation */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-green-400 shadow-[0_0_15px_rgba(74,222,128,1)] animate-scan"></div>
                    </div>

                    {/* Status Text */}
                    <div className="mt-4 flex justify-between text-xs uppercase tracking-widest">
                        <span>System Status: <span className="text-white animate-pulse">ONLINE</span></span>
                        <span>Scanning...</span>
                    </div>
                </div>

                {/* Category Selector */}
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`p-3 text-xs md:text-sm border border-green-500/50 rounded hover:bg-green-500/20 transition-all flex flex-col items-center gap-2 ${activeCategory === cat.id ? 'bg-green-500/20 text-white shadow-[0_0_10px_rgba(74,222,128,0.3)]' : 'text-gray-400'}`}
                        >
                            <span className="text-2xl">{cat.icon}</span>
                            <span>{cat.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Panel: Diagnostic Log (Services List) (60%) */}
            <div className="w-full md:w-3/5 p-4 md:p-8 relative z-10 overflow-y-auto max-h-screen">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-green-900 pb-4 uppercase tracking-wider">
                    <span className="text-green-500 mr-2">>>></span>
                    Diagnostic Report: {categories.find(c => c.id === activeCategory)?.name}
                </h2>

                <div className="space-y-4 pb-20">
                    {filteredServices.map((service, idx) => (
                        <div
                            key={idx}
                            className="border border-green-900 bg-green-900/5 hover:bg-green-900/10 rounded-lg p-4 transition-all group hover:border-green-500/50 relative overflow-hidden"
                            onMouseEnter={() => setScannedService(service)}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-green-300 group-hover:text-green-100">{service.title}</h3>
                                <span className="text-white font-bold bg-green-900/40 px-2 py-1 rounded text-sm">{service.price}</span>
                            </div>

                            <div className="text-xs text-gray-500 mb-3 font-semibold uppercase">
                                Est. Repair Time: {service.time}
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-mono">
                                {service.check.slice(0, 4).map((item, i) => (
                                    <div key={i} className="flex items-center">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                                        {item}
                                    </div>
                                ))}
                                {service.check.length > 4 && <div>...and more</div>}
                            </div>

                            <button className="mt-4 w-full py-2 border border-green-500/30 text-green-400 uppercase text-xs tracking-widest hover:bg-green-500 hover:text-black transition-colors">
                                Initiate Repair Protocol
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-scan {
                    animation: scan 3s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default CarRepairsInspection;
