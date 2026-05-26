import { FaHandshake, FaMedal, FaLightbulb, FaUsers, FaHandsHelping, FaShieldAlt } from 'react-icons/fa';

const values = [
  { icon: FaHandshake, title: "Integrity" },
  { icon: FaMedal, title: "Excellence" },
  { icon: FaLightbulb, title: "Innovation" },
  { icon: FaUsers, title: "Customer Satisfaction" },
  { icon: FaHandsHelping, title: "Teamwork" },
  { icon: FaShieldAlt, title: "Accountability" },
];

const CoreValues = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">Our Core Values</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-3xl text-center hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="w-20 h-20 mx-auto bg-[#1E3A8A]/5 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:bg-[#F97316] group-hover:text-white transition-all">
                  <Icon />
                </div>
                <h3 className="font-semibold text-xl text-[#1E3A8A]">{value.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
