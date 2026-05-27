import {
  FaHandshake,
  FaMedal,
  FaLightbulb,
  FaUsers,
  FaHandsHelping,
  FaShieldAlt
} from 'react-icons/fa';

const values = [
  {
    icon: FaHandshake,
    title: "Integrity",
    desc: "We uphold honesty and transparency in every project and interaction."
  },
  {
    icon: FaMedal,
    title: "Excellence",
    desc: "We pursue the highest standards in quality, craftsmanship, and service."
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    desc: "We embrace modern technology and sustainable practices for better outcomes."
  },
  {
    icon: FaUsers,
    title: "Customer Satisfaction",
    desc: "Our clients are at the center of everything we do."
  },
  {
    icon: FaHandsHelping,
    title: "Teamwork",
    desc: "We achieve more together through collaboration and mutual respect."
  },
  {
    icon: FaShieldAlt,
    title: "Accountability",
    desc: "We take ownership of our work and deliver on every promise."
  },
];

const CoreValues = () => {
  return (
    <div className="py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A_0.8px,transparent_1px)] [background-size:40px_40px] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1E3A8A] tracking-tighter">
            Our Core Values
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            The principles that guide every decision, every project, and every relationship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-10 border border-transparent hover:border-[#F97316]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                {/* Icon with Glow Effect */}
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 to-[#F97316]/10 rounded-3xl group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative w-24 h-24 bg-white rounded-3xl shadow-md flex items-center justify-center border border-gray-100">
                    <Icon className="text-6xl text-[#1E3A8A] group-hover:text-[#F97316] transition-all duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-center text-[#1E3A8A] mb-4 tracking-tight">
                  {value.title}
                </h3>

                <p className="text-center text-gray-600 leading-relaxed text-[15.5px] min-h-[100px]">
                  {value.desc}
                </p>

                {/* Subtle Bottom Accent */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-[3px] w-12 bg-gradient-to-r from-transparent via-[#F97316] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        {/* Inspirational Footer */}
        <div className="text-center mt-20">
          <div className="inline-block border border-gray-200 rounded-2xl px-8 py-4">
            <p className="italic text-gray-500">
              "Our values are the foundation upon which we build trust, quality, and lasting legacies."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
