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
                <div className="flex justify-end items-center gap-4 text-white text-sm">
                    <MdPhone className="text-yellow-500" />
                    <span>{data.header.phoneHeader}</span>
                    <MdEmail className="text-yellow-500" />
                    <span>{data.footer.contactEmail}</span>
                    <FaFacebookF className="cursor-pointer" />
                    <FaLinkedinIn className="cursor-pointer" />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <Image src={logo} alt="Logo" width={180} height={60} onClick={() => router.push("/home")} className="cursor-pointer" />
                    <div className="flex items-center gap-6">
                        <button
                            className="text-white font-medium hover:text-yellow-500 transition-colors"
                            onClick={() => router.push("/product")}
                        >
                            Our Products
                        </button>
                        <button
                            className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition-colors"
                            onClick={() => router.push("/contact")}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </header>
            <section className="relative flex justify-start items-center px-4 lg:px-32 py-20 text-white">
                <div className="max-w-fit flex flex-col items-start text-left p-8 rounded-lg">
                    <button className="text-yellow-400 px-4 py-1 text-xs font-bold rounded bg-[#323232]">
                        {subtitle}
                    </button>
                    <h1
                        className="text-4xl md:text-6xl font-bold mt-4 text-left"
                        dangerouslySetInnerHTML={{ __html: text }}
                    ></h1>
                </div>
                <div className={`absolute ${className}`}>
                    <button
                        className="w-14 h-14 bg-gray-700 border-2 border-yellow-500 rounded-full flex items-center justify-center text-yellow-500 text-xl hover:bg-gray-600 transition-colors"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        ↓
                    </button>
                </div>



            </section>
        </div>
    );
}
