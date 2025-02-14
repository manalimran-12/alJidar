"use client";

import React, { useState } from "react";
import QualityBackground from "../public/bgQuality.png"; // Ensure the correct path

const QualitySectionProp = ({ heading, sections, bgColor, hover }) => {
    const [hoveredSection, setHoveredSection] = useState("quality");

    return (
        <section
            className={`relative text-white py-12 px-6 md:px-16 bg-no-repeat bg-cover bg-[${bgColor}] h-[45vh]`}
            style={{ backgroundImage: `url(${QualityBackground.src})` }}
        >
            <div className="relative max-w-7xl mx-auto z-10">
                {heading && (
                    <h2
                        className="text-3xl md:text-5xl font-bold tracking-wide leading-tight mb-10"
                        dangerouslySetInnerHTML={{ __html: heading.title }}
                    ></h2>
                )}
            </div>

            {/* Sections */}
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center z-10">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        onMouseEnter={() => setHoveredSection(section.id)}
                        className={`transition-all duration-300 px-6 py-6 ${hoveredSection === section.id
                                ? `bg-[${hover}] shadow-[0px_4px_20px_rgba(0,0,0,0.7)]`
                                : ""
                            }`}
                    >
                        <h3
                            className={`text-xl md:text-2xl font-bold tracking-wide ${hoveredSection === section.id
                                    ? "text-yellow-500"
                                    : "text-white"
                                }`}
                        >
                            {section.title}
                        </h3>
                        <p className="text-gray-300 mt-4">{section.content}</p>
                    </div>
                ))}
            </div>

            {/* Orange Shape Overlay */}
            <div
                className="absolute bottom-0 right-0 w-full h-40 bg-yellow-500 clip-path-custom"
                style={{
                    clipPath: "polygon(100% 0%, 100% 100%, 50% 100%)",
                }}
            ></div>
        </section>
    );
};

export default QualitySectionProp;
