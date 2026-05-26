import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-[#1E3A8A] rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <span className="text-white text-3xl font-bold">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter text-[#1E3A8A]">
                BAABACON
              </h1>
              <p className="text-[#F97316] text-xs font-semibold -mt-1 tracking-widest">SL LTD.</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-9 text-[15px] font-medium">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About Us</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/projects" className="nav-link">Projects</a>
            <a href="/contact" className="nav-link">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#1E3A8A] hover:bg-[#172E6B] text-white px-9 py-3.5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#1E3A8A]/40 active:scale-95">
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-3xl text-[#1E3A8A] hover:scale-110 transition-transform">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
