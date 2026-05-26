import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#1E3A8A] rounded-2xl flex items-center justify-center">
                <span className="text-white text-4xl font-bold">B</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tighter">BAABACON</h2>
                <p className="text-[#F97316] text-sm font-semibold tracking-widest">SL LIMITED</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-[15.5px] pr-6">
              Trusted construction company delivering excellence in residential, commercial,
              and civil engineering projects across Sierra Leone since 2014.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3.5 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3.5 text-gray-400">
              <li>Residential Buildings</li>
              <li>Chapels & Religious Structures</li>
              <li>Borehole Drilling</li>
              <li>Block Making</li>
              <li>Woodworks & Furniture</li>
              <li>Solar Installations</li>
              <li>Machinery Rental</li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Get In Touch</h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#F97316]" />
                <div>
                  <p className="text-[#F97316] text-sm">Email</p>
                  <a href="mailto:info@baabaconsl.com" className="hover:text-white transition-colors">
                    info@baabaconsl.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone className="mt-1 text-[#F97316]" />
                <div>
                  <p className="text-[#F97316] text-sm">Phone</p>
                  <p>+232 78 661 031</p>
                  <p>+232 76 136 564</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#F97316]" />
                <div>
                  <p className="text-[#F97316] text-sm">Location</p>
                  <p>Freetown, Sierra Leone</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <p className="text-[#F97316] text-sm mb-4 font-medium">Follow Us</p>
              <div className="flex gap-5">
                <a
                  href="#"
                  target="_blank"
                  className="w-11 h-11 bg-white/10 hover:bg-[#F97316] flex items-center justify-center rounded-2xl transition-all hover:scale-110"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-11 h-11 bg-white/10 hover:bg-[#F97316] flex items-center justify-center rounded-2xl transition-all hover:scale-110"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-11 h-11 bg-white/10 hover:bg-[#F97316] flex items-center justify-center rounded-2xl transition-all hover:scale-110"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-20 pt-8 text-center text-sm text-gray-500">
          © 2026 Baabacon SL Limited. All Rights Reserved.
          <span className="mx-2">|</span>
          Built with Excellence in Sierra Leone
        </div>
      </div>
    </footer>
  );
};

export default Footer;
