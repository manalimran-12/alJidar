"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import studImg from "../public/stud.png";
import furringImg from "../public/furring.png";
import cChannelImg from "../public/cchannel.png";
import runnerImg from "../public/runner.png";
import wallAngleImg from "../public/wallangle.png";
import data from "@/public/data";
import qualtityBackground from "../public/qualityPage.png"
import { useRouter } from "next/navigation";

const ProductCard = ({ title, description, image, isLarge = false, yellowBg = false, targetId }) => {

  const router = useRouter();
  const handleNavigation = () => {
    router.push("/product");
  };

  return (
    <div
      className={`relative overflow-hidden bg-white hover:bg-yellow-500 group transition-all duration-300 
        ${isLarge ? 'col-span-2' : 'col-span-1'} h-[280px]`}
    >
      <div className="p-8 h-full flex flex-col justify-between relative">
        <div>
          <h3 className={`font-bold mb-2 text-yellow-500 group-hover:text-black 
           ${isLarge ? 'text-3xl' : 'text-2xl'}`}>
            {title}
          </h3>

          <p className="text-sm max-w-[50%] leading-relaxed text-black">{description}</p>
        </div>

        {/* Dynamic Button */}
        <div className="absolute bottom-8 left-25">
          <button
            className="bg-black group-hover:bg-white rounded-full p-3 transition-colors duration-300"
            onClick={handleNavigation}
          >
            <svg
              className="w-5 h-5 transform rotate-[45deg] text-white group-hover:text-yellow-500 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19V5M5 12l7-7 7 7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-[45%] h-[200px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};



const ProductAndQualitySection = () => {
  return (
    <>
      <>
        <section id="products" className="bg-[#323232] p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-full">
                <ProductCard
                  title="STUD"
                  description="are available in 0.35 mm – 0.90 mm and upon request other thickness will be provided"
                  image={studImg}
                  isLarge={true}
                  targetId="STUD"
                />
              </div>
              <div className="h-full">
                <ProductCard
                  title="FURRING CHANNEL (OMEGA)"
                  description="are available in 0.35 mm – 0.90 mm and upon request other thickness will be provided"
                  image={furringImg}
                  isLarge={true}
                  targetId="Channel"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <ProductCard
                title="C CHANNEL"
                description="are available in 0.35 mm – 0.90 mm and upon request other thickness will be provided"
                image={cChannelImg}
                targetId="Furring"
              />
              <ProductCard
                title="RUNNER"
                description="are available in 0.35 mm – 0.90 mm and upon request other thickness will be provided"
                image={runnerImg}
                targetId="runner"
              />
              <ProductCard
                title="WALL ANGLE"
                description="are available in 0.35 mm – 0.90 mm and upon request other thickness will be provided"
                image={wallAngleImg}
                targetId="STUD"
              />
            </div>
          </div>
        </section>
      </>

      <section className="bg-[#252525] text-white py-24 px-4 w-full md:px-8 bg-no-repeat min-h-full" style={{ backgroundImage: `url(${qualtityBackground.src})` }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <button className="text-yellow-400 px-4 py-1 text-xs font-bold rounded bg-gray-700">
              {data.header.subtitle}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-4 text-2xl md:text-4xl font-bold text-white">
                {data.Qualtity.Title1}<br />
                {data.Qualtity.Title2} <span className="text-yellow-500">{data.Qualtity.Title3}</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-300">
                {data.Qualtity.para1}
              </p>
              <p className="text-gray-300">
                {data.Qualtity.para2} <span className="font-bold">{data.Qualtity.para3}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductAndQualitySection;