import { FaCubes, FaTree, FaSolarPanel } from 'react-icons/fa';

const manufacturingServices = [
  {
    title: "Industrial Block Making",
    icon: <FaCubes />,
    desc: "High-pressure vibration processing yielding high-density sand-and-cement blocks. Formulated specifically to guarantee heavy load-bearing tolerances across multiple stories."
  },
  {
    title: "Architectural Woodworks",
    icon: <FaTree />,
    desc: "Premium in-house carpentry mills crafting structural solid-core security entryway doors, custom executive cabinetry layout grids, and fine architectural furniture fittings."
  },
  {
    title: "Sustainable Solar Installations",
    icon: <FaSolarPanel />,
    desc: "Photovoltaic grid array infrastructure integration. Designing and deploying heavy-duty power storage solutions ensuring clean, independent, and uninterrupted operations."
  }
];

const ManufacturingGrid = () => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-black text-[#1E3A8A] tracking-tight">Manufacturing & Systems Integration</h2>
        <div className="w-16 h-1 bg-[#F97316] mt-3 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {manufacturingServices.map((item, i) => (
          <div
            key={i}
            className="group relative bg-slate-50 hover:bg-white border border-transparent hover:border-gray-100 rounded-[2rem] p-8 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
          >
            <div className="w-12 h-12 bg-white text-[#F97316] shadow-sm group-hover:shadow rounded-xl flex items-center justify-center text-lg group-hover:bg-[#F97316] group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 tracking-tight mt-6 group-hover:text-[#1E3A8A] transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-3 leading-relaxed">
              {item.desc}
            </p>

            {/* Accent Line */}
            <div className="w-0 group-hover:w-16 h-0.5 bg-[#F97316] mt-6 transition-all duration-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturingGrid;
