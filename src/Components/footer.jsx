"use client";

import Image from "next/image";
import data from "../public/data.js";
import footerBg from "../public/footerbg.png";
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="relative  ">
             <div className="absolute bottom-0 left-0 w-full h-[220px]"
                style={{ backgroundImage: `url(${footerBg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            </div>

             <div className="relative z-10 bg-[#252525] p-8 md:p-12 max-w-6xl mx-auto rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Left - Company Info */}
                    <div className="text-left w-full md:w-1/3">
                        <h2 className="text-lg font-bold text-yellow-400">{data.footer.companyName}</h2>
                        <p className="mt-2 text-sm text-gray-300">{data.footer.companyDescription}</p>
                        {/* Email Subscription */}
                        <div className="mt-4 flex items-center border border-gray-600 rounded-lg overflow-hidden max-w-[280px]">
                            <input
                                type="email"
                                placeholder={data.footer.emailPlaceholder}
                                className="p-2 bg-[#313131] text-sm w-full focus:outline-none"
                            />
                            <button className="bg-yellow-500 px-3 py-2 text-black font-semibold text-sm">
                                {data.footer.subscribeButton}
                            </button>
                        </div>
                    </div>
                    {/* Center - Contact Information */}
                    <div className="text-left w-full md:w-1/3 mt-6 md:mt-0">
                        <h3 className="text-lg font-bold text-white">Our Information</h3>
                        <p className="mt-2 flex items-center gap-2 text-sm">
                            <FaEnvelope className="text-yellow-400" /> {data.footer.contactEmail}
                        </p>
                        {data.footer.phoneNumbers.map((phone, index) => (
                            <p key={index} className="flex items-center gap-2 text-sm">
                                <FaPhoneAlt className="text-yellow-400" /> {phone}
                            </p>
                        ))}
                        <p className="flex items-center gap-2 text-sm">
                            <FaMapMarkerAlt className="text-yellow-400 shrink-0" />
                            {data.footer.address}
                        </p>
                    </div>
                    {/* Right - Social Media */}
                    <div className="text-left w-full md:w-1/3 mt-6 md:mt-0 text-center md:text-right">
                        <h3 className="text-lg font-bold text-white">{data.footer.followUs}</h3>
                        <div className="flex justify-center md:justify-end gap-4 mt-2">
                            <a href="#" className="text-2xl"><FaLinkedinIn className="text-yellow-400" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
