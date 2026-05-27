import { FaCogs, FaTools } from 'react-icons/fa';

const machineryItems = [
  {
    name: "Heavy Crawler Excavators",
    type: "Site Preparation & Digging",
    capacity: "22-Ton Operating Weight",
    availability: "Immediate Deployment",
    rate: "Contact Desk"
  },
  {
    name: "Logistics Haulage & Tipper Trucks",
    type: "Bulk Material Hauling",
    capacity: "15 to 30 Ton Aggregate Capacity",
    availability: "Booking Required",
    rate: "Contact Desk"
  },
  {
    name: "Industrial Hydraulic Concrete Mixers",
    type: "Batch Foundations Processing",
    capacity: "500L Volumetric Continuous Output",
    availability: "Immediate Deployment",
    rate: "Contact Desk"
  }
];

const MachineryRentalsHub = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-[#1E3A8A] tracking-tight">Heavy Duty Machinery Rentals Hub</h2>
          <div className="w-16 h-1 bg-[#1E3A8A] mt-3 rounded-full"></div>
        </div>
        <p className="text-gray-500 text-sm max-w-md font-normal leading-relaxed">
          Access our certified engineering logistics fleet. All heavy equipment undergoes strict technical safety compliance inspection prior to site delivery.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {machineryItems.map((machine, i) => (
          <div
            key={i}
            className="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
          >
            {/* Asset Header Info */}
            <div className="p-6 bg-slate-50/50 border-b border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-white border border-gray-200 text-slate-600 rounded-lg flex items-center justify-center text-sm shrink-0">
                <FaTools />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 tracking-tight text-lg">{machine.name}</h3>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-0.5">{machine.type}</p>
              </div>
            </div>

            {/* Asset Spec Sheet */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-medium">Performance Spec:</span>
                <span className="text-gray-800 font-bold bg-gray-100 px-2.5 py-0.5 rounded">{machine.capacity}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-medium">Fleet Availability:</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  {machine.availability}
                </span>
              </div>
            </div>

            {/* Action Frame */}
            <div className="p-6 pt-0">
              <a
                href="/contact"
                className="w-full bg-[#1E3A8A] hover:bg-[#F97316] text-white text-xs font-bold tracking-wider uppercase text-center py-3.5 rounded-xl block transition-all duration-300 shadow-sm"
              >
                Check Availability & Daily Rates →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachineryRentalsHub;
