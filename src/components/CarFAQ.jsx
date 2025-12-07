import React, { useState } from 'react';

const CarFAQ = () => {
    const [activeZone, setActiveZone] = useState(null);

    const faqs = {
        front: [
            {
                q: "How long does a car battery typically last?",
                a: "On average, a car battery lasts between 3 to 5 years. However, weather conditions, driving habits, and maintenance can affect the battery’s lifespan."
            },
            {
                q: "How can I extend the life of my car battery?",
                a: "To extend your battery’s life, keep it clean, ensure it’s securely mounted, avoid frequent short trips, and check the charging system regularly."
            }
        ],
        cabin: [
            {
                q: "What types of car emergency services do you offer?",
                a: "Our emergency services include roadside assistance, towing, jump-starts, flat tire changes, lockout assistance, and emergency fuel delivery."
            },
            {
                q: "What should I do if my car battery dies?",
                a: "If your battery dies, you can jump-start it using jumper cables and another vehicle with a fully charged car battery. If the problem persists, it may be time to replace the battery."
            }
        ],
        rear: [
            {
                q: "What are the signs that my car battery needs to be replaced?",
                a: "Common signs include slow engine cranking, dim headlights, electrical issues, and a dashboard battery warning light."
            },
            {
                q: "How do I know which battery is right for my car?",
                a: "The correct battery for your vehicle depends on factors like battery size, cold cranking amps (CCA), and reserve capacity (RC). Consult your manual!"
            }
        ]
    };

    return (
        <div className="w-full mb-20 relative">
            <h2 className="text-4xl font-heading text-primary-yellow uppercase mb-6 text-center z-20 relative">
                FAQs
            </h2>

            <div className="relative max-w-7xl mx-auto h-[500px] md:h-[700px] flex items-center justify-center -mt-10">

                {/* Car Mascot Image */}
                <div className="relative z-10 w-full transition-transform duration-500 hover:scale-105 flex justify-center">
                    <img
                        src="/mascot.png"
                        alt="ACR Mascot"
                        className="w-auto h-full max-h-[600px] object-contain drop-shadow-2xl filter brightness-110"
                    />

                    {/* Hover Zones - Invisible Overlays */}
                    {/* Front Zone */}
                    <div
                        className="absolute top-1/4 left-0 w-1/3 h-1/2 cursor-help z-20 group"
                        onMouseEnter={() => setActiveZone('front')}
                        onMouseLeave={() => setActiveZone(null)}
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-full blur-xl transition-opacity duration-300"></div>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-yellow text-primary-navy font-bold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 animate-bounce">
                            Engine & Battery
                        </div>
                    </div>

                    {/* Cabin Zone */}
                    <div
                        className="absolute top-0 left-1/3 w-1/3 h-2/3 cursor-help z-20 group"
                        onMouseEnter={() => setActiveZone('cabin')}
                        onMouseLeave={() => setActiveZone(null)}
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-full blur-xl transition-opacity duration-300"></div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary-yellow text-primary-navy font-bold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 animate-bounce">
                            Emergency & Care
                        </div>
                    </div>

                    {/* Rear Zone */}
                    <div
                        className="absolute top-1/4 right-0 w-1/3 h-1/2 cursor-help z-20 group"
                        onMouseEnter={() => setActiveZone('rear')}
                        onMouseLeave={() => setActiveZone(null)}
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-full blur-xl transition-opacity duration-300"></div>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-yellow text-primary-navy font-bold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 animate-bounce">
                            Diagnostics
                        </div>
                    </div>
                </div>

                {/* Display Panels */}
                <div className="absolute inset-0 pointer-events-none z-30">
                    {/* Front Panel (Left) */}
                    <div className={`absolute top-10 left-0 md:-left-10 w-64 md:w-80 bg-white/95 backdrop-blur-md p-6 rounded-2xl rounded-tr-none shadow-2xl border-l-4 border-primary-red transform transition-all duration-500 origin-bottom-right
                        ${activeZone === 'front' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'}`}>
                        {faqs.front.map((f, i) => (
                            <div key={i} className="mb-4 last:mb-0">
                                <h4 className="font-bold text-primary-navy text-sm mb-1">? {f.q}</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    {/* Cabin Panel (Top) */}
                    <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-80 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-t-4 border-primary-yellow transform transition-all duration-500 origin-bottom
                        ${activeZone === 'cabin' ? 'opacity-100 scale-100 -translate-y-4' : 'opacity-0 scale-90 translate-y-10'}`}>
                        {faqs.cabin.map((f, i) => (
                            <div key={i} className="mb-4 last:mb-0">
                                <h4 className="font-bold text-primary-navy text-sm mb-1">? {f.q}</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    {/* Rear Panel (Right) */}
                    <div className={`absolute top-10 right-0 md:-right-10 w-64 md:w-80 bg-white/95 backdrop-blur-md p-6 rounded-2xl rounded-tl-none shadow-2xl border-r-4 border-blue-500 transform transition-all duration-500 origin-bottom-left
                        ${activeZone === 'rear' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'}`}>
                        {faqs.rear.map((f, i) => (
                            <div key={i} className="mb-4 last:mb-0">
                                <h4 className="font-bold text-primary-navy text-sm mb-1">? {f.q}</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Idle State Hint */}
                <div className={`absolute bottom-0 text-white/50 font-bold uppercase tracking-widest text-sm animate-pulse transition-opacity duration-300 ${activeZone ? 'opacity-0' : 'opacity-100'}`}>
                    Hover over the car parts to ask questions
                </div>

            </div>
        </div>
    );
};

export default CarFAQ;
