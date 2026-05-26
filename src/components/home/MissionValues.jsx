import {
  FaHandshake,
  FaMedal,
  FaLightbulb,
  FaUsers,
  FaHandsHelping,
  FaShieldAlt
} from 'react-icons/fa';

const MissionValues = () => {
  const values = [
    {
      title: "Integrity",
      icon: FaHandshake,
      desc: "We uphold honesty and transparency in every project"
    },
    {
      title: "Excellence",
      icon: FaMedal,
      desc: "Delivering superior quality in all our work"
    },
    {
      title: "Innovation",
      icon: FaLightbulb,
      desc: "Embracing modern techniques and sustainable solutions"
    },
    {
      title: "Customer Satisfaction",
      icon: FaUsers,
      desc: "Putting our clients' needs first"
    },
    {
      title: "Teamwork",
      icon: FaHandsHelping,
      desc: "Collaborating for the best results"
    },
    {
      title: "Accountability",
      icon: FaShieldAlt,
      desc: "Taking full responsibility for our commitments"
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-[#1E3A8A] via-[#0F172A] to-[#1E3A8A] text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:50px_50px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Mission Statement */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-3xl border border-white/20">
              <span className="text-3xl">🎯</span>
              <span className="uppercase tracking-widest font-semibold text-[#F97316]">Our Mission</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              Building a Better<br />Sierra Leone
            </h2>

            <p className="text-xl text-white/80 leading-relaxed max-w-lg">
              To deliver reliable, high-quality construction services while contributing to the infrastructure
              development and progress of Sierra Leone.
            </p>

            <div className="pt-6 border-t border-white/20">
              <p className="text-white/70 italic">
                "Our goal is not just to construct buildings — but to build lasting trust and national development."
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-4xl font-semibold mb-10 text-center lg:text-left">Our Core Values</h3>

            <div className="grid grid-cols-2 sm:gap-6 gap-4">
              {values.map((value, i) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white/10 hover:bg-white/15 backdrop-blur-lg border border-white/10 hover:border-[#F97316] sm:p-8 p-4 rounded-3xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-white/10 group-hover:bg-[#F97316] rounded-2xl flex items-center justify-center mb-6 transition-all">
                      <IconComponent className="text-3xl text-white group-hover:text-white" />
                    </div>

                    <h4 className="sm:text-2xl text-lg font-semibold mb-3">{value.title}</h4>
                    <p className="text-white/70 sm:text-[15px] text-[13px] leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionValues;
