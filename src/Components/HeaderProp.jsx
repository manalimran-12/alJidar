"use client"
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from 'react-icons/md';
import data from "../public/data.js";
import logo from "../public/logo.png";
import homeBackground from "../public/home1.png";
import { useRouter } from "next/navigation";

export default function HeaderProp({ text, subtitle, className }) {
    const router = useRouter();

    return (
        <div className="w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${homeBackground.src})` }}>
            <header className="flex flex-col p-4 lg:px-12 bg-no-repeat bg-cover bg-center relative">
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-4 text-white text-xs md:text-sm">
                    <MdPhone className="text-[#FBA919]" />
                    <span>{data.header.phoneHeader}</span>
                    <MdEmail className="text-[#FBA919]" />
                    <span>{data.footer.contactEmail}</span>
                    <FaFacebookF className="cursor-pointer hover:text-[#FBA919] transition" />
                    <FaLinkedinIn className="cursor-pointer hover:text-[#FBA919] transition" />
                </div>

                {/* Logo & Navigation */}
                <div className="flex flex-wrap justify-between items-center mt-4">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={150}
                        height={50}
                        className="cursor-pointer w-24 md:w-36"
                        onClick={() => router.push("/home")}
                    />

                    <div className="flex items-center gap-4 md:gap-6">
                        <button
                            className="text-white font-medium text-sm md:text-base hover:text-[#FBA919] transition"
                            onClick={() => router.push("/product")}
                        >
                            Our Products
                        </button>
                        <button
                            className="bg-[#FBA919] text-black px-4 md:px-6 py-2 rounded text-sm md:text-base hover:bg-yellow-600 transition"
                            onClick={() => router.push("/contact")}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </header>
            <section className="relative flex justify-start items-center px-4 lg:px-32 py-20 text-white">
                <div className="max-w-fit flex flex-col items-start text-left p-8 rounded-lg">
                    <button className="text-[#FBA919] px-4 py-1 text-xs font-bold rounded bg-[#323232]">
                        {subtitle}
                    </button>
                    <h1
                        className="text-4xl md:text-6xl font-bold mt-4 text-left sm:text-sm"
                        dangerouslySetInnerHTML={{ __html: text }}
                    ></h1>
                </div>
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-6 sm:right-10 sm:left-auto md:bottom-8 md:right-12 lg:bottom-24 lg:right-32 xl:right-40 sm:justify-center  ${className}`}>
                    <button
                        className="w-14 h-14 bg-gray-700 border-2 border-[#FBA919] rounded-full flex items-center justify-center text-[#FBA919] text-xl hover:bg-gray-600 transition-colors"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        ↓
                    </button>
                </div>



            </section>
        </div>
    );
}
