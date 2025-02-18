"use client";

import React, { useState } from "react";
import Image from "next/image";
import data from "@/public/data.js";
import steelImage from "../public/steel.png";

export default function VisionMission() {
  const [hovered, setHovered] = useState("vision");

  return (
    <div className="bg-[#252525] text-white">
      {/* Image on small screens */}
      <div className="block md:hidden w-full">
        <Image
          src={steelImage}
          alt="Steel Profiles"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 p-14 md:p-20 lg:p-24 xl:p-32">
          <div
            onMouseEnter={() => setHovered("vision")}
            onMouseLeave={() => setHovered("vision")}
            className={`transition-all duration-300 p-6 rounded-lg cursor-pointer transform ${hovered === "vision" ? "shadow-xl scale-105" : "scale-100"}`}
            style={{ backgroundColor: hovered === "vision" ? "#323232" : "" }}
          >
            <h2 className={`text-3xl font-bold ${hovered === "vision" ? "text-yellow-500" : "text-white"}`}>
              {data.vision.title} <span className="text-yellow-500 font-bold">{data.vision.highlight}</span>
            </h2>
            <p className="text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: data.vision.content }}></p>
          </div>

          <div
            onMouseEnter={() => setHovered("mission")}
            onMouseLeave={() => setHovered("vision")}
            className={`transition-all duration-300 p-6 rounded-lg cursor-pointer transform ${hovered === "mission" ? "shadow-xl scale-105" : "scale-100"}`}
            style={{ backgroundColor: hovered === "mission" ? "#323232" : "#252525" }}
          >
            <h2 className={`text-2xl font-bold ${hovered === "mission" ? "text-yellow-500" : "text-white"}`}>
              {data.mission.title} <span className="text-yellow-500 font-bold">{data.mission.highlight}</span>
            </h2>
            <p className="text-gray-300 mt-2">{data.mission.content}</p>
          </div>
        </div>

        {/* Image on medium and large screens */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src={steelImage}
            alt="Steel Profiles"
            className="w-full h-auto md:h-full object-cover md:rounded-none md:border-r-0"
          />
        </div>
      </div>
    </div>
  );
}
