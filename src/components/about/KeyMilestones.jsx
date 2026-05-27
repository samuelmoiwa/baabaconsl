import { FaHospital, FaChurch, FaHome, FaWater, FaCalendarAlt } from 'react-icons/fa';

const milestones = [
  {
    icon: FaHospital,
    year: "2018",
    title: "Connaught Hospital ICU Renovation",
    location: "Freetown",
    desc: "Complete renovation of the Intensive Care Unit, improving healthcare infrastructure for hundreds of patients."
  },
  {
    icon: FaChurch,
    year: "2019 - 2021",
    title: "Construction of Three Stake Centres",
    location: "Church of Jesus Christ of Latter-day Saints",
    desc: "Successfully delivered three modern stake centres across Sierra Leone with exceptional quality."
  },
  {
    icon: FaHome,
    year: "2020 - Present",
    title: "Luxury Private Residences",
    location: "Freetown & Nationwide",
    desc: "Designed and constructed numerous high-end private homes for distinguished clients."
  },
  {
    icon: FaWater,
    year: "2022",
    title: "Borehole Drilling Projects",
    location: "Wellington & Bethel School",
    desc: "Provided clean and sustainable water solutions to communities and educational institutions."
  },
];

const KeyMilestones = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#1E3A8A]/5 text-[#1E3A8A] px-6 py-3 rounded-full mb-6">
            <FaCalendarAlt className="text-xl" />
            <span className="uppercase tracking-widest font-semibold text-sm">OUR JOURNEY</span>
          </div>
          <h2 className="text-5xl font-bold text-[#1E3A8A] tracking-tighter">
            Key Milestones & Achievements
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            From humble beginnings to delivering landmark projects — here are some of our proudest accomplishments
          </p>
        </div>

        {/* Milestones Timeline / Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {milestones.map((milestone, i) => {
            const Icon = milestone.icon;
            return (
              <div
                key={i}
                className="group bg-white border border-gray-100 hover:border-[#F97316] rounded-3xl p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A]/5 to-[#F97316]/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-5xl text-[#1E3A8A] group-hover:text-[#F97316] transition-colors" />
                  </div>

                  <div className="flex-1 pt-2">
                    {/* Year */}
                    <p className="text-[#F97316] font-semibold text-lg tracking-wider">{milestone.year}</p>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-[#1E3A8A] leading-tight mt-2 mb-3">
                      {milestone.title}
                    </h3>

                    {/* Location */}
                    <p className="text-gray-500 font-medium mb-4">{milestone.location}</p>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>

                {/* Decorative Bottom Line */}
                <div className="h-1 w-12 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] mt-10 rounded-full group-hover:w-20 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-16">
          <p className="text-gray-500 italic max-w-md mx-auto">
            "Every milestone reflects our dedication to quality, integrity, and national development."
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyMilestones;
