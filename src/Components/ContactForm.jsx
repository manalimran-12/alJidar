"use client";

import Image from 'next/image';
import data from "../public/data.js";
import rolls from "../public/rolls1.png";
import footerBg from "../public/footerbg.png"; // Second background image
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const ContactSection = ( ) => {
    return (
        <div className="relative bg-[#323232] text-white" id='contact'>

          
            <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 max-w-6xl mx-auto">
                
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
                    <Image
                        src={rolls}
                        alt="Steel Rolls"
                        width={500}
                        height={350}
                        className="w-auto h-auto max-w-full rounded-lg"
                    />
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 bg-[#323232] p-6 md:p-8 rounded-lg">
                    <div className="text-left mb-6">
                        <button className="bg-[#252525] text-yellow-400 px-4 py-2 rounded-md text-sm">
                            CONTACT US/BOOK AN APPOINTMENT
                        </button>
                        <h2 className="text-xl md:text-3xl font-bold text-white mt-4">{data.title}</h2>
                        <h2 className="text-xl md:text-3xl font-bold text-yellow-400">CONTACT US</h2>
                    </div>

                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" placeholder={data.form.firstNamePlaceholder} className="w-full md:w-1/2 p-3 bg-[#424242] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            <input type="text" placeholder={data.form.lastNamePlaceholder} className="w-full md:w-1/2 p-3 bg-[#424242] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        </div>
                        <input type="email" placeholder={data.form.emailPlaceholder} className="w-full p-3 bg-[#424242] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <textarea placeholder={data.form.messagePlaceholder} className="w-full p-3 bg-[#424242] rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
                        <button className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-600 transition">{data.form.buttonText}</button>
                    </form>
                </div>
            </div>
 
           
        </div>
    );
};

export default ContactSection;
