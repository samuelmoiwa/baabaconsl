import { FaCalendarAlt, FaBuilding, FaSmile, FaTools } from 'react-icons/fa';

const stats = [
  {
    value: "10+",
    label: "Years of Excellence",
    description: "Delivering top-tier building solutions across West Africa.",
    icon: <FaCalendarAlt />,
    borderColor: "hover:border-[#1E3A8A]"
  },
  {
    value: "50+",
    label: "Projects Completed",
    description: "From structural engineering to modern commercial spaces.",
    icon: <FaBuilding />,
    borderColor: "hover:border-[#F97316]"
  },
  {
    value: "100+",
    label: "Happy Clients",
    description: "Building lasting corporate relationships based on elite trust.",
    icon: <FaSmile />,
    borderColor: "hover:border-[#1E3A8A]"
  },
  {
    value: "5",
    label: "Core Services",
    description: "Comprehensive management from blueprints to final finishing.",
    icon: <FaTools />,
    borderColor: "hover:border-[#F97316]"
  }
];

const CompanyStatistics = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">

      {/* Engineering Blueprint Vector Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Subtle Decorative Architectural Framework Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        {/* Master Connected Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-100 rounded-[3rem] bg-white/60 backdrop-blur-md shadow-[0_30px_100px_-30px_rgba(30,58,138,0.06)] overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group relative p-10 lg:p-12 bg-white transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-gray-50/50
                ${i !== 3 ? 'lg:border-r border-gray-100' : ''}
                ${i > 1 ? 'border-t md:border-t-0' : ''}
                ${i === 1 ? 'border-t md:border-t-0' : ''}
                border-b lg:border-b-0 border-gray-100
              `}
            >

              {/* Corner Accent Interactive Bracket (Construction Aesthetic) */}
              <div className={`absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-transparent transition-all duration-500 rounded-tr-sm group-hover:scale-110
                ${i % 2 === 0 ? 'group-hover:border-[#1E3A8A]' : 'group-hover:border-[#F97316]'}`}
              ></div>

              <div className="flex flex-col h-full justify-between">
                <div>

                  {/* Icon Block with subtle color background drops */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl transition-all duration-500 transform group-hover:rotate-[6deg]
                    ${i % 2 === 0
                      ? 'bg-[#1E3A8A]/5 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:shadow-[0_10px_25px_-5px_rgba(30,58,138,0.3)]'
                      : 'bg-[#F97316]/5 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white group-hover:shadow-[0_10px_25px_-5px_rgba(249,115,22,0.3)]'
                    }`}
                  >
                    {stat.icon}
                  </div>

                  {/* Large Scale Display Metric */}
                  <div className="mt-8 flex items-baseline">
                    <span className={`text-7xl font-black tracking-tighter transition-all duration-500 group-hover:scale-[1.03] select-none
                      ${i % 2 === 0 ? 'text-[#1E3A8A]' : 'text-[#F97316]'}`}
                    >
                      {stat.value}
                    </span>
                  </div>

                  {/* Title Label */}
                  <h4 className="text-xl font-bold text-gray-900 mt-4 tracking-tight group-hover:text-[#1E3A8A] transition-colors duration-300">
                    {stat.label}
                  </h4>

                  {/* New Feature: Rich Explanatory Description Context */}
                  <p className="text-gray-500 text-sm mt-2.5 leading-relaxed font-normal opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </p>
                </div>

                {/* Subtle visual baseline fill meter */}
                <div className="w-full h-1 bg-transparent mt-8 relative overflow-hidden rounded-full">
                  <div className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full
                    ${i % 2 === 0 ? 'bg-[#1E3A8A]/20' : 'bg-[#F97316]/20'}`}
                  ></div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Structural Footer Finish Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      </div>
    </section>
  );
};

export default CompanyStatistics;
