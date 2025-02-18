"use client";

import React, { useState } from "react";
import Image from "next/image";
import QualityBackground from "../public/bgQuality.png"; // Ensure correct path

const QualitySectionProp = ({ heading, sections, bgColor, hover, isProductPage = false }) => {
    const [hoveredSection, setHoveredSection] = useState("quality");

    return (
        <section
            className={`relative text-white py-12 px-6 md:px-16 bg-no-repeat bg-cover`}
            style={{
                backgroundImage: `url(${QualityBackground.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: isProductPage ? "50vh" : "auto", // Prevents overlap on small screens
            }}
        >
            <div className="relative max-w-7xl mx-auto z-10 text-left">
                {heading && (
                    <h2
                        className="text-2xl md:text-4xl font-bold tracking-wide leading-tight mb-8"
                        dangerouslySetInnerHTML={{ __html: heading.title }}
                    ></h2>
                )}
            </div>

            {/* Sections Grid */}
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center z-10">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        onMouseEnter={() => setHoveredSection(section.id)}
                        onMouseLeave={() => setHoveredSection("quality")}
                        className={`transition-all duration-300 px-6 py-6 rounded-lg cursor-pointer transform ${hoveredSection === section.id
                            ? "shadow-xl scale-105 bg-opacity-80"
                            : "bg-[#252525] scale-100"
                            }`}
                        style={{
                            backgroundColor: hoveredSection === section.id ? hover : "#323232",
                        }}
                    >
                        <h3
                            className={`text-lg md:text-xl font-bold tracking-wide transition-colors duration-300 ${hoveredSection === section.id
                                ? "text-yellow-500"
                                : "text-white"
                                }`}
                        >
                            {section.title}
                        </h3>
                        <p className="text-gray-300 mt-4 text-sm md:text-base">{section.content}</p>
                    </div>
                ))}
            </div>

            {/* Orange Shape Overlay - Adjusted for Responsiveness */}
            <div
                className="absolute bottom-0 right-0 w-full h-28 md:h-40 bg-yellow-500"
                style={{
                    clipPath: "polygon(100% 0%, 100% 100%, 50% 100%)",
                    zIndex: 1,
                }}
            ></div>
        </section>
    );
};

export default QualitySectionProp;
