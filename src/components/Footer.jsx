import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary-navy text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* FAQ Section */}
                <div className="mb-20">
                    <h2 className="text-4xl font-heading text-primary-yellow uppercase mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "How long does a car battery typically last?",
                            "What are the signs that my car battery needs to be replaced?",
                            "How can I extend the life of my car battery?",
                            "What should I do if my car battery dies?",
                            "How do I know which battery is right for my car?",
                            "What types of car emergency services do you offer?"
                        ].map((q, i) => (
                            <div key={i} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition cursor-pointer">
                                <h3 className="font-bold text-lg mb-2 flex justify-between">
                                    {q}
                                    <span className="text-primary-yellow">+</span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form & Info Grid */}
                <div className="grid md:grid-cols-2 gap-16 mb-20 border-t border-white/20 pt-16">
                    {/* Contact Form */}
                    <div>
                        <h3 className="text-3xl font-heading text-white uppercase mb-6">Have Questions? Get In Touch!</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Enter Your Name" className="w-full p-4 bg-white text-primary-navy rounded" />
                            <input type="email" placeholder="Enter Your Email" className="w-full p-4 bg-white text-primary-navy rounded" />
                            <select className="w-full p-4 bg-white text-primary-navy rounded">
                                <option>Select Location</option>
                                <option>Gurugram</option>
                                <option>Delhi</option>
                                <option>Noida</option>
                            </select>
                            <input type="tel" placeholder="Enter Your Phone Number" className="w-full p-4 bg-white text-primary-navy rounded" />
                            <div className="flex items-center space-x-2">
                                <span className="font-bold">What is 6 - 5?</span>
                                <input type="text" placeholder="Answer" className="w-20 p-2 bg-white text-primary-navy rounded" />
                            </div>
                            <label className="flex items-start space-x-2 text-sm text-gray-300">
                                <input type="checkbox" className="mt-1" />
                                <span>I agree to receive calls, e-mail, WhatsApp messages, and SMS from ACR.</span>
                            </label>
                            <button className="bg-primary-red text-white font-bold py-4 px-8 rounded w-full hover:bg-red-700 transition uppercase">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-3xl font-heading text-white uppercase mb-6">Contact Us</h3>
                        <div className="space-y-6 text-lg">
                            <p>
                                <strong className="block text-primary-yellow">Adddress</strong>
                                Unit-1 Plot No 29 & 30, Sector 34, Gurugram, 122001
                            </p>
                            <p>
                                <strong className="block text-primary-yellow">Phone</strong>
                                9810446692 / 9870400861
                            </p>
                            <p>
                                <strong className="block text-primary-yellow">Email</strong>
                                support@autocarrepair.in
                            </p>
                            <div className="pt-6">
                                <strong className="block text-primary-yellow mb-4">Follow Us</strong>
                                <div className="flex space-x-4">
                                    {/* Social Placeholders */}
                                    {['FB', 'TW', 'IG', 'LI', 'YT', 'WA'].map(social => (
                                        <div key={social} className="w-10 h-10 bg-white text-primary-navy rounded-full flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-primary-yellow transition">
                                            {social}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400 border-t border-white/20 pt-10">
                    <div>
                        <h4 className="text-white font-bold uppercase mb-4">Our Service</h4>
                        <ul className="space-y-2">
                            <li>Regular Car Service</li>
                            <li>Car AC Service & Repair</li>
                            <li>Car Brake & Wheel Maintenance</li>
                            <li>Car Denting & Painting</li>
                            <li>Car Care & Detailing</li>
                            <li>Car Lights and Glass Work</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-4">Luxury Brands</h4>
                        <ul className="space-y-2">
                            <li>Volvo Car Service</li>
                            <li>Audi Car Service</li>
                            <li>Land Rover Car Service</li>
                            <li>Mercedes Benz Car Service</li>
                            <li>Jaguar Car Service</li>
                            <li>BMW Car Service</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-4">Popular Brands</h4>
                        <ul className="space-y-2">
                            <li>Tata, Renault, Volkswagen</li>
                            <li>Toyota, Mahindra, Maruti</li>
                        </ul>
                        <h4 className="text-white font-bold uppercase mt-6 mb-4">Locations</h4>
                        <ul className="space-y-2">
                            <li>Gurgaon, Delhi, Noida, Okhla</li>
                        </ul>
                    </div>
                    <div>
                        <img src="/acr_logo.png" alt="ACR" className="h-20 mb-4 bg-white p-2 rounded" />
                        <p className="mb-4">Auto Car Repair (Powered by Autogine Services) is a leading network of multi-brand car service workshops.</p>
                        <p>© 2025 by Autoginie Services Private Limited.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
