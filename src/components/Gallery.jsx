import React from 'react';

const Gallery = () => {
    return (
        <section className="py-20 bg-primary-bg">
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <p className="text-xl text-soft-highlight font-bold mb-2 uppercase">Our Portfolio</p>
                <h2 className="text-5xl md:text-6xl font-heading text-clean-white uppercase mb-6">
                    Our Work Gallery
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A glimpse into our workshop. From maintenance to complex repairs on Mercedes, BMW, Audi, and more.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img
                        src="/gallery_collage.png"
                        alt="Merge Auto Care - Mercedes Benz, BMW, Audi service and repair workshop gallery"
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="mt-8 text-center">
                    <p className="text-clean-white italic">
                        Follow us on Facebook to see daily updates and more before/after photos.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
