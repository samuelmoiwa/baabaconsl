import { FaHospital, FaChurch, FaHome, FaWater } from 'react-icons/fa';

const milestones = [
  { icon: FaHospital, title: "Connaught Hospital ICU Renovation", location: "Freetown" },
  { icon: FaChurch, title: "Construction of Three Stake Centres", location: "Church of Jesus Christ of Latter-day Saints" },
  { icon: FaHome, title: "Multiple Private Residences", location: "Freetown & Nationwide" },
  { icon: FaWater, title: "Borehole Drilling Projects", location: "Wellington & Bethel School" },
];

const KeyMilestones = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">Key Milestones & Achievements</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {milestones.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex gap-6 bg-gray-50 p-8 rounded-3xl hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center text-4xl text-[#1E3A8A] group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-[#1E3A8A]">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeyMilestones;
