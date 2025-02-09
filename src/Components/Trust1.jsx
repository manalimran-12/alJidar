import Image from 'next/image';
import trust1 from '../public/trust1.png';
import trust2 from '../public/trust2.png';
import data from "../public/data.js";

export default function TrustSection() {
  return (
    <section className="flex flex-col md:flex-row items-stretch bg-yellow-500 text-white">
      {/* Left Image */}
      <div className="w-full md:w-1/3">
        <Image
          src={trust1}
          alt="Steel Manufacturing"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Text */}
      <div className="w-full md:w-1/3 px-8 flex flex-col justify-center items-start text-left relative">
        <h2 className="text-3xl lg:text-4xl font-light leading-tight tracking-wide">
          {data.trust.heading1}<br />
          {data.trust.heading2}
        </h2>
        {/* Animated Arrow Button */}
        <button className="absolute bottom-6 right-6 bg-white rounded-full p-3 hover:bg-opacity-90 transition-all group">
          <svg
            className="w-5 h-5 transform rotate-45 text-yellow-500 transition-transform duration-300 group-hover:rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/3">
        <Image
          src={trust2}
          alt="Steel Products"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
