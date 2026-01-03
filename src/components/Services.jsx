import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Schedule Maintenance & General Repair",
            description: "Expert periodic maintenance and general repair for luxury vehicles ensuring a longer, smoother ride.",
            image: "/service_standard.png"
        },
        {
            title: "Brake Pads & Disc Replacement",
            description: "Precision replacement of brake pads and discs using genuine parts for your safety.",
            image: "/service_brake_pads.png"
        },
        {
            title: "Alternator Replacement",
            description: "Specialized alternator replacement for Bentleys, Mercedes, and other premium brands.",
            image: "/service_primary.png"
        },
        {
            title: "Pre-Inspection Checkup",
            description: "Comprehensive diagnostic and physical inspection before you buy or for peace of mind.",
            image: "/repair_scan_base.png"
        },
        {
            title: "Cashless Insurance Assistance",
            description: "Hassle-free insurance claims with cashless facility for major providers. Less paperwork, more repair.",
            image: "/broken_glass_base.png" // Placeholder for collision/insurance
        },
        {
            title: "Genuine Parts Replacement",
            description: "We use only 100% genuine OEM/OES parts for all replacements to ensure vehicle integrity.",
            image: "/service_clutch_placeholder.png"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xl text-soft-highlight font-bold mb-2 uppercase">Our Expertise</p>
                    <h2 className="text-5xl md:text-6xl font-heading text-primary-bg uppercase mb-6">
                        Premium Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                        Comprehensive care for your luxury vehicle strictly adhering to manufacturer standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-soft-highlight">
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={`Merge Auto Care - ${service.title}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-primary-bg mb-3 font-heading uppercase group-hover:text-soft-highlight transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <button className="text-primary-bg font-bold uppercase tracking-wider text-sm border-b-2 border-soft-highlight hover:text-soft-highlight transition-colors pb-1">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
