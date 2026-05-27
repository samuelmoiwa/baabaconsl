import { FaTimes, FaShieldAlt, FaIdCard, FaMapMarkedAlt, FaCheckCircle } from 'react-icons/fa';

const ProjectSpecPanel = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
      {/* Backdrop Tint */}
      <div
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity "
        onClick={onClose}
      ></div>

      {/* Sliding Parameter Sheet Wrapper */}
      <div className="relative w-full max-w-xl bg-white h-full shadow-[-20px_0_60px_rgba(0,0,0,0.15)] p-8 md:p-10 flex flex-col justify-between overflow-y-auto transform transition-transform duration-500 animate-slideLeft border-l border-slate-100">

        <div>
          {/* Header Action Row */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-black tracking-widest text-[#F97316] uppercase">
                Technical Case Dossier
              </span>
              <h3 className="text-2xl font-black text-[#1E3A8A] tracking-tight mt-1">
                Project Parameters
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-500 rounded-xl flex
              items-center justify-center transition-colors duration-200 hover:cursor-pointer"
              aria-label="Close panel"
            >
              <FaTimes />
            </button>
          </div>

          {/* Structured Parameter Data Grid Fields */}
          <div className="mt-8 space-y-5">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/50 flex gap-4 items-center">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-500"><FaMapMarkedAlt /></div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Project Location</p>
                <p className="text-sm font-bold text-slate-800">{project.location}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/50 flex gap-4 items-center">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-500"><FaIdCard /></div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Target Client Classification</p>
                <p className="text-sm font-bold text-slate-800">{project.clientType}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/50 flex gap-4 items-center">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-500"><FaShieldAlt /></div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Assigned Operational Scope</p>
                <p className="text-sm font-bold text-slate-800">{project.scope}</p>
              </div>
            </div>
          </div>

          {/* Exhaustive Operational Breakdown Details */}
          <div className="mt-8 space-y-3">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Engineering Execution Summary</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              {project.details}
            </p>
          </div>

          {/* Key Validation Metrics Sub-Block */}
          <div className="mt-8 space-y-4">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Verified QC Metrics</h4>
            <div className="space-y-2.5">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-700">
                  <FaCheckCircle className="text-emerald-500 shrink-0 text-base" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Baseline Validation Tag Footer */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between bg-white sticky bottom-0">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Deployment Phase</p>
            <p className="text-emerald-600 font-black text-xs uppercase tracking-wider mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              {project.status}
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-[#1E3A8A] hover:bg-[#F97316] text-white text-xs font-black tracking-wider
            uppercase px-6 py-3.5 rounded-xl transition-all duration-300 hover:cursor-pointer"
          >
            Acknowledge Blueprint
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectSpecPanel;
