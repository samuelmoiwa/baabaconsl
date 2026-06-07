import {
  FaHome,
  FaChurch,
  FaWater,
  FaCubes,
  FaTools,
  FaSolarPanel
} from 'react-icons/fa';

const services = [
  {
    title: "Residential Buildings",
    icon: FaHome,
    desc: "Luxury homes, estates, and modern residential developments",
    color: "#1E3A8A"
  },
  {
    title: "Chapels & Churches",
    icon: FaChurch,
    desc: "Beautiful religious structures and worship centres",
    color: "#F97316"
  },
  {
    title: "Borehole Drilling",
    icon: FaWater,
    desc: "Reliable water solutions for communities and institutions",
    color: "#1E3A8A"
  },
  {
    title: "Block Making",
    icon: FaCubes,
    desc: "High-quality building blocks and construction materials",
    color: "#F97316"
  },
  {
    title: "Woodworks",
    icon: FaTools,
    desc: "Custom doors, windows, furniture and joinery works",
    color: "#1E3A8A"
  },
  {
    title: "Solar Installations",
    icon: FaSolarPanel,
    desc: "Sustainable solar power systems and renewable energy",
    color: "#F97316"
  },
];

const ServicesOverview = () => {
  return (
    <div className="sm:py-24 py-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-2.5 rounded-full border border-gray-100 shadow-sm mb-6">
            <span className="text-2xl">🏗️</span>
            <span className="font-semibold tracking-widest text-[#1E3A8A]">OUR EXPERTISE</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#1E3A8A] tracking-tighter">
            Comprehensive Construction Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we deliver excellence across all areas of construction
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <div
                key={i}
                className="group bg-white border border-gray-100 hover:border-[#F97316] rounded-3xl p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110"
                     style={{ backgroundColor: `${service.color}10` }}>
                  <IconComponent
                    className="text-5xl transition-all duration-500"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-[17px]">
                  {service.desc}
                </p>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] w-0 group-hover:w-full transition-all duration-500"></div>

                {/* Learn More Button */}
                <button className="mt-8 text-[#F97316] font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm tracking-wider hover:text-[#EA580C]">
                  LEARN MORE
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.location.href = '/services'}
          className="bg-[#1E3A8A] hover:bg-[#172E6B] text-white px-12 py-5 rounded-3xl font-semibold
          text-lg transition-all duration-300 shadow-lg shadow-[#1E3A8A]/30 hover:shadow-xl hover:cursor-pointer">
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
