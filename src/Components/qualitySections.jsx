"use client";

import React, { useState } from 'react';

const QualitySection = () => {
  const [hoveredSection, setHoveredSection] = useState('quality');

  const sections = [
    {
      id: 'raw-material',
      title: 'RAW MATERIAL',
      content: 'We source premium raw materials to ensure durability and performance. Our materials meet high industry standards, offering reliability and sustainability for top-notch gypsum and drywall solutions.'
    },
    {
      id: 'quality',
      title: 'QUALITY',
      content: 'Quality is at the core of our work. With strict controls and advanced technology, we deliver durable, precise, and reliable products that exceed expectations.'
    },
    {
      id: 'production',
      title: 'PRODUCTION',
      content: 'Our modern facilities combine innovation and efficiency to produce high-performance gypsum and drywall accessories. We focus on sustainability, functionality, and ease of installation.'
    }
  ];

  return (
    <section className="bg-[#323232] text-white py-12 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
        {sections.map((section) => (
          <div
            key={section.id}
            onMouseEnter={() => setHoveredSection(section.id)}
            className={`transition-all duration-300 px-6 py-6 
              ${hoveredSection === section.id ?
                'bg-[#252525] shadow-[0px_4px_20px_rgba(0,0,0,0.7)]' :
                ''
              }`}
          >
            <h3
              className={`text-3xl font-bold tracking-wide 
                ${hoveredSection === section.id ?
                  'text-yellow-500' :
                  'text-white'
                }`}
            >
              {section.title}
            </h3>
            <p className="text-gray-300 mt-4">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualitySection;