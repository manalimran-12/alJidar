"use client";

import React from "react";
import Image from "next/image";

const StudProduct = ({ product, image, reverse = false }) => {
    return (
        <section className="bg-[#252525] text-white py-12 px-6 md:px-16 relative">
            <div className={`max-w-7xl mx-auto flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-10 items-center`}>

                {/* Left Side - Text */}
                <div className="text-left flex-1">
                    <button className="bg-[#323232] text-yellow-500 px-4 py-1 text-sm font-bold rounded">
                        {product.category}
                    </button>
                    <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mt-4">{product.title}</h2>
                    <p className="text-sm md:text-base text-gray-300 mt-4">{product.description}</p>
                    <p className="text-sm md:text-lg font-semibold mt-4">{product.availability}</p>

                    {/* Table Container */}
                    <div className="mt-6 bg-[#323232] p-4 rounded-lg overflow-x-auto">
                        <table className="w-full text-left text-gray-300">
                            <thead>
                                <tr className="border-b border-gray-600 text-xs">
                                    {product.specifications.headers.map((header, index) => (
                                        <th key={index} className="bg-[#252525] py-2 px-4 font-bold">{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-[#424242] text-xs">
                                <tr>
                                    {product.specifications.values.map((value, index) => (
                                        <td key={index} className="py-2 px-3">{value}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative flex justify-center flex-1">
                    <Image src={image} alt={product.title} width={500} height={300} className="w-full h-auto" />
                </div>

            </div>
        </section>
    );
};

export default StudProduct;
