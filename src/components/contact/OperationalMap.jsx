import { FaMapMarkedAlt, FaCheckCircle } from 'react-icons/fa';

const OperationalMap = () => {
  const deploymentZones = [
    { area: "Western Area Enclave (Freetown)", details: "Connaught ICU, Wellington Utilities, New England Bethel Sector" },
    { area: "Southern Province Hub (Bo)", details: "Mission Presidents Executive Residence, Stake Assembly Centres" },
    { area: "National Deployment Grid", details: "Cross-provincial heavy machinery haulage and structural logistics access" }
  ];

  return (
    <section className="bg-slate-900 text-white py-20 border-b border-slate-800 relative overflow-hidden">
      {/* Structural technical grid backdrop layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Text & Regions Breakdown Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 text-[#F97316]">
              <FaMapMarkedAlt className="text-2xl" />
              <span className="text-xs font-black tracking-widest uppercase bg-[#F97316]/10 border border-[#F97316]/20 px-3 py-1 rounded-md">
                National Logistics Footprint
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Full Cross-Regional <br />Mobility Management
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              Baabacon SL Limited operates a fully mobile infrastructure fleet. Our equipment logistics tracks allow deployment of heavy boring rigs, excavators, and civil build teams to remote locations smoothly.
            </p>

            <div className="pt-4 space-y-4">
              {deploymentZones.map((zone, i) => (
                <div key={i} className="flex gap-3 items-start bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
                  <FaCheckCircle className="text-[#F97316] text-sm mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-white tracking-tight">{zone.area}</h4>
                    <p className="text-slate-500 text-xs mt-0.5 font-normal leading-normal">{zone.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Vector Graphics Canvas Embed Container */}
          <div className="lg:col-span-7 bg-slate-950/50 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center relative aspect-video shadow-[2xl]">

            {/* Visual Engineering Grid Canvas Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-3xl"></div>

            {/* Interactive Footprint Blueprint Asset Graphic */}
            <div className="relative text-center space-y-4 max-w-sm z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1E3A8A]/20 border border-[#1E3A8A]/30 text-[#F97316] rounded-2xl text-2xl mb-2 animate-pulse">
                <FaMapMarkedAlt />
              </div>
              <h3 className="text-lg font-black text-white tracking-tight">Sierra Leone Spatial Grid Map</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-normal">
                [ Interactive GIS Node Overlay Active: Centralized Deployment Depots Configured in Freetown & Bo for Direct Regional Dispatching ]
              </p>
            </div>

            {/* Decorative Pulse Nodes */}
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#F97316] rounded-full shadow-[0_0_15px_#F97316] animate-ping"></div>
            <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#F97316] rounded-full"></div>

            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_#10B981] animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full"></div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OperationalMap;
