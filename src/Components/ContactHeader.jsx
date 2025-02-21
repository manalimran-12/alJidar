import React from "react";
import HeaderProp from "./HeaderProp";
import data from "@/public/data";

export default function ContactHeader() {
  return (
    <>
      <HeaderProp text={data.Contact.mainHeading1} subtitle={data.Contact.subtitle1} className={"left-1/2 bottom-15 transform -translate-x-1/2"} scrollToId="contactdetails" />
    </>)
}