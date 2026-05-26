import { FaArrowRight, FaPhone, FaWhatsapp } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <div className="py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center px-6 relative">
        <div className="inline-flex items-center gap-3 bg-[#F97316]/10 text-[#F97316] px-6 py-3 rounded-full mb-6">
          <span className="text-2xl">🏗️</span>
          <span className="font-semibold tracking-wider">NEXT PROJECT STARTS HERE</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-[#1E3A8A] leading-tight tracking-tighter">
          Ready to Build Something<br />Great Together?
        </h2>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          From concept to completion, Baabacon SL delivers excellence in every project.
          Let’s bring your vision to life.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button className="group bg-[#1E3A8A] hover:bg-[#172E6B] text-white px-12 py-5 rounded-3xl text-lg
          font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl shadow-[#1E3A8A]/30
          hover:shadow-xl hover:cursor-pointer hover:-translate-y-1">
            Request a Free Consultation
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="group border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316]
          hover:text-white px-10 py-5 rounded-3xl text-lg font-semibold transition-all duration-300 flex
          items-center gap-3 hover:cursor-pointer">
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-600">
          <div className="flex items-center gap-3">
            <FaPhone className="text-[#F97316]" />
            <div>
              <p className="text-sm">Call Us</p>
              <p className="font-semibold text-[#1E3A8A]">+232 78 661 031</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-300"></div>

          <div>
            <p className="text-sm">Email Us</p>
            <a href="mailto:info@baabaconsl.com" className="font-semibold text-[#1E3A8A] hover:text-[#F97316] transition-colors">
              info@baabaconsl.com
            </a>
          </div>
        </div>

        {/* Trust Line */}
        <p className="mt-12 text-sm text-gray-500 tracking-widest">
          FAST RESPONSE • TRANSPARENT PRICING • QUALITY GUARANTEED
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
