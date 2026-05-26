import { FaCalendarAlt, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const TrustBar = () => {
  return (
    <div className="bg-white py-8 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 text-center">

          {/* Established */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-[#1E3A8A]/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#1E3A8A]/10 transition-colors">
              <FaCalendarAlt className="text-4xl text-[#1E3A8A]" />
            </div>
            <p className="text-xs tracking-widest text-gray-500 font-medium">ESTABLISHED</p>
            <p className="text-4xl font-bold text-[#1E3A8A] mt-1">2014</p>
          </div>

          {/* Projects Completed */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-[#F97316]/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#F97316]/10 transition-colors">
              <FaBuilding className="text-4xl text-[#F97316]" />
            </div>
            <p className="text-xs tracking-widest text-gray-500 font-medium">PROJECTS COMPLETED</p>
            <p className="text-4xl font-bold text-[#F97316] mt-1">50+</p>
          </div>

          {/* Serving Nationwide */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-[#1E3A8A]/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#1E3A8A]/10 transition-colors">
              <FaMapMarkerAlt className="text-4xl text-[#1E3A8A]" />
            </div>
            <p className="text-xs tracking-widest text-gray-500 font-medium">SERVING</p>
            <p className="text-4xl font-bold text-[#1E3A8A] mt-1">Nationwide</p>
          </div>

          {/* Quality Assurance */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-[#F97316]/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#F97316]/10 transition-colors">
              <MdVerified className="text-4xl text-[#F97316]" />
            </div>
            <p className="text-xs tracking-widest text-gray-500 font-medium">QUALITY ASSURED</p>
            <p className="text-4xl font-bold text-[#F97316] mt-1">100%</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustBar;
