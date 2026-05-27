import { FaLayerGroup, FaHardHat, FaWater, FaTruckMoving } from 'react-icons/fa';

const ServicesHero = ({ activeFilter, setActiveFilter }) => {
  const filterTabs = [
    { id: 'all', label: 'All Capabilities', icon: <FaLayerGroup /> },
    { id: 'construction', label: 'Civil & Construction', icon: <FaHardHat /> },
    { id: 'drilling', label: 'Utility Drilling', icon: <FaWater /> },
    { id: 'rentals', label: 'Machinery Rentals', icon: <FaTruckMoving /> },
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-slate-900 py-24 overflow-hidden">
      {/* Structural blueprint visual line overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] opacity-60"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 mt-10">
        <span className="text-xs font-black tracking-widest text-[#F97316] uppercase bg-[#F97316]/10 border border-[#F97316]/20 px-4 py-1.5 rounded-full inline-block">
          Our Capabilities
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-5 leading-tight">
          Comprehensive Building & <br />
          <span className="bg-gradient-to-r from-[#F97316] to-amber-500 bg-clip-text text-transparent">
            Civil Engineering
          </span> Services
        </h1>
        <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto font-normal leading-relaxed">
          From precise excavation and large-span framing layouts to clean utility engineering, we execute with uncompromising craftsmanship.
        </p>

        {/* Dynamic Filter Sub-Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 bg-white/5 backdrop-blur-xl p-2 border border-white/10 rounded-2xl max-w-3xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold tracking-tight transition-all duration-300
                ${activeFilter === tab.id
                  ? 'bg-[#1E3A8A] text-white shadow-lg shadow-[#1E3A8A]/30 scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
            >
              <span className={activeFilter === tab.id ? 'text-[#F97316]' : 'text-slate-400'}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
