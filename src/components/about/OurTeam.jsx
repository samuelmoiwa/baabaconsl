import { FaLinkedinIn, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import avater from '../../assets/profile_avatar.png';

const teamMembers = [
  {
    name: "Mr. Abu Bakarr",
    role: "Founder & CEO",
    image: avater,
    linkedin: "#",
    email: "mailto:info@baabacon.com",
    bio: "Visionary executive steering corporate governance, joint ventures, and strategic growth across West Africa.",
    tags: ["Strategy", "Governance", "Leadership"]
  },
  {
    name: "Eng. Samuel Conteh",
    role: "Chief Engineer",
    image: avater,
    linkedin: "#",
    email: "mailto:info@baabacon.com",
    bio: "Lead structural architect specializing in high-performance structural systems, blueprint modeling, and site physics.",
    tags: ["Structural Civil", "BIM", "QC"]
  },
  {
    name: "Mrs. Fatmata Kamara",
    role: "Project Manager",
    image: avater,
    linkedin: "#",
    email: "mailto:info@baabacon.com",
    bio: "Overlooking logistics pipelines, contract enforcement, international safety standards compliance, and scheduling.",
    tags: ["Logistics", "Risk Mit", "HSE Standards"]
  },
];

const OurTeam = () => {
  return (
    <section className="sm:py-24 py-10 bg-gradient-to-br from-gray-900 via-[#1E3A8A] to-slate-900 animate-gradient-slow relative overflow-hidden">

      {/* Decorative Technical Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:24px_24px] opacity-70 pointer-events-none"></div>

      {/* Dynamic Floating Vector Accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#1E3A8A]/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Premium Dark Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-black tracking-widest text-[#F97316] uppercase bg-[#F97316]/10 border border-[#F97316]/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse"></span>
            Executive Board
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mt-4">
            The Minds Behind The Structures
          </h2>
          <p className="text-slate-300 text-base mt-4 leading-relaxed font-normal">
            A cohesive core of certified engineers and industry managers executing complex commercial and residential masterpieces.
          </p>
        </div>

        {/* Optimized Sleek Cards List Layout */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group relative bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-xl rounded-3xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-6 border border-white/10 hover:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out"
            >

              {/* Profile Image - Reduced & Tightened */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-2xl overflow-hidden bg-slate-800 border border-white/10 group-hover:border-[#F97316]/50 transition-all duration-500 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Micro Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Core Information Section */}
              <div className="flex-1 text-center md:text-left space-y-2 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#F97316] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                      <FaBriefcase className="text-[#F97316] text-xs" />
                      <p className="text-slate-300 font-semibold text-xs uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Clean Touchpoint Social Action Icons */}
                  <div className="flex items-center justify-center gap-2 pt-2 md:pt-0">
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 bg-white/5 hover:bg-[#F97316] text-slate-300 hover:text-white rounded-xl flex items-center justify-center border border-white/5 transition-all duration-300 shadow-sm"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedinIn className="text-sm" />
                    </a>
                    <a
                      href={member.email}
                      className="w-9 h-9 bg-white/5 hover:bg-[#F97316] text-slate-300 hover:text-white rounded-xl flex items-center justify-center border border-white/5 transition-all duration-300 shadow-sm"
                      aria-label={`Email ${member.name}`}
                    >
                      <FaEnvelope className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Expanded Biography Context Text */}
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-2xl font-normal pt-1">
                  {member.bio}
                </p>

                {/* Competency Badge Pill Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 pt-2">
                  {member.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] md:text-xs font-semibold text-white/70 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-md group-hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Accent Left Frame Border */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-[#F97316] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-r"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
