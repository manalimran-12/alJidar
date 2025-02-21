"use client"
import React from 'react'
import HeaderProp from '@/Components/HeaderProp'
import ContactSection from '@/Components/ContactForm'
import data from '@/public/data'
import QualitySectionProp from '@/Components/QualitySectionProp'
import StudProduct from '@/Components/ProductsProp'
import FurringProduct from "../../public/FurringProduct.png"
import studProduct from "../../public/studProduct.png"
import channel from "../../public/channel.png"
import runnerProduct from "../../public/runnerProduct.png"
import WarehouseSupplySection from '@/Components/Warehouse';
import Footer from '@/Components/footer'


export default function Product() {

    return (
        <div className="bg-black text-white min-h-screen">
            <HeaderProp text={data.Contact.mainHeading2} subtitle={data.Contact.subtitle2} className={"right-1/4 bottom-15"} scrollToId="studProduct"/>
            <StudProduct product={data.product1} image={studProduct}reverse={false} />
            <StudProduct product={data.product2} image={FurringProduct} reverse={true} />
            <StudProduct product={data.product3} image={channel} reverse={false}/>
            <StudProduct product={data.product4} image={runnerProduct} reverse={true} />

            <QualitySectionProp
                hover={"#252525"}
                bgColor={"#323232"}
                heading={data.qualitySectionProduct.heading}
                sections={data.qualitySectionProduct.sections}
                isProductPage={true}
            />
            <WarehouseSupplySection />
            <ContactSection />
            <Footer />
        </div>
    )
}


