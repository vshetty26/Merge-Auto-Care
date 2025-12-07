import React from 'react';

const InfoCard = ({ icon, title, description, bgColor }) => (
    <div className={`w-full max-w-md md:max-w-2xl mx-auto p-8 md:p-12 rounded-3xl ${bgColor} text-white mb-[-40px] relative z-10 shadow-lg last:mb-0`}>
        <div className="flex items-start space-x-4">
            <div className="text-5xl">{icon}</div>
            <div>
                <h3 className="text-3xl font-heading uppercase mb-2">{title}</h3>
                <p className="text-lg font-medium leading-relaxed opacity-90">{description}</p>
            </div>
        </div>
    </div>
);

const InfoSection = () => {
    const cards = [
        {
            icon: "👨‍🔧",
            title: "Multi-Brand Expertise",
            description: "Expertise in multi-brand servicing from premium to everyday vehicles. We handle them all with care.",
            bgColor: "bg-gradient-orange"
        },
        {
            icon: "💥",
            title: "Collision Repair",
            description: "Dedicated collision & accidental repair facility with advanced equipment to restore your vehicle safely.",
            bgColor: "bg-primary-red"
        },
        {
            icon: "⚙️",
            title: "Genuine Parts",
            description: "Genuine OES/OEM parts to ensure safety and performance. Dealership-grade quality at competitive prices.",
            bgColor: "bg-primary-navy"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Rainbow Background */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none transform translate-y-20 scale-150">
                <div className="absolute w-[1200px] h-[1200px] bg-primary-navy rounded-full"></div>
                <div className="absolute w-[1000px] h-[1000px] bg-primary-red rounded-full"></div>
                <div className="absolute w-[800px] h-[800px] bg-gradient-orange rounded-full"></div>
                <div className="absolute w-[600px] h-[600px] bg-primary-yellow rounded-full"></div>
            </div>

            {/* Peek-a-boo Mascot */}
            <img src="/mascot.png" className="absolute top-10 right-10 w-32 md:w-48 transform -rotate-12 z-20 opacity-20 md:opacity-100" />

            <div className="relative z-10 px-4 pb-20 pt-40">
                <div className="text-center mb-20">
                    <p className="text-xl font-bold text-primary-navy mb-2">About Us</p>
                    <h2 className="text-5xl md:text-6xl font-heading text-primary-navy uppercase mb-4">
                        Why Choose Us
                    </h2>
                    <p className="max-w-2xl mx-auto text-primary-navy font-bold">
                        Auto Car Repair (Powered by Autogine Services) is a leading network of multi-brand car service workshops in Delhi NCR.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    {cards.map((card, index) => (
                        <InfoCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
