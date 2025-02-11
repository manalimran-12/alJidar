"use client"
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from 'react-icons/md';
import data from "../public/data.js";
import logo from "../public/logo.png";
import homeBackground from "../public/home1.png";
import { useRouter } from "next/navigation";

export default function HeaderSection() {
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
          <Image
            src={logo}
            alt="Logo"
            width={180}
            height={60}
            className="cursor-pointer"
            onClick={() => router.push("/home")}
          />

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
      <section className="relative flex justify-end items-center px-4 lg:px-32 py-20 text-white">
        <div className="max-w-4xl flex flex-col items-end text-right p-8 rounded-lg">
          <button className="text-yellow-400 px-4 py-1 text-xs font-bold rounded bg-[#323232]">
            {data.header.subtitle}
          </button>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
           {data.header.mainHeading1}
          </h1>
          <h1 className="text-yellow-500 text-4xl md:text-6xl font-bold mt-4">{data.header.headerName}</h1>

          <div className="right-9 bottom-10 mt-10">
            <button
              className="w-14 h-14 bg-gray-700 border-2 border-yellow-500 rounded-full flex items-center justify-center text-yellow-500 text-xl hover:bg-gray-600 transition-colors"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              ↓
            </button>
          </div>
        </div>
        <div className="absolute left-10 bottom-16 w-full max-w-3xl mb-4">
          <p
            className="mt-4 text-gray-300"
            dangerouslySetInnerHTML={{ __html: data.header.headerPara }}
          />
        </div>
      </section>
    </div>
  );
}
