import {
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaClock,
} from 'react-icons/fa';

import { Player } from '@lottiefiles/react-lottie-player';
import construction from '../../lottiefiles/construction.json';

const CompanyOverview = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Lottie Animation */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-sm bg-gray-50 p-6 min-h-[450px] flex items-center justify-center">
              <Player
                autoplay
                loop
                src={construction}
                className="w-full h-full"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#1E3A8A] rounded-xl flex items-center justify-center">
                  <FaAward className="text-3xl text-white" />
                </div>

                <div>
                  <p className="font-semibold text-[#1E3A8A]">
                    10+ Years
                  </p>
                  <p className="text-sm text-gray-600">
                    of Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-5xl font-bold text-[#1E3A8A] leading-tight tracking-tighter">
                Who We Are
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] mt-4"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Baabacon SL Limited is a trusted and reputable construction company
              dedicated to delivering high-quality building solutions with
              professionalism, safety, and excellence. Our team is committed to
              creating durable, innovative, and aesthetically pleasing structures
              that meet and exceed client expectations.
            </p>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">

              {/* Expert Team */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-3xl text-[#1E3A8A]" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Expert Team
                  </h4>

                  <p className="text-gray-600 text-[15px]">
                    Skilled engineers, architects, and project managers
                  </p>
                </div>
              </div>

              {/* Safety First */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-3xl text-[#F97316]" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Safety First
                  </h4>

                  <p className="text-gray-600 text-[15px]">
                    Strict adherence to international safety standards
                  </p>
                </div>
              </div>

              {/* Timely Delivery */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-3xl text-[#1E3A8A]" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Timely Delivery
                  </h4>

                  <p className="text-gray-600 text-[15px]">
                    Projects completed on schedule with excellence
                  </p>
                </div>
              </div>

              {/* Quality Commitment */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaAward className="text-3xl text-[#F97316]" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Quality Commitment
                  </h4>

                  <p className="text-gray-600 text-[15px]">
                    Using only the best materials and craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
