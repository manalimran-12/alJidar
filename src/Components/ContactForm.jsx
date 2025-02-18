import Image from 'next/image';
import data from "../public/data.js"
import rolls from "../public/rolls1.png"
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
    return (
        <div className="bg-[#323232] text-white" id='contact'>
            <div className="flex flex-col md:flex-row items-center justify-between  ">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src={rolls}
                        alt="Steel Rolls"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg  "
                    />
                </div>
                <div className="w-full md:w-1/2 bg-[#323232] p-16 rounded-lg  ">
                    <div className="text-left mb-10">
                        <button className="bg-[#252525] text-yellow-400 px-4 py-2 rounded-md text-sm">CONTACT US/BOOK AN APPOINTMENT</button>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mt-4">{data.title}</h2>
                        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">CONTACT US</h2>
                    </div>
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" placeholder={data.form.firstNamePlaceholder} className="w-full md:w-1/2 p-3 bg-[#424242] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            <input type="text" placeholder={data.form.lastNamePlaceholder} className="w-full md:w-1/2 p-3 bg-[#424242] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        </div>
                        <input type="email" placeholder={data.form.emailPlaceholder} className="w-full p-3 bg-[#424242] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <textarea placeholder={data.form.messagePlaceholder} className="w-full p-3 bg-[#424242] rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
                        <button className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-600 transition">{data.form.buttonText}</button>
                    </form>
                </div>
            </div>
            {/* <div className="bg-[#252525] p-8 mt-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-300">
                <div className="text-left md:w-1/3">
                    <h2 className="text-xl font-bold text-yellow-400">{data.footer.companyName}</h2>
                    <p className="mt-2">{data.footer.companyDescription}</p>
                    <div className="mt-4 flex items-center">
                        <input type="email" placeholder={data.footer.emailPlaceholder} className="p-2 bg-[#313131] rounded-l-lg focus:outline-none" />
                        <button className="bg-yellow-500 px-4 py-2 rounded-r-lg text-gray-900 font-semibold">{data.footer.subscribeButton}</button>
                    </div>
                </div>
                <div className="text-left md:w-1/3 mt-6 md:mt-0 text-center">
                    <h3 className="text-lg font-bold text-white">Our Information</h3>
                    <p className="mt-2 flex items-center justify-center gap-2"><FaEnvelope className="text-yellow-400" /> {data.footer.contactEmail}</p>
                    {data.footer.phoneNumbers.map((phone, index) => (
                        <p key={index} className="flex items-center justify-center gap-2"><FaPhoneAlt className="text-yellow-400" /> {phone}</p>
                    ))}
                    <p className="flex items-center justify-center gap-2"><FaMapMarkerAlt className="text-yellow-400" /> {data.footer.address}</p>
                </div>
                <div className="text-left md:w-1/3 mt-6 md:mt-0 text-center">
                    <h3 className="text-lg font-bold text-white">{data.footer.followUs}</h3>
                    <div className="flex justify-center gap-4 mt-2">
                        <a href="#" className="text-2xl"><FaLinkedinIn className="text-yellow-400" /></a>
                        <a href="#" className="text-2xl"><FaFacebookF className="text-yellow-400" /></a>
                        <a href="#" className="text-2xl"><FaTwitter className="text-yellow-400" /></a>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ContactSection;