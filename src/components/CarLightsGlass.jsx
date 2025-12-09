import React, { useEffect, useState } from 'react';

const CarLightsGlass = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Placeholder images used due to generation limits
    const services = [
        {
            id: 'side-mirror',
            title: "Side Mirror Replacement",
            price: "₹ 99.00",
            time: "1 Hour(s) Taken",
            image: "/service_side_mirror.png",
            features: [
                "Broken or Cracked Side Mirror",
                "Free Pick-Up & Drop",
                "Opening and Fitting of Side Mirror",
                "Labor Included",
                "Electrical Connections Reconnection",
                "Functionality Testing",
                "Adjust Alignment"
            ]
        },
        {
            id: 'door-glass',
            title: "Door Glass Replacement",
            price: "₹ 349.00",
            time: "2 Hour(s) Taken",
            image: "/service_side_mirror.png", // Using similar glass image
            features: [
                "Crack in Door Glass",
                "Free Pick-Up & Drop",
                "Opening and Fitting of Door Glass",
                "Labor Included",
                "Electrical Connections",
                "New Glass Installation",
                "Weatherstripping Installation"
            ]
        },
        {
            id: 'rear-windshield',
            title: "Rear windshield Replacement",
            price: "₹ 999.00",
            time: "3 Hour(s) Taken",
            image: "/service_side_mirror.png",
            features: [
                "Cracked or Damaged Windshield",
                "Free Pick-Up & Drop",
                "Opening and Fitting of Windshield",
                "Labor Included",
                "Sealant Application",
                "Cleaning and Detailing",
                "Functional Testing"
            ]
        },
        {
            id: 'front-windshield',
            title: "Front Windshield Replacement",
            price: "₹ 999.00",
            time: "3 Hour(s) Taken",
            image: "/service_side_mirror.png",
            features: [
                "Cracked or Damaged Windshield",
                "Free Pick-Up & Drop",
                "Opening and Fitting of Windshield",
                "Labor Included",
                "Alignment Verification",
                "Trim and Clean",
                "Sealing Windshield edges"
            ]
        },
        {
            id: 'fog-light',
            title: "Fog light Replacement",
            price: "₹ 249.00",
            time: "1 Hour(s) Taken",
            image: "/service_primary.png", // Placeholder for lights
            features: [
                "Broken or Cracked Fog Light",
                "Free Pick-Up & Drop",
                "Opening and Fitting of Fog Light",
                "Labor Included",
                "New Fog Light Installation",
                "Electrical Connection",
                "Cleaning Mounting Area"
            ]
        },
        {
            id: 'rear-taillight',
            title: "Rear Taillight Replacement",
            price: "₹ 149.00",
            time: "1 Hour(s) Taken",
            image: "/service_primary.png",
            features: [
                "Broken or Cracked Headlight/Taillight",
                "Free Pick-Up & Drop",
                "Opening and Fitting of Headlight",
                "Labor Included",
                "Electrical Connection",
                "Weatherstripping",
                "Alignment Adjustment"
            ]
        },
        {
            id: 'front-headlight',
            title: "Front Headlight Replacement",
            price: "₹ 249.00",
            time: "1 Hour(s) Taken",
            image: "/service_primary.png",
            features: [
                "Broken or Cracked Headlight",
                "Free Pick-Up & Drop",
                "Opening and Fitting of Headlight",
                "Labor Included",
                "Installing and Testing the New Bulb",
                "Headlight Alignment",
                "Cleaning Area"
            ]
        }
    ];

    const [activeId, setActiveId] = useState(services[0].id);

    // Scroll spy effect
    useEffect(() => {
        const handleScroll = () => {
            const serviceElements = services.map(s => document.getElementById(s.id));

            for (const el of serviceElements) {
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // If the top of the element is within the viewport (top third)
                    if (rect.top >= 0 && rect.top <= window.innerHeight * 0.4) {
                        setActiveId(el.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [services]);

    const activeService = services.find(s => s.id === activeId) || services[0];

    return (
        <div className="bg-primary-bg min-h-screen">
            {/* Split Screen Layout */}
            <div className="flex flex-col lg:flex-row">

                {/* Left Side - Sticky Visuals (40% width on Desktop) */}
                <div className="lg:w-2/5 h-screen sticky top-0 bg-secondary-bg hidden lg:flex flex-col justify-center items-center p-10 overflow-hidden">
                    {/* Dynamic Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-bg to-primary-bg opacity-90"></div>
                    <div className="absolute w-96 h-96 bg-primary-red blur-[100px] opacity-20 rounded-full top-0 left-0"></div>

                    {/* Active Service Content */}
                    <div key={activeId} className="relative z-10 w-full max-w-md animate-fade-in-slow">
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 mb-8 group">
                            <img
                                src={activeService.image}
                                alt={activeService.title}
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-sm font-bold uppercase tracking-widest text-soft-highlight mb-1">Service Details</p>
                                <p className="text-xl font-bold">{activeService.time}</p>
                            </div>
                        </div>

                        <div className="text-center text-white">
                            <h2 className="text-3xl font-heading mb-4 leading-tight">{activeService.title}</h2>
                            <p className="text-5xl font-extrabold text-soft-highlight mb-6">{activeService.price}</p>
                            <button className="bg-clean-white text-primary-bg px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-soft-highlight transition-colors shadow-lg shadow-yellow-500/20">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Scrollable Content (60% width on Desktop) */}
                <div className="lg:w-3/5 min-h-screen bg-primary-bg">
                    <div className="p-8 md:p-16 max-w-3xl mx-auto">
                        {/* Mobile Header */}
                        <div className="lg:hidden text-center mb-12">
                            <h1 className="text-4xl font-heading text-primary-navy uppercase mb-4">Lights & Glass</h1>
                            <p className="text-gray-600">Premium replacement services for your car's essential visibility components.</p>
                        </div>

                        <div className="hidden lg:block mb-16">
                            <p className="text-soft-highlight font-bold tracking-wider mb-2 uppercase">Visibility Essentials</p>
                            <h1 className="text-5xl font-heading text-clean-white uppercase mb-6">Car Lights & Glass Work</h1>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                Ensure clear vision and safety with our top-tier glass replacement and lighting solutions.
                                Scroll down to explore our services.
                            </p>
                            <div className="w-20 h-1 bg-soft-highlight mt-8"></div>
                        </div>

                        <div className="space-y-24 pb-24">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    className={`scroll-mt-32 transition-opacity duration-500 ${activeId === service.id ? 'opacity-100 lg:scale-105' : 'opacity-60 lg:opacity-40'}`}
                                    onClick={() => setActiveId(service.id)} // Click to activate on mobile/desktop
                                >
                                    {/* Mobile Image (Visible only on small screens) */}
                                    <div className="lg:hidden mb-6 rounded-2xl overflow-hidden shadow-lg h-60 relative">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 left-0 bg-secondary-bg text-clean-white px-4 py-1 rounded-tr-lg font-bold text-sm">
                                            {service.time}
                                        </div>
                                    </div>

                                    <div className="bg-secondary-bg p-8 rounded-3xl shadow-xl border border-white/10 hover:shadow-2xl transition-shadow relative overflow-hidden">
                                        {/* Decorative Number */}
                                        <div className="absolute top-0 right-0 p-6 opacity-5 font-black text-8xl text-primary-navy select-none">
                                            {services.indexOf(service) + 1}
                                        </div>

                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <h3 className="text-2xl md:text-3xl font-bold text-clean-white font-heading pr-8">{service.title}</h3>
                                                <div className="text-2xl font-bold text-soft-highlight">{service.price}</div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start">
                                                        <div className="w-5 h-5 rounded-full bg-green-100/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                                            <span className="text-green-400 text-xs">✓</span>
                                                        </div>
                                                        <span className="text-text-secondary text-sm font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button className="w-full md:w-auto px-6 py-3 border-2 border-clean-white text-clean-white font-bold rounded-xl hover:bg-clean-white hover:text-primary-bg transition-colors uppercase tracking-wider text-sm">
                                                Select Your Car
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .animate-fade-in-slow {
                    animation: fadeIn 0.8s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default CarLightsGlass;
