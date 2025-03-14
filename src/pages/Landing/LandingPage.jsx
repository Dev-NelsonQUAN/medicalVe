import { useState, useEffect } from "react";
import {
  FaCapsules,
  FaWarehouse,
  FaPhoneAlt,
  FaClipboardList,
  FaNewspaper,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import FeatureCard from "../../ui/FeatureCard";
import CTAButton from "../../ui/CTAButton";
import MissionItem from "../../ui/missionPros";
import aboutImg from "../../assets/2650.jpg";
import missionPht1 from "../../assets/433.jpg";
import missionPht2 from "../../assets/433.jpg";
import missionPht3 from "../../assets/43715.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const Nav = useNavigate()
  const [navBg, setNavBg] = useState("bg-blue-700 text-white");
  const [btnStyle, setBtnStyle] = useState("bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-none");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg("bg-white shadow-md text-blue-700");
        setBtnStyle("bg-blue-700 text-white hover:bg-blue-800");
      } else {
        setNavBg("bg-blue-700 text-white");
        setBtnStyle("bg-white text-blue-500 hover:bg-blue-500 hover:text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <nav className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center transition-all duration-300 ${navBg} z-50`}>
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("hero")}>MedGet</h1>
        <div className="hidden md:flex gap-6">
          <button onClick={() => scrollToSection("about")} className="hover:text-blue-500">About</button>
          <button onClick={() => scrollToSection("mission")} className="hover:text-blue-500">Mission</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-blue-500">Services</button>
          <button onClick={() => scrollToSection("blogs")} className="hover:text-blue-500">Blogs</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500">Contact</button>
        </div>
        <CTAButton 
          onClick={() => Nav('/selection')}
        text="Sign Up" className={btnStyle} />
      </nav>

      <section id="hero" className="bg-blue-700 text-white text-center py-24 px-4 mt-16">
        <h1 className="text-5xl font-bold mb-4">Find & Manage Pharmacy Stock Easily</h1>
        <p className="text-lg mb-6">Locate nearby pharmacies and keep stock updated seamlessly.</p>
        <div className="flex justify-center gap-4">
          <CTAButton text="Get Started" className="bg-white text-blue-700 hover:bg-gray-200" />
          <CTAButton text="Learn More" className="border border-white text-white hover:bg-white hover:text-blue-700" />
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img src={aboutImg} alt="About MedicalVe" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">About MedicalVe</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              MedicalVe is a pharmacy locator and stock management system that helps users find the nearest pharmacies and allows pharmacies to efficiently manage their stock.
            </p>
            <CTAButton text="Learn More" className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition" />
          </div>
        </div>
      </section>

      <section id="mission" className="bg-gray-100 text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionItem image={missionPht1} text="Bridging the gap between pharmacies and users." />
          <MissionItem image={missionPht2} text="Helping pharmacies efficiently manage stock." />
          <MissionItem image={missionPht3} text="Providing real-time data and analytics." />
        </div>
      </section>

      <section id="services" className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={FaCapsules} title="Pharmacy Locator" description="Find the nearest pharmacy with just a few clicks." />
          <FeatureCard icon={FaWarehouse} title="Inventory Management" description="Pharmacies can update stock levels and manage inventory easily." />
          <FeatureCard icon={FaClipboardList} title="Order Tracking" description="Users can check medicine availability before purchasing." />
        </div>
        <div className="mt-10">
          <CTAButton text="Explore Services" className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition" />
        </div>
      </section>

      <section id="blogs" className="bg-gray-100 text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={FaNewspaper} title="Medicine Stock Management" description="Learn how pharmacies manage inventory to prevent shortages." />
          <FeatureCard icon={FaNewspaper} title="Finding the Right Pharmacy" description="Discover tips on choosing the best pharmacy for your needs." />
          <FeatureCard icon={FaNewspaper} title="Healthcare Trends in 2025" description="Stay updated with the latest innovations in the pharmaceutical industry." />
        </div>
        <div className="mt-10">
          <CTAButton text="Read More Insights" className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition" />
        </div>
      </section>

      <section id="contact" className="bg-gray-200 text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Need Assistance?</h2>
        <p className="text-lg mb-6">We are here to help. Contact us anytime for support.</p>
        <div className="flex justify-center gap-4">
          <FaPhoneAlt className="text-blue-700 text-4xl" />
          <p className="text-xl font-semibold text-gray-900">+234 814 868 9539</p>
        </div>
      </section>

      <section className="bg-blue-700 text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Join MedGet Today!</h2>
        <CTAButton
          text="Sign Up"
          OnClick={() => Nav('/selection')}
          className="bg-white text-blue-700 hover:bg-gray-200"
        />
      </section>

      <footer className="bg-blue-950 text-white p-8">
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

export default LandingPage;
