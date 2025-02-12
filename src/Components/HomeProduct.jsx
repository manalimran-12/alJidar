"use client";

import React from "react";
import Image from "next/image";
import iso from "../public/Isolation_Mode.png";
import logo from "../public/profile.png"
const ProductDetails = ({ product }) => {
  return (
    <section className="bg-[#252525] text-white py-12 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="relative flex justify-center">
          <Image src={iso} alt={product.title} width={745} height={602} className="w-full h-auto" />
        </div>

        <div className="text-left w-full">
          <button className="bg-[#323232] text-yellow-500 px-4 py-1 text-sm font-bold rounded">
            {product.category}
          </button>

          <h2 className="text-3xl md:text-5xl font-bold mt-4"
            dangerouslySetInnerHTML={{ __html: product.heading }}>

          </h2>


          <div className="mt-6 bg-[#323232] p-4 rounded-lg overflow-x-auto max-h-96 custom-scrollbar">
            <table className="w-full text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-gray-600 text-sm">
                  <th className="bg-[#252525] py-3 px-4 font-bold">Technical Parameters</th>
                  <th className="bg-[#252525] py-3 px-4 font-bold">Detail</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {product.technicalSpecifications.map((spec, index) => (
                  <tr
                    key={index}
                    className={`${spec.highlight ? "bg-[#3a3a3a] text-white " : index % 2 === 0 ? "bg-[#3a3a3a]" : "bg-[#424242]"}`}
                  >
                    <td className="py-3 px-4">{spec.parameter}</td>
                    <td className="py-3 px-4">{spec.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
      <div className="flex justify-center items-center mt-12">
        <Image src={logo} alt="AL JIDAR LOGO" width={300} height={80} className="w-auto h-auto" />
      </div>
    </section>
  );
};

export default ProductDetails;
