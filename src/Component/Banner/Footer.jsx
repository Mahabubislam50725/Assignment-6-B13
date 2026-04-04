import React from 'react';
import { FaFacebookF, FaGithub, FaTimes } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0b1b2b] text-gray-300 pt-12 pb-6 px-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

                    {/* Left Section */}
                    <div className="md:col-span-1">
                        <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
                        <p className="text-sm leading-6 text-gray-400">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                   </div>

                    {/* Social Icons */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Social Links</h3>
                        <div className="flex gap-3 mt-4">
                            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                                <FaGithub  />
                            </div>
                            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                                <FaFacebookF />
                            </div>
                            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                                <FaTimes  />
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 container mx-auto">
                    <p>© 2026 Digitools. All rights reserved.</p>

                    <div className="flex gap-6 mt-3 md:mt-0">
                        <p className="cursor-pointer">Privacy Policy</p>
                        <p className="cursor-pointer">Terms of Service</p>
                        <p className="cursor-pointer">Cookies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;