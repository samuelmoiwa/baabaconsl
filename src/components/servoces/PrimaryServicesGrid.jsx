import { FaBuilding, FaChurch, FaProcedures, FaCheckCircle } from 'react-icons/fa';

const primaryServices = [
  {
    id: 'construction',
    title: "Residential & Corporate Buildings",
    tagline: "High-Performance Structural Systems",
    icon: <FaBuilding />,
    desc: "Comprehensive engineering management from foundation excavation blueprints to final architectural validation. We handle high-rise luxury residential layouts and commercial hubs.",
    specs: ["Heavy reinforced concrete pouring", "Industrial brick masonry layouts", "Multi-story load structural modeling"]
  },
  {
    id: 'construction',
    title: "Religious Architecture & Chapels",
    tagline: "Massive Assembly Engineering",
    icon: <FaChurch />,
    desc: "Highly specialized building systems configured precisely for optimized acoustics, deep clear-span safety trusses, and generational structural longevity.",
    specs: ["Structural steel roofing trusses", "Advanced acoustic wall framing", "Mass-occupancy concrete slabs"]
  },
  {
    id: 'drilling',
    title: "Borehole Drilling Utilities",
    tagline: "Infrastructural Fluid Resource Management",
    icon: <FaProcedures />,
    desc: "Industrial-grade hydro-drilling, geographical water table profiling, and anti-corrosive clean water casing solutions engineered for local communities and institutions.",
    specs: ["Deep-aquifer rotary drilling", "PVC/Steel utility casing lines", "Submersible pumping diagnostics"]
  }
];

const PrimaryServicesGrid = ({ currentFilter }) => {
  const filtered = primaryServices.filter(s => currentFilter === 'all' || s.id === currentFilter);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-black text-[#1E3A8A] tracking-tight">Primary Structural Solutions</h2>
        <div className="w-16 h-1 bg-[#1E3A8A] mt-3 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((service, i) => (
          <div
            key={i}
            className="group relative bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_15px_40px_-20px_rgba(30,58,138,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(30,58,138,0.12)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              {/* Icon Frame */}
              <div className="w-12 h-12 bg-[#1E3A8A]/5 text-[#1E3A8A] rounded-xl flex items-center justify-center text-lg font-bold group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F97316] mt-6 block">
                {service.tagline}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight mt-1 group-hover:text-[#1E3A8A] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* Industrial Specs List */}
            <div className="mt-8 pt-6 border-t border-gray-50 space-y-2.5">
              {service.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                  <FaCheckCircle className="text-[#F97316] shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimaryServicesGrid;
