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
            className="cursor-pointer w-24 md:w-36"
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
      <section className="flex-1 flex flex-col justify-center items-end px-4 md:px-12 lg:px-32 py-8 md:py-16 text-white relative">
        <div className="w-full max-w-4xl flex flex-col items-end text-right">
          <button className="text-yellow-400 px-4 py-1 text-xs md:text-sm font-bold rounded bg-[#323232]">
            {data.header.subtitle}
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4">
            {data.header.mainHeading1}
          </h1>
          <h1 className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            {data.header.headerName}
          </h1>

          <button
            className="mt-6 md:mt-8 w-10 h-10 md:w-12 md:h-12 bg-gray-700/80 border border-yellow-500 rounded-full flex items-center justify-center text-yellow-500 hover:bg-gray-600/80 transition-all group md:self-end"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          >
            ↓
          </button>
        </div>

        {/* Header Description */}
        <div className="w-full max-w-3xl text-right mt-6 md:mt-8">
          <p
            className="text-xs sm:text-sm text-gray-300"
            dangerouslySetInnerHTML={{ __html: data.header.headerPara }}
          />
        </div>
      </section>
    </div>
  );
}
