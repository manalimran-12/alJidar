"use client";

import React, { useState } from "react";

const QualitySectionProp = ({ heading, sections }) => {
    const [hoveredSection, setHoveredSection] = useState("quality");

    return (
        <section className="bg-[#323232] text-white py-12 px-6 md:px-16 relative">

            {heading &&
                <div className="max-w-7xl mx-auto text-left mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-wide leading-tight"
                        dangerouslySetInnerHTML={{ __html: heading.title }}>
                    </h2>
                </div>
            }

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        onMouseEnter={() => setHoveredSection(section.id)}
                        className={`transition-all duration-300 px-6 py-6 ${hoveredSection === section.id
                            ? "bg-[#252525] shadow-[0px_4px_20px_rgba(0,0,0,0.7)]"
                            : ""
                            }`}
                    >
                        <h3
                            className={`text-xl md:text-2xl font-bold tracking-wide ${hoveredSection === section.id ? "text-yellow-500" : "text-white"
                                }`}
                        >
                            {section.title}
                        </h3>
                        <p className="text-gray-300 mt-4">{section.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QualitySectionProp;
