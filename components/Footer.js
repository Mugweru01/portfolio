
// components/Footer.js
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* Top (White) Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Text */}
          <p className="text-black text-sm uppercase mb-4 md:mb-0">
            Heard enough?
          </p>

          {/* Center Heading */}
          <div className="text-center">
            <h2 className="text-black text-3xl font-bold">Contact Us</h2>
            <div className="w-16 h-1 bg-[#C9B037] mx-auto mt-2"></div>
          </div>
        </div>
      </div>

      {/* Middle/Bottom (Black) Section */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold">
              Full-Stack Solutions for Brands That Can't Wait.&reg;
            </h3>
            <p className="mt-2">
              +254 706 551 604 <br />
              Nairobi, Kenya <br />
              Westlands, 00100
            </p>
            <p className="mt-2">
              <a href="#" className="underline hover:text-[#C9B037]">
                SEE ON MAP &gt;
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold">Nanyuki</h3>
            <p className="mt-2">
              +254 706 551 604 <br />
              Nanyuki, Kenya <br />
              Nanyuki 10400
            </p>
            <p className="mt-2">
              <a href="#" className="underline hover:text-[#C9B037]">
                SEE ON MAP &gt;
              </a>
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <p className="font-semibold mb-2">
              WANT TO BE THE SMARTEST IN YOUR OFFICE?
            </p>
            <p>
              <a href="#" className="underline hover:text-[#C9B037]">
                SIGN UP FOR OUR NEWSLETTER &gt;
              </a>
            </p>
            <p className="mt-4 font-semibold">Follow us</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/in/edwin-wachira24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9B037]"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/mugweru_wachir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9B037]"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://facebook.com/mugweruwachira"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9B037]"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://github.com/Mugweru01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9B037]"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://instagram.com/mugweru_Wachira"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9B037]"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@wachira"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9B037]"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-gray-500 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Edwin Wachira. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

