"use client";

import React from "react";
import Image from "next/image";
import data from "@/public/data.js"; 
import steelImage from "../public/steel.png"; 

export default function VisionMission() {
    return (
      <div className="flex flex-col md:flex-row items-center bg-[#252525] text-white">
        <div className="md:w-1/2 space-y-6 p-14 md:p-20 lg:p-24 xl:p-32">
          <div  >
            <h2 className="text-3xl font-bold">
              {data.vision.title} <span className="text-yellow-500 font-bold">{data.vision.highlight}</span>
            </h2>
            <p className="text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: data.vision.content }}></p>
          </div>
          <div className="bg-[#323232] p-6 rounded-md">
            <h2 className="text-2xl font-bold">
            {data.mission.title} <span className="text-yellow-500 font-bold">{data.mission.highlight}</span>
            </h2>
            <p className="text-gray-300 mt-2">{data.mission.content}</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src={steelImage}
            alt="Steel Profiles"
            className="w-full h-auto md:h-full object-cover md:rounded-none md:border-r-0"
          />
        </div>
      </div>
    );
  }
  

 

