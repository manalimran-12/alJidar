import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from "../../public/logo.png";
import homeBackground from "../../public/home1.png";


export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen" >
      <header
        className="flex flex-col p-4 lg:px-12 bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${homeBackground.src})` }}
      >
        <div className="flex justify-end items-center gap-4 text-white text-sm">
          <MdPhone className="text-yellow-500" />
          <span>+966506258005</span>
          <MdEmail className="text-yellow-500" />
          <span>sales@aljidarsteelprofile.com</span>
          <FaFacebookF className="cursor-pointer" />
          <FaLinkedinIn className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <Image src={logo} alt="Logo" width={180} height={60} />
          <div className="flex items-center gap-6">
            <button className="text-white font-medium">Our Products</button>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded">Contact Us</button>
          </div>
        </div>
      </header>
      <section
        className="text-center px-4 lg:px-32 py-20 relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBackground.src})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h2 className="text-lg text-yellow-500">GYPSUM/DRYWALL STEEL PRODUCTS</h2>
          <h1 className="text-4xl md:text-6xl font-bold">
            DEDICATED TO SHAPING THE FUTURE THROUGH{' '}
            <span className="text-yellow-500">AL JIDAR STEEL</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-300">
            Al Jidar Steel Manufacturing is a joint venture of three co-founders specialized in the field of Gypsum/Drywall
            accessories like Stud, Runner, C-Channel, Wall Angle, Furring Channel (Omega). Established in Riyadh, Kingdom of{' '}
            <span className="text-yellow-500">Saudi Arabia in 2023</span> with a production capacity of{' '}
            <span className="text-yellow-500">500 Mt. Per Month.</span>
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center bg-yellow-500 text-black py-12 px-6 lg:px-32">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">TRUSTED, EXPERIENCED, QUALITY-DRIVEN</h2>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <Image src="/steel-products.jpg" alt="Steel Products" width={500} height={300} className="rounded-lg" />
        </div>
      </section>
    </div>
  );
}
