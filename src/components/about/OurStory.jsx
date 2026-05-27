import { FaCalendarAlt, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';

const OurStory = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Story Content */}
          <div>
            <div className="mb-10">
              <h2 className="text-5xl font-bold text-[#1E3A8A] leading-tight tracking-tighter">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] mt-4"></div>
            </div>

            <div className="space-y-12">
              {/* Our Beginning */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FaCalendarAlt className="text-3xl text-[#1E3A8A]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">Our Humble Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Founded on <span className="font-medium text-[#1E3A8A]">September 4, 2014</span>,
                    Baabacon SL Limited began as a small local contractor with only five dedicated employees.
                    We started with building renovations and borehole drilling, driven by a passion for quality.
                  </p>
                </div>
              </div>

              {/* Why We Were Created */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#F97316]/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FaHandshake className="text-3xl text-[#F97316]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">Our Purpose</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We were created to bridge the gap in reliable, affordable, and high-quality construction
                    services in Sierra Leone. Our mission has always been to contribute meaningfully to the
                    nation’s infrastructure development.
                  </p>
                </div>
              </div>

              {/* Growth Journey */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FaChartLine className="text-3xl text-[#1E3A8A]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">Our Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    By 2020, through unwavering commitment to quality, timely delivery, and customer satisfaction,
                    we had successfully completed major projects including hospital renovations, church constructions,
                    and private residences. Today, we stand as a respected name in Sierra Leone’s construction industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Timeline / Highlights */}
          <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-10">
              <FaUsers className="text-5xl text-[#F97316]" />
              <div>
                <p className="uppercase tracking-widest text-sm text-gray-500 font-medium">FROM 5 TO</p>
                <p className="text-4xl font-bold text-[#1E3A8A]">A Trusted Team</p>
              </div>
            </div>

            <div className="space-y-8 border-l-2 border-[#F97316]/30 pl-8">
              <div>
                <p className="text-sm text-gray-500">2014</p>
                <p className="font-semibold">Company Founded</p>
                <p className="text-sm text-gray-600">Started with 5 employees</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">2018 - 2020</p>
                <p className="font-semibold">Major Projects Delivered</p>
                <p className="text-sm text-gray-600">Hospital ICU, Church Centres & Private Homes</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">2021 - Present</p>
                <p className="font-semibold">National Recognition</p>
                <p className="text-sm text-gray-600">Expanded services and nationwide presence</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="italic text-gray-600 text-center">
                "Our journey is defined not just by buildings constructed, but by trust earned."
              </p>
              <p className="text-center text-sm text-[#1E3A8A] mt-4 font-medium">- Baabacon SL Limited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
