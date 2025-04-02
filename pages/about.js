
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaGithub, 
  FaInstagram, 
  FaTiktok 
} from "react-icons/fa";
import resumeData from "../data/resumeData";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-8 bg-black">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-6 text-[#C9B037]">About Me</h2>
      
      {/* Main Card */}
      <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-105 flex flex-col md:flex-row items-center">
        {/* Profile Photo */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mr-0 md:mr-6 mb-4 md:mb-0">
          <img 
            src="/images/profile.jpg" 
            alt="Profile Photo" 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* Text and Details */}
        <div className="flex-1 relative">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Dedicated IT Support Specialist with over 3.5 years of experience in technical support, data analysis, and customer service. Currently advancing technical expertise through a Data Science Course and a Bachelor's in Computer Science.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I have a strong background in IT asset management, data analysis, and customer support, and I am always eager to learn and grow in the ever-evolving tech landscape.
          </p>
          <p className="text-xl font-semibold text-[#C9B037] mb-4">
            Empowering technology for a more efficient tomorrow.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/edwin-wachira24" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className="text-white hover:text-[#C9B037] transition" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={28} className="text-white hover:text-[#C9B037] transition" />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={28} className="text-white hover:text-[#C9B037] transition" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className="text-white hover:text-[#C9B037] transition" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={28} className="text-white hover:text-[#C9B037] transition" />
            </a>
            <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={28} className="text-white hover:text-[#C9B037] transition" />
            </a>
          </div>
          {/* Call-to-Action Button */}
          <div>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-[#005F3C] text-white font-semibold rounded hover:bg-[#003D29] transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
