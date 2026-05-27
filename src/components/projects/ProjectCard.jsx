import { FaMapMarkerAlt, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div
      className="group relative bg-white border border-slate-200/60 rounded-[2rem] overflow-hidden p-6 shadow-[0_15px_40px_-20px_rgba(30,58,138,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.1)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
    >
      <div className="space-y-5">
        {/* Card Meta Indicator */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 bg-[#1E3A8A]/5 text-[#1E3A8A] rounded-xl flex items-center justify-center text-sm">
            <FaFolderOpen />
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
            {project.status}
          </span>
        </div>

        {/* Primary Typography block */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#1E3A8A] transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-slate-400 font-medium text-xs">
            <FaMapMarkerAlt className="text-[#F97316]" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Abstract core summary statement */}
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
          {project.summary}
        </p>
      </div>

      {/* Interactive Trigger Row */}
      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
        <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
          {project.clientType.split(' / ')[0]}
        </span>
        <button
          onClick={onViewDetails}
          className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#1E3A8A]
          group-hover:text-[#F97316] transition-colors duration-300 hover:cursor-pointer"
        >
          View Technical Specs
          <FaExternalLinkAlt className="text-[10px]" />
        </button>
      </div>

      {/* Decorative Brand Accent Corner Bar */}
      <div className="absolute right-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] group-hover:w-full transition-all duration-500 rounded-b"></div>
    </div>
  );
};

export default ProjectCard;
