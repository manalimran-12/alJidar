"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import warehouse from "../public/warehouse.png";
import warehouse2 from "../public/warehouse2.png";
import data from "@/public/data";
import { useRouter } from "next/navigation";

const WarehouseSupplySection = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#252525] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-16 relative text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Image Container */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative w-full aspect-[4/3] bg-[#FBA919] overflow-visible order-2 md:order-1 h-[600]"
        >
          <AnimatePresence mode="wait">
            {showSecondImage ? (
              <motion.div
                key="second-image"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={warehouse2}
                  alt="Warehouse Supply 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover object-center transform scale-110"
                />
              </motion.div>
            ) : (
              <motion.div
                key="first-image"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={warehouse}
                  alt="Warehouse Supply 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover object-center transform scale-110"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Container */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-left order-1 md:order-2"
        >
          <button className="bg-[#323232] text-[#FBA919] px-4 py-1 text-sm font-bold rounded">
            PRODUCT SUPPLY
          </button>

          <h2 className=" text-xl sm:text-2xl md:text-3xl mt-4">
            <span className="  items-center">
              {data.p.heading}
              <span className=" relative w-[170px] sm:w-[300px] h-[40px] ml-2 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={showSecondImage ? "BIGSTORE" : "WAREHOUSE"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className=" font-agressive text-[#FBA919] absolute w-full text-left"
                  >
                    {showSecondImage ? "BIGSTORE" : "WAREHOUSE"}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
            {data.p.p1}
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
            {data.p.p2}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#FBA919] text-black px-4 sm:px-6 py-2 sm:py-3 rounded font-bold hover:bg-yellow-600 transition-colors text-sm sm:text-base"
            onClick={() => { router.push("/contact") }}
          >
            {data.p.contact}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WarehouseSupplySection;