const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#1E3A8A] rounded-2xl flex items-center justify-center">
                <span className="text-white text-4xl font-bold">B</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">BAABACON</h2>
                <p className="text-[#F97316] text-sm font-semibold">SL LIMITED</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-[15px]">
              Trusted construction company delivering excellence in residential, commercial,
              and civil engineering projects across Sierra Leone since 2014.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Residential Buildings</li>
              <li>Chapels & Religious Structures</li>
              <li>Borehole Drilling</li>
              <li>Block Making</li>
              <li>Woodworks & Furniture</li>
              <li>Solar Installations</li>
              <li>Machinery Rental</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Get In Touch</h3>

            <div className="space-y-4 text-gray-400">
              <div>
                <p className="text-[#F97316] text-sm">Email</p>
                <a href="mailto:info@baabaconsl.com" className="hover:text-white transition-colors">
                  info@baabaconsl.com
                </a>
              </div>

              <div>
                <p className="text-[#F97316] text-sm">Phone</p>
                <p>+232 78 661 031</p>
                <p>+232 76 136 564</p>
              </div>

              <div>
                <p className="text-[#F97316] text-sm">Location</p>
                <p>Freetown, Sierra Leone</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="text-[#F97316] text-sm mb-3">Follow Us</p>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:text-[#F97316] transition-colors">📘</a>
                <a href="#" className="hover:text-[#F97316] transition-colors">📸</a>
                <a href="#" className="hover:text-[#F97316] transition-colors">➕</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          © 2026 Baabacon SL Limited. All Rights Reserved. | Built with Excellence in Sierra Leone
        </div>
      </div>
    </footer>
  );
};

export default Footer;
