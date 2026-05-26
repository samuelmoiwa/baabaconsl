import image_about from '../../images/2.jpeg';
import { FaCheckCircle, FaAward, FaUsers } from 'react-icons/fa';

const AboutTeaser = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/10 text-[#1E3A8A] px-5 py-2 rounded-full text-sm font-medium">
              <FaAward className="text-xl" />
              ESTABLISHED 2014
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-[#1E3A8A] leading-[1.05] tracking-tighter">
              Building Trust,<br />
              One Project at a Time
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Baabacon SL Limited is a trusted construction company dedicated to delivering
              high-quality building solutions with professionalism, safety, and excellence.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-2xl text-[#F97316] mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Quality Workmanship</p>
                  <p className="text-sm text-gray-500">Exceeding industry standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-2xl text-[#F97316] mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Timely Delivery</p>
                  <p className="text-sm text-gray-500">Projects completed on schedule</p>
                </div>
              </div>
            </div>

            <button className="group mt-6 bg-[#1E3A8A] hover:bg-[#172E6B] text-white px-10 py-5 rounded-3xl hover:cursor-pointer
            font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:shadow-xl hover:shadow-[#1E3A8A]/30">
              Learn Our Full Story
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image_about}
                alt="Baabacon SL Construction Team"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#F97316]/10 rounded-2xl flex items-center justify-center">
                  <FaUsers className="text-3xl text-[#F97316]" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1E3A8A]">50+</p>
                  <p className="text-sm text-gray-500">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F97316] rounded-3xl rotate-12 opacity-10 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeaser;
