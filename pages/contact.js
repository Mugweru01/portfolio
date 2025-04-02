
import { useState } from "react"; 
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebookF, 
  FaGithub, 
  FaInstagram, 
  FaTiktok 
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // API integration can be added here
      console.log("Contact Form Submitted", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // API integration for newsletter subscription can be added here
    console.log("Newsletter subscription email:", newsletterEmail);
    setNewsletterSubmitted(true);
    setNewsletterEmail("");
  };

  return (
    <section className="container mx-auto px-4 py-8 bg-black">
      <h2 className="text-3xl font-bold mb-6 text-[#C9B037] text-center">
        Get in Touch
      </h2>
      
      {submitted && (
        <p className="mb-4 text-green-500 text-center">
          Thank you for your message!
        </p>
      )}
      
      {/* Contact Form with Glassmorphism */}
      <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-[#C9B037] focus:shadow-lg transition"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-[#C9B037] focus:shadow-lg transition"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-[#C9B037] focus:shadow-lg transition"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#C9B037] text-black font-bold rounded hover:bg-[#FFD700] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="mt-12 max-w-2xl mx-auto bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">
          Subscribe to my Newsletter
        </h3>
        {newsletterSubmitted && (
          <p className="mb-4 text-green-500 text-center">
            Thank you for subscribing!
          </p>
        )}
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Your email address"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            className="w-full sm:flex-1 p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-[#C9B037] focus:shadow-lg transition"
            required
          />
          <button
            type="submit"
            className="py-3 px-6 bg-[#C9B037] text-black font-bold rounded hover:bg-[#FFD700] transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Social Media Icons with Hover Animations */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-white mb-4">
          Connect with me
        </h3>
        <div className="flex items-center justify-center space-x-6">
          {[
            { link: "https://www.linkedin.com/in/edwin-wachira24", icon: <FaLinkedin size={32} /> },
            { link: "https://twitter.com/mugweru_wachir", icon: <FaTwitter size={32} /> },
            { link: "https://facebook.com/mugweruwachira", icon: <FaFacebookF size={32} /> },
            { link: "https://github.com/mugweru01", icon: <FaGithub size={32} /> },
            { link: "https://instagram.com/mugweru_Wachira", icon: <FaInstagram size={32} /> },
            { link: "https://tiktok.com/@wachira", icon: <FaTiktok size={32} /> }
          ].map(({ link, icon }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social Media Link"
              className="text-[#C9B037] hover:text-[#FFD700] transition transform hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
