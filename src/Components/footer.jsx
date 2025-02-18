"use client";

import Image from "next/image";
import data from "../public/data.js";
import footerBg from "../public/footerbg.png";
import { FaEnvelope, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import layer from "../public/Layer_1.png";

const Footer = () => {
    return (
        <div className="relative bg-[#323232]">
            {/* Background Image */}
            <div
                className="absolute bottom-0 left-0 w-full h-[250px] md:h-[350px] bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url(${footerBg.src})`,
                    backgroundPosition: "bottom center",
                }}
            ></div>

            {/* Footer Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center py-6 md:py-12">
                <div className="bg-[#252525] p-6 md:p-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-300 rounded-lg shadow-lg w-full min-h-[250px] md:min-h-[350px]">

                    {/* Left - Company Info */}
                    <div className="text-left w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                        <Image src={layer} alt="Company Logo" width={150} height={50} />
                        <p className="mt-2 text-xs md:text-base">{data.footer.companyDescription}</p>

                        {/* Email Subscription */}
                        <div className="mt-4 flex flex-col md:flex-row items-center w-full max-w-[220px] md:max-w-[300px]">
                            <input
                                type="email"
                                placeholder={data.footer.emailPlaceholder}
                                className="p-2 bg-[#313131] text-xs md:text-sm w-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none focus:outline-none"
                            />
                            <button className="bg-yellow-500 px-3 py-2 rounded-b-lg md:rounded-r-lg md:rounded-bl-none text-gray-900 font-semibold text-xs md:text-sm w-full md:w-1/3 mt-1 md:mt-0">
                                {data.footer.subscribeButton}
                            </button>
                        </div>
                    </div>

                    {/* Center - Contact Info */}
                    <div className="text-left w-full md:w-1/3 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-sm md:text-lg font-bold text-white">Our Information</h3>

                        <p className="mt-2 flex items-center gap-2 text-xs md:text-base">
                            <FaEnvelope className="text-yellow-400" /> {data.footer.contactEmail}
                        </p>

                        {data.footer.phoneNumbers.map((phone, index) => (
                            <p key={index} className="flex items-center gap-2 text-xs md:text-base">
                                <FaPhoneAlt className="text-yellow-400" /> {phone}
                            </p>
                        ))}

                        <p className="flex items-center gap-2 text-xs md:text-base">
                            <FaMapMarkerAlt className="text-yellow-400 shrink-0" /> {data.footer.address}
                        </p>
                    </div>

                    {/* Right - Social Media */}
                    <div className="text-left w-full md:w-1/3 mt-6 md:mt-0 flex flex-col items-center md:items-end text-center md:text-right">
                        <h3 className="text-sm md:text-lg font-bold text-white">{data.footer.followUs}</h3>
                        <div className="flex justify-center md:justify-end gap-4 mt-2">
                            <a href="#" className="text-2xl">
                                <FaLinkedinIn className="text-yellow-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
