import {
  FaUsers,
  FaDollarSign,
  FaClock,
  FaHardHat
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaUsers,
      title: "Experienced Professionals",
      desc: "Skilled engineers, architects, and project managers with years of expertise"
    },
    {
      icon: FaDollarSign,
      title: "Affordable Excellence",
      desc: "Premium quality construction at competitive and transparent prices"
    },
    {
      icon: FaClock,
      title: "On-Time Delivery",
      desc: "Strict project timelines and efficient execution you can rely on"
    },
    {
      icon: FaHardHat,
      title: "Safety First",
      desc: "Uncompromising commitment to health, safety, and industry best practices"
    },
  ];

  return (
    <div className="py-24 bg-[#1E3A8A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
            <span className="text-[#F97316] text-2xl">🏆</span>
            <span className="uppercase tracking-widest font-semibold text-sm">Why Clients Trust Us</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
            Why Choose <span className="text-[#F97316]">Baabacon?</span>
          </h2>
          <p className="mt-4 text-xl text-white/70 max-w-xl mx-auto">
            We don’t just build structures — we build lasting relationships
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-lg border border-white/10 hover:border-[#F97316] rounded-3xl p-10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-white/15"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#F97316] transition-all duration-500 group-hover:scale-110">
                  <IconComponent className="text-5xl text-white group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-center mb-4 tracking-tight min-h-[56px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/75 text-center leading-relaxed text-[17px]">
                  {item.desc}
                </p>

                {/* Decorative Bottom Accent */}
                <div className="h-1 w-12 bg-[#F97316] mx-auto mt-10 rounded-full group-hover:w-20 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Statement */}
        <div className="text-center mt-16 text-white/60 text-sm tracking-widest">
          PROVEN • PROFESSIONAL • PASSIONATE
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
