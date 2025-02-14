"use client";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import data from "../public/data.js";
import logo from "../public/logo.png";
import homeBackground from "../public/home1.png";
import { useRouter } from "next/navigation";

export default function HeaderSection() {
  const router = useRouter();

  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${homeBackground.src})` }}
    >
      {/* Top Bar */}
      <header className="flex flex-col p-4 lg:px-12 bg-no-repeat bg-cover bg-center relative">
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-4 text-white text-xs md:text-sm">
          <MdPhone className="text-yellow-500" />
          <span>{data.header.phoneHeader}</span>
          <MdEmail className="text-yellow-500" />
          <span>{data.footer.contactEmail}</span>
          <FaFacebookF className="cursor-pointer hover:text-yellow-500 transition" />
          <FaLinkedinIn className="cursor-pointer hover:text-yellow-500 transition" />
        </div>

        {/* Logo & Navigation */}
        <div className="flex flex-wrap justify-between items-center mt-4">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={50}
            className="cursor-pointer"
            onClick={() => router.push("/home")}
          />

          <div className="flex items-center gap-4 md:gap-6">
            <button
              className="text-white font-medium text-sm md:text-base hover:text-yellow-500 transition"
              onClick={() => router.push("/product")}
            >
              Our Products
            </button>
            <button
              className="bg-yellow-500 text-black px-4 md:px-6 py-2 rounded text-sm md:text-base hover:bg-yellow-600 transition"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row justify-end items-center px-4 md:px-12 lg:px-32 py-12 md:py-20 text-white">
        <div className="max-w-4xl flex flex-col items-end text-right p-6 md:p-8 rounded-lg">
          <button className="text-yellow-400 px-4 py-1 text-xs md:text-sm font-bold rounded bg-[#323232]">
            {data.header.subtitle}
          </button>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            {data.header.mainHeading1}
          </h1>
          <h1 className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 md:mt-4">
            {data.header.headerName}
          </h1>

          {/* Scroll Button */}
          <div className="mt-6 md:mt-10">
            <button
              className="w-12 md:w-14 h-12 md:h-14 bg-gray-700 border-2 border-yellow-500 rounded-full flex items-center justify-center text-yellow-500 text-lg md:text-xl hover:bg-gray-600 transition"
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              ↓
            </button>
          </div>
        </div>

        {/* Header Description */}
        <div className="absolute left-4 md:left-10 bottom-6 md:bottom-16 w-full max-w-3xl text-xs sm:text-sm md:text-base text-gray-300 px-4 md:px-0">
          <p
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: data.header.headerPara }}
          />
        </div>
      </section>
    </div>
  );
}
