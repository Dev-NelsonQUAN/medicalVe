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
import aboutImg from "../../assets/2006.i126.016..pharmacy.jpg";
import missionPht1 from "../../assets/43715.jpg";
import missionPht2 from "../../assets/433.jpg";
import missionPht3 from "../../assets/43715.jpg";
import { useNavigate } from "react-router-dom";
import heroimg from "../../assets/2650-removebg-preview.png";

const LandingPage = () => {
  const Nav = useNavigate();
  const [navBg, setNavBg] = useState("bg-blue-700 text-white");
  const [btnStyle, setBtnStyle] = useState(
    "bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-none"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg("bg-white shadow-md text-blue-700");
        setBtnStyle("bg-blue-700 text-white hover:bg-blue-800");
      } else {
        setNavBg("bg-blue-700 text-white");
        setBtnStyle(
          "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
        );
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
      <nav
        className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center transition-all duration-300 ${navBg} z-50`}
      >
        <h1 className="text-2xl font-bold cursor-pointer">MedGet</h1>
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("mission")}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Mission
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("blogs")}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Blogs
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-500"
          >
            Contact
          </button>
        </div>
        <CTAButton
          onClick={() => Nav("/selection")}
          text="Sign Up"
          className={btnStyle}
        />
      </nav>

      <section
        id="hero"
        className=" text-blue-600 py-28 px-4 mt-16 flex flex-col md:flex-row items-center justify-between "
      >
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold mb-4 max-lg:text-4xl">
            Find & Manage <br /> Pharmacy Stock  Easily
          </h1>
          <p className="text-lg mb-6 max-lg:text-[16px]">
            Locate nearby pharmacies and keep stock updated seamlessly.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <CTAButton
              text="Get Started"
              onClick={() => Nav("/selection")}
              className="border border-blue-700 text-blue-700 hover:bg-gray-200 transition duration-300"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex h-[400px] justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={heroimg}
            alt="Pharmacy Illustration"
            className="w-full max-w-full h-auto"
          />
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={aboutImg}
              alt="About MedicalVe"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              About MedGet
            </h2>
            <p className="text-lg max-lg:text-[15px] max-md:text-[14px] text-gray-800 leading-relaxed">
              MedGet is a pharmacy locator and stock management system that
              helps users find the nearest pharmacies and allows pharmacies to
              efficiently manage their stock.
            </p>
            <CTAButton
              text="Learn More"
              className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
            />
          </div>
        </div>
      </section>

      <section id="mission" className="bg-gray-100 text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionItem
            image={missionPht1}
            text="Bridging the gap between pharmacies and users."
          />
          <MissionItem
            image={missionPht2}
            text="Helping pharmacies efficiently manage stock."
          />
          <MissionItem
            image={missionPht3}
            text="Providing real-time data and analytics."
          />
        </div>
      </section>

      <section id="services" className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={FaCapsules}
            title="Pharmacy Locator"
            description="Easily find the nearest pharmacy with our advanced search and location-based system. Users can quickly locate verified pharmacies in their vicinity, ensuring they have access to essential medicines when they need them most. This feature eliminates the stress of visiting multiple pharmacies in search of a specific medication, saving time and improving convenience."
          />
          <FeatureCard
            icon={FaWarehouse}
            title="Inventory Management"
            description="Pharmacies can manage their stock efficiently using our digital tools. Our system provides real-time tracking of medicine availability, low-stock alerts, and automated inventory updates. This prevents stockouts, minimizes overstocking, and helps pharmacies optimize their inventory levels. By ensuring that medicines are always available when needed, pharmacies can build customer trust and improve overall healthcare services."
          />
          <FeatureCard
            icon={FaClipboardList}
            title="Order Tracking"
            description="Users can check the availability of medicines before heading to a pharmacy. This feature allows customers to verify if a pharmacy has their required medicine in stock, reducing wasted trips and enhancing customer satisfaction. For pharmacies, this improves customer service and streamlines operations by reducing inquiries about unavailable medicines."
          />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Meet the Team
          </h3>
          <p className="text-lg mb-6 max-lg:text-[15px] max-md:text-[14px]">
            MedGet is founded by two passionate individuals dedicated to
            transforming pharmacy accessibility and inventory management.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              className="bg-white text-xl p-6 text-blue-700 shadow-md rounded-lg text-center"
              title="Quadri Nelson"
              description="An expert in healthcare technology, committed to improving pharmacy services through innovation with a tech driven mindset."
            />
            <FeatureCard
              className="bg-white text-xl p-6 text-blue-700 shadow-md rounded-lg text-center"
              title="Ugwu Chinedu"
              description="A tech-driven entrepreneur focused on making medicine more accessible to users and pharmacies."
            />
          </div>
        </div>
      </section>

      <section id="blogs" className="bg-gray-100 text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={FaNewspaper}
            title="Optimizing Pharmacy Stock Management"
            description="Pharmacy stock management is a critical aspect of running a successful pharmacy. By using digital tools like MedGet, pharmacies can track stock levels in real time, receive automated low-stock alerts, and streamline the restocking process. Proper inventory management ensures that essential medicines are always available for customers, preventing shortages that could impact patient care. Additionally, efficient stock control reduces the risk of overstocking, which can lead to financial losses due to expired medications."
          />
          <FeatureCard
            icon={FaNewspaper}
            title="How MedGet Enhances Pharmacy Accessibility"
            description="Finding a pharmacy with the right medicine can be challenging, especially in urgent situations. MedGet bridge this gap by connecting users to the nearest verified pharmacies, allowing them to check real-time stock availability before visiting. This feature not only saves time but also improves healthcare efficiency by ensuring that users can access life-saving medications without unnecessary delays. Furthermore, pharmacies that list their stock on MedGet increase their visibility, attracting more customers and boosting sales."
          />
          <FeatureCard
            icon={FaNewspaper}
            title="The Role of Data Analytics in Pharmacy Operations"
            description="In the modern healthcare industry, data-driven decision-making is essential for optimizing operations. With real-time analytics and insights, pharmacies can identify trends in medicine demand, adjust pricing strategies, and optimize restocking schedules. MedGet provides pharmacies with detailed reports that help them track sales patterns, identify seasonal fluctuations in demand, and make informed purchasing decisions. By leveraging data analytics, pharmacies can improve efficiency, reduce waste, and enhance customer satisfaction."
          />
        </div>
      </section>

      <section id="contact" className="bg-gray-200 text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Need Assistance?
        </h2>
        <p className="text-lg mb-6 max-lg:text-[15px] max-md:text-[14px]">
          We are here to help. Contact us anytime for support.
        </p>
        <div className="flex justify-center gap-4">
          <FaPhoneAlt className="text-blue-700 text-4xl max-lg:text-[25px] max-md:text-[19px]" />
          <p className="text-xl font-semibold text-gray-900 max-lg:text-[15px] max-md:text-[14px]">
            +234 814 868 9539 / +234 902 207 2067
          </p>
        </div>
        <CTAButton
          text="Contact Us"
          onClick={() => Nav("/contact")}
          className="text-blue-700 border-blue-700 hover:bg-gray-200 mt-10 border"
        />
      </section>

      <section className="bg-blue-700 text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Join MedGet Today!</h2>
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
