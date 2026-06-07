import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import AboutTeaser from "../components/home/AboutTeaser"
import CallToAction from "../components/home/CallToAction"
import FeaturedProjects from "../components/home/FeaturedProjects"
import HeroBanner from "../components/home/HeroBanne"
import MissionValues from "../components/home/MissionValues"
import ServicesOverview from "../components/home/ServicesOverview"
import Testimonials from "../components/home/Testimonials"
import TrustBar from "../components/home/TrustBar"
import WhyChooseUs from "../components/home/WhyChooseUs"

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track page scroll to toggle button visibility parameters
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Native window scroll executor
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <HeroBanner />
      <TrustBar />
      <AboutTeaser />
      <ServicesOverview />
      <WhyChooseUs />
      <div id="projects">
        <FeaturedProjects />
      </div>
      <Testimonials />
      <MissionValues />
      <div id="contact">
        <CallToAction />
      </div>

      {/* ================= FLOATING SCROLL TO TOP BUTTON ================= */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-[#1E3A8A] hover:bg-[#F97316] text-white
          shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 focus:outline-none group border
          border-white/10 hover:cursor-pointer ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        aria-label="Scroll to top of page"
      >
        <FaArrowUp className="text-base transition-transform duration-300 group-hover:scale-110" />
      </button>
    </div>
  )
}

export default HomePage;
