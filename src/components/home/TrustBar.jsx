import { FaCalendarAlt, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const TrustBar = () => {
  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">

          {/* Established */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A]/5 to-[#1E3A8A]/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-inner">
              <FaCalendarAlt className="text-5xl text-[#1E3A8A]" />
            </div>
            <p className="text-xs tracking-[2px] text-gray-500 font-semibold mb-1">ESTABLISHED</p>
            <p className="text-5xl font-bold text-[#1E3A8A] tracking-tighter">2014</p>
          </div>

          {/* Projects Completed */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F97316]/5 to-[#F97316]/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-inner">
              <FaBuilding className="text-5xl text-[#F97316]" />
            </div>
            <p className="text-xs tracking-[2px] text-gray-500 font-semibold mb-1">PROJECTS COMPLETED</p>
            <p className="text-5xl font-bold text-[#F97316] tracking-tighter">50+</p>
          </div>

          {/* Serving Nationwide */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A]/5 to-[#1E3A8A]/10 rounded-3xl flex
            items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-inner">
              <FaMapMarkerAlt className="text-5xl text-[#1E3A8A]" />
            </div>
            <p className="text-xs tracking-[2px] text-gray-500 font-semibold mb-1">SERVING</p>
            <p className="text-5xl font-bold text-[#1E3A8A] tracking-tighter">Nationwide</p>
          </div>

          {/* Quality Assurance */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F97316]/5 to-[#F97316]/10 rounded-3xl flex items-center
            justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-inner">
              <MdVerified className="text-5xl text-[#F97316]" />
            </div>
            <p className="text-xs tracking-[2px] text-gray-500 font-semibold mb-1">QUALITY ASSURED</p>
            <p className="text-5xl font-bold text-[#F97316] tracking-tighter">100%</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustBar;
