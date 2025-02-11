"use client"
import React from 'react'
import { useEffect, useState } from "react";
import HeaderProp from '@/Components/HeaderProp'
import ContactSection from '@/Components/ContactForm'
import data from '@/public/data'
import QualitySectionProp from '@/Components/QualitySectionProp'
import StudProduct from '@/Components/ProductsProp'
import studProduct from "../../public/StudProduct.png"
import FurringProduct from "../../public/FurringProduct.png"
import channel from "../../public/channel.png"
import runnerProduct from "../../public/runnerProduct.png"


export default function Product() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="bg-black text-white min-h-screen">
            <HeaderProp text={data.Contact.mainHeading2} subtitle={data.Contact.subtitle2} className={"right-1/4 bottom-15"} />
            <StudProduct product={data.product1} image={studProduct} />
            <StudProduct product={data.product2} image={FurringProduct} reverse={!isMobile} />
            <StudProduct product={data.product3} image={channel} />
            <StudProduct product={data.product4} image={runnerProduct} reverse={!isMobile} />

            <QualitySectionProp
                heading={data.qualitySectionProduct.heading}
                sections={data.qualitySectionProduct.sections}
            />
            <ContactSection />
        </div>
    )
}


