import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import CTAButton from "../../ui/CTAButton";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <div className="container mx-auto max-w-3xl bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-center text-gray-600 mb-6">
          Have a question or need assistance? Get in touch with us.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
          ></textarea>
          <CTAButton
            text="Send Message"
            className="w-full bg-blue-700 text-white hover:bg-blue-800"
          />
        </form>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-blue-700">
            Contact Details
          </h3>
          <div className="mt-4 space-y-2">
            <p className="flex items-center justify-center gap-2 text-gray-700">
              <FaPhoneAlt /> +234 814 868 9539 / +234 902 207 2067
            </p>
            <p className="flex items-center justify-center gap-2 text-gray-700">
              <FaEnvelope /> support@medGet.com
            </p>
            <p className="flex items-center justify-center gap-2 text-gray-700">
              <FaMapMarkerAlt /> 123 MedGet Street, Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-blue-950 text-white p-8 mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">MedGet</h2>
            <p className="mt-2">
              Your trusted pharmacy locator & stock management system.
            </p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <FaFacebookF className="text-xl" />
              <FaTwitter className="text-xl" />
              <FaYoutube className="text-xl" />
              <FaInstagram className="text-xl" />
              <FaLinkedin className="text-xl" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Articles & News</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2 space-y-2">
              <li>Help Center</li>
              <li>My Account</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} MedGet. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
