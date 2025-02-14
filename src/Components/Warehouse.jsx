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
const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#252525] py-16 px-6 md:px-16 relative text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="relative flex justify-center h-[550px] overflow-hidden">
          <AnimatePresence mode="wait">
            {showSecondImage ? (
              <motion.div
                key="second-image"
                initial={{ y: 100 }}
                animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
                exit={{ y: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute"
              >
                <Image src={warehouse2} alt="Warehouse Supply 2" width={700} height={550} className="w-full h-auto" />
              </motion.div>
            ) : (
              <motion.div
                key="first-image"
                initial={{ y: -100 }}
                animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
                exit={{ y: 100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute"
              >
                <Image src={warehouse} alt="Warehouse Supply 1" width={700} height={550} className="w-full h-auto" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <button className="bg-[#323232] text-yellow-500 px-4 py-1 text-sm font-bold rounded">
            PRODUCT SUPPLY
          </button>
          <h2 className="text-2xl md:text-3xl mt-4 flex items-center flex-wrap">
            <span>{data.p.heading}

              <span className="inline-flex relative w-[185px] h-[30px] ml-2 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={showSecondImage ? "BIGSTORE" : "WAREHOUSE"}
                    initial={{ y: showSecondImage ? 20 : -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: showSecondImage ? -20 : 20, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-yellow-500 absolute w-full text-left"
                  >
                    {showSecondImage ? "BIGSTORE" : "WAREHOUSE"}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h2>



          <p className="text-gray-300 mt-4 leading-relaxed">
            {data.p.p1}
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            {data.p.p2}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded font-bold hover:bg-yellow-600 transition-colors"
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
