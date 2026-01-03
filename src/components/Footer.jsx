import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <h3 className="font-bold text-lg mb-2 flex justify-between items-center select-none">
                {faq.q}
                <span className={`text-primary-yellow text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </h3>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {faq.a}
                </p>
            </div>
        </div>
    );
};

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <footer className="bg-secondary-bg text-text-secondary pt-20 pb-10 mt-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* FAQ Section - Only on Home Page */}
                {isHomePage && (
                    <div className="mb-20">
                        <h2 className="text-4xl font-heading text-clean-white uppercase mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    q: "How long does a car battery typically last?",
                                    a: "On average, a car battery lasts between 3 to 5 years. However, weather conditions, driving habits, and maintenance can affect the battery’s lifespan."
                                },
                                {
                                    q: "What are the signs that my car battery needs to be replaced?",
                                    a: "Common signs include slow engine cranking, dim headlights, electrical issues, and a dashboard battery warning light. If your car struggles to start, it’s time to check the battery."
                                },
                                {
                                    q: "How can I extend the life of my car battery?",
                                    a: "To extend your battery’s life, keep it clean, ensure it’s securely mounted, avoid frequent short trips, and check the charging system regularly. Regular inspections and maintenance can also help."
                                },
                                {
                                    q: "What should I do if my car battery dies?",
                                    a: "If your battery dies, you can jump-start it using jumper cables and another vehicle with a fully charged car battery. If the problem persists, it may be time to replace the battery."
                                },
                                {
                                    q: "How do I know which battery is right for my car?",
                                    a: "The correct battery for your vehicle depends on factors like battery size, cold cranking amps (CCA), and reserve capacity (RC). It’s best to consult your vehicle’s manual or speak to a professional for guidance."
                                },
                                {
                                    q: "What types of car emergency services do you offer?",
                                    a: "Our emergency services include roadside assistance, towing, jump-starts, flat tire changes, lockout assistance, and emergency fuel delivery."
                                }
                            ].map((faq, i) => (
                                <FAQItem key={i} faq={faq} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Contact Form & Info Grid */}
                <div className="grid md:grid-cols-2 gap-16 mb-20 border-t border-white/20 pt-16">
                    {/* Contact Form */}
                    <div>
                        <h3 className="text-3xl font-heading text-clean-white uppercase mb-6">Have Questions? Get In Touch!</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Enter Your Name" className="w-full p-4 bg-primary-bg text-clean-white border border-white/10 rounded focus:border-soft-highlight outline-none" />
                            <input type="email" placeholder="Enter Your Email" className="w-full p-4 bg-primary-bg text-clean-white border border-white/10 rounded focus:border-soft-highlight outline-none" />
                            <select className="w-full p-4 bg-primary-bg text-clean-white border border-white/10 rounded focus:border-soft-highlight outline-none">
                                <option>Select Location</option>
                                <option>Indore</option>
                                <option>Dewas Naka</option>
                            </select>
                            <input type="tel" placeholder="Enter Your Phone Number" className="w-full p-4 bg-primary-bg text-clean-white border border-white/10 rounded focus:border-soft-highlight outline-none" />
                            <div className="flex items-center space-x-2">
                                <span className="font-bold text-clean-white">What is 6 - 5?</span>
                                <input type="text" placeholder="Answer" className="w-20 p-2 bg-primary-bg text-clean-white border border-white/10 rounded focus:border-soft-highlight outline-none" />
                            </div>
                            <label className="flex items-start space-x-2 text-sm text-gray-400">
                                <input type="checkbox" className="mt-1 accent-soft-highlight" />
                                <span>I agree to receive calls, e-mail, WhatsApp messages, and SMS from Merge Auto Care.</span>
                            </label>
                            <button className="bg-clean-white text-primary-bg font-bold py-4 px-8 rounded w-full hover:bg-gray-200 transition uppercase">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-3xl font-heading text-clean-white uppercase mb-6">Contact Us</h3>
                        <div className="space-y-6 text-lg text-text-secondary">
                            <p>
                                <strong className="block text-clean-white">Adddress</strong>
                                Ruchir Complex Godown No. 18, 46/1 Lasudia Mori, Dewas Naka, Indore (M.P) - 452010
                            </p>
                            <p>
                                <strong className="block text-clean-white">Phone</strong>
                                +91 75660 00333 / +91 90092 14400
                            </p>
                            <p>
                                <strong className="block text-clean-white">Email</strong>
                                support@mergeautocare.com
                            </p>
                            <div className="pt-6">
                                <strong className="block text-clean-white mb-4">Follow Us</strong>
                                <div className="flex space-x-4">
                                    {/* Social Placeholders */}
                                    {['FB', 'TW', 'IG', 'LI', 'YT', 'WA'].map(social => (
                                        <div key={social} className="w-10 h-10 bg-primary-bg text-clean-white rounded-full flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-clean-white hover:text-primary-bg transition">
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
                            <li>Indore, Dewas Naka, Lasudia Mori</li>
                        </ul>
                    </div>
                    <div>
                        <img src="/mac_logo.png" alt="Merge Auto Care" className="h-20 mb-4 bg-primary-bg p-2 rounded" />
                        <p className="mb-4">Merge Auto Care is a leading luxury and premium car workshop.</p>
                        <p>© 2025 by Autoginie Services Private Limited.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
