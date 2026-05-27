import { FaShieldAlt, FaBriefcaseMedical, FaHardHat } from 'react-icons/fa';

const SafetyBanner = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#1E3A8A] to-slate-900 text-white relative py-20 mt-12 overflow-hidden border-t-4 border-[#F97316]">
      {/* Visual background engineering pattern line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-3 items-center gap-12">

        {/* Core Statement Header */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3 text-[#F97316]">
            <FaShieldAlt className="text-3xl" />
            <span className="text-xs font-black tracking-widest uppercase bg-[#F97316]/10 border border-[#F97316]/20 px-3 py-1 rounded-md">
              HSE Management System
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Safety is Our Ultimate Priority. <br />
            Zero Compromise. Zero Harm.
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            Baabacon SL Limited enforces strict international safety standards across all active deployment zones. Every single project operation undergoes systematic danger analysis to protect both our engineering crews and client investments.
          </p>
        </div>

        {/* Structural Metrics Framework Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full">
          <div className="bg-white/[0.03] backdrop-blur-md p-5 border border-white/10 rounded-2xl space-y-2">
            <FaHardHat className="text-[#F97316] text-xl" />
            <h4 className="font-bold text-sm text-white">Full PPE Enforcement</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">Mandatory personal protective protocols enforced across active site parameters at all times.</p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-md p-5 border border-white/10 rounded-2xl space-y-2">
            <FaBriefcaseMedical className="text-emerald-400 text-xl" />
            <h4 className="font-bold text-sm text-white">ISO Standard Quality</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">Structural compliance audits monitored rigorously throughout development execution cycles.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SafetyBanner;
