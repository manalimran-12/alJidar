"use client";

import React from "react";
import Image from "next/image";
import data from "@/public/data.js"; 
import steelImage from "../public/steel.png"; 

const VisionMission = () => {
    return (
        <section className="bg-[#252525] text-white py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="max-w-lg mx-auto space-y-8">
 
                    <div>
                        <h2 className="text-xl md:text-3xl font-light">
                            {data.vision.title} <span className="text-yellow-500 font-bold">{data.vision.highlight}</span>
                        </h2>
                        <p className="text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: data.vision.content }}></p>
                    </div>

                    <div className="bg-[#323232] p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl md:text-3xl font-light">
                            {data.mission.title} <span className="text-yellow-500 font-bold">{data.mission.highlight}</span>
                        </h2>
                        <p className="text-gray-300 mt-2">{data.mission.content}</p>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <Image src={steelImage} alt="Steel Products" width={700} height={400} className="w-full h-auto" />
                </div>

            </div>
        </section>
    );
};

export default VisionMission;
