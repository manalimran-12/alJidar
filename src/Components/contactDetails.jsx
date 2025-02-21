"use client";

import React, { useState } from "react";

const ContactDetails = () => {
  const [hoveredSection, setHoveredSection] = useState("business-hours");

  const sections = [
    {
      id: "business-hours",
      title: "BUSINESS HOURS",
      content: (
        <>
          <p>
            <span className="text-[#FBA919] font-bold">Sunday – Thursday:</span> 7:00 AM – 5:00 PM
          </p>
          <p>Friday: Closed</p>
          <p>
            <span className="text-[#FBA919] font-bold">Saturday:</span> 7:00 AM – 5:00 PM
          </p>
        </>
      ),
    },
    {
      id: "solutions",
      title: "TAILORED & SUSTAINABLE SOLUTIONS",
      content:
        "Customized steel profile products designed to meet unique project needs while prioritizing eco-friendly practices.",
    },
    {
      id: "head-office",
      title: "HEAD OFFICE",
      content: (
        <>
          <p>
            <span className="text-[#FBA919] font-bold">Address:</span> Riyadh, Istanbul street after exit 17,
            Kharaj Road, Saudi Arabia
          </p>
          <p>
            <span className="text-[#FBA919] font-bold">Phone:</span> 050 625 8005
          </p>
          <p>
            <span className="text-[#FBA919] font-bold">Intl.:</span> +966 55 1366 106 / +966 55 1366 162
          </p>
          <p>
            <span className="text-[#FBA919] font-bold">Email:</span> sales@aljidarsteelprofile.com
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="contactdetails" className="bg-[#252525] text-white py-12 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative z-10">
        {sections.map((section) => (
          <div
            key={section.id}
            onMouseEnter={() => setHoveredSection(section.id)}
            className={`transition-all duration-300 px-6 py-6 rounded-lg ${hoveredSection === section.id ? "bg-[#323232] shadow-lg" : ""
              }`}
          >
            <h3
              className={`text-xl font-bold uppercase tracking-wide font-agressive ${hoveredSection === section.id ? "text-[#FBA919]" : "text-white"
                }`}
            >
              {section.title}
            </h3>
            <div className="text-gray-300 mt-4 text-sm leading-relaxed">{section.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactDetails;
