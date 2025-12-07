import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="w-full flex flex-col font-condensed sticky top-0 z-50">
            {/* Top Yellow Bar */}
            <div className="bg-primary-yellow w-full py-2 px-4 text-center border-b-2 border-black overflow-hidden relative z-50">
                <div className="text-primary-navy font-bold text-xs md:text-sm tracking-wide flex justify-center space-x-4 uppercase animate-marquee md:animate-none whitespace-nowrap">
                    <span>📞 Call For Book: 9810446692</span>
                    <span className="hidden md:inline">|</span>
                    <span>✉️ support@autocarrepair.in</span>
                    <span className="hidden md:inline">|</span>
                    <span>📍 Unit-1 Plot No 29 & 30, Sector 34, Gurugram</span>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="w-full bg-white relative z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center">
                            <img src="/acr_logo.png" alt="ACR Logo" className="h-16 md:h-20 object-contain" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-0 items-center">
                            <div className="flex bg-primary-yellow px-6 py-2 rounded-l-full transform skew-x-12 border-2 border-primary-navy">
                                <div className="flex space-x-5 transform -skew-x-12 items-center">
                                    <Link to="/" className="text-primary-navy font-bold hover:text-primary-red text-sm uppercase">Home</Link>
                                    <div className="relative group">
                                        <a href="#" className="text-primary-navy font-bold hover:text-primary-red text-sm uppercase py-4 inline-block flex items-center">
                                            Services <span className="ml-1 text-[10px] group-hover:rotate-180 transition-transform">▼</span>
                                        </a>
                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-[#0072ce] border-4 border-primary-navy rounded-xl overflow-hidden hidden group-hover:block z-50 text-center shadow-2xl pt-2 pb-2">
                                            <div className="flex flex-col">
                                                {[
                                                    { name: "Regular Car Service", path: "/services/regular" },
                                                    { name: "Car AC Service & Repair", path: "/services/ac-repair" },
                                                    { name: "Car Brake & Wheel Maintenance", path: "/services/brakes-wheels" },
                                                    { name: "Car Denting & Painting", path: "/services/denting-painting" },
                                                    { name: "Car Care & Detailing", path: "/services/detailing" },
                                                    { name: "Car Lights and Glass Work", path: "/services/lights-glass" },
                                                    { name: "Car Clutch Work", path: "/services/clutch" },
                                                    { name: "Car Suspension Work", path: "/services/suspension" },
                                                    { name: "Car Repairs & Inspection", path: "/services/repairs-inspection" },
                                                    { name: "Car Insurance Claim", path: "/services/insurance-claim" },
                                                    { name: "Car Emergency Services", path: "/services/emergency" },
                                                    { name: "Car Battery", path: "/services/battery" }
                                                ].map((service, index) => (
                                                    <Link key={index} to={service.path} className="px-4 py-2 text-white font-heading tracking-wider hover:text-primary-yellow text-sm font-bold uppercase transition-colors block">
                                                        {service.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="text-primary-navy font-bold hover:text-primary-red text-sm uppercase">Service Center</a>
                                    <a href="#" className="text-primary-navy font-bold hover:text-primary-red text-sm uppercase">Offers</a>
                                    <div className="relative group">
                                        <button className="text-primary-navy font-bold hover:text-primary-red text-sm uppercase flex items-center">
                                            More <span className="ml-1 text-[10px]">▼</span>
                                        </button>
                                    </div>
                                    <a href="#" className="text-primary-navy font-bold hover:text-primary-red text-sm uppercase">Detailing</a>
                                    <a href="#" className="bg-primary-red text-white px-3 py-1 rounded font-bold hover:bg-white hover:text-primary-red border border-primary-red hover:border-white transition-colors text-sm uppercase">
                                        Get Appointment
                                    </a>
                                </div>
                            </div>
                            {/* Mascot Circle */}
                            <div className="ml-[-20px] z-10 w-20 h-20 bg-white rounded-full border-4 border-primary-navy flex items-center justify-center overflow-hidden shadow-lg transform translate-y-2">
                                <img src="/mascot.png" alt="Mascot" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
