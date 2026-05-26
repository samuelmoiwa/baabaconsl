import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

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
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`nav-link relative py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-[#1E3A8A] font-semibold'
                    : 'hover:text-[#1E3A8A]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F97316] rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-[#1E3A8A] hover:bg-[#172E6B] text-white px-9 py-3.5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#1E3A8A]/40 active:scale-95">
              Get a Quote
            </button>
          </div>

          {/* Animated Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center z-50"
            aria-label="Toggle menu"
          >
            <div className={`space-y-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`block w-6 h-0.5 bg-[#1E3A8A] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#1E3A8A] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#1E3A8A] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-2xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1E3A8A]">BAABACON</h1>
                <p className="text-[#F97316] text-xs">SL LTD.</p>
              </div>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <FaTimes size={24} className="text-gray-600" />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-2xl transition-all ${
                  isActive(link.path)
                    ? 'bg-[#1E3A8A] text-white font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-[#1E3A8A] text-white py-4 rounded-2xl font-semibold text-lg hover:bg-[#172E6B] transition-all"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
