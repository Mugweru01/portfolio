
// pages/index.js
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Background.jpg')" }}
      >
        {/* Gradient overlay for enhanced depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
            I'm Edwin Wachira
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            IT Support Specialist | Data Analyst | Customer Service | CRM Admin
          </p>
          <div className="space-x-4 mb-12">
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-[#C9B037] text-black font-bold rounded-lg transition transform hover:scale-105 hover:bg-[#FFD700]"
            >
              About Me
            </Link>
            <Link
              href="/resume"
              className="inline-block px-8 py-3 bg-[#C9B037] text-black font-bold rounded-lg transition transform hover:scale-105 hover:bg-[#FFD700]"
            >
              My Resume
            </Link>
          </div>
          {/* Scroll down indicator */}
          <div className="absolute bottom-10">
            <a href="#next-section">
              <FaArrowDown className="text-[#C9B037] animate-bounce text-3xl" />
            </a>
          </div>
        </div>
      </section>
      
      {/* More About Me Section */}
      <section
        id="next-section"
        className="min-h-screen bg-black text-white flex items-center justify-center"
      >
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-5xl font-bold mb-6 border-b-4 border-[#C9B037] inline-block pb-2">
            More About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            I am a dedicated IT Support Specialist with over 2.5 years of hands-on experience in technical support, data analysis, and customer service. Currently advancing my expertise through a Data Science course alongside pursuing a Bachelor's in Computer Science, I transform technical challenges into innovative, full‑stack solutions. By blending data-driven insights with creative problem-solving, I empower organizations to achieve a smarter, more efficient tomorrow.
          </p>
          <p className="text-lg italic">
            "Innovation is my canvas and technology, my brush – every challenge inspires a masterpiece."
          </p>
        </div>
      </section>
    </>
  );
}