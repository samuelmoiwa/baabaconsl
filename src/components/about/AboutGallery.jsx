import { useState } from 'react';
import { FaBuilding, FaChurch, FaWater, FaDraftingCompass, FaEye } from 'react-icons/fa';

import _1 from '../../images/10.jpeg'
import _2 from '../../images/11.jpeg'
import _3 from '../../images/8.jpeg'
import _4 from '../../images/construction_workers_1.png'

// Unique data array tailored to Baabacon's historic milestones
const galleryData = [
  {
    id: "icu-renovation",
    title: "Connaught Hospital ICU",
    location: "Freetown, SL",
    category: "Medical Infrastructure",
    icon: <FaBuilding />,
    // Replace with your actual project image path
    image: _1,
    stats: { structural: "Medical-Grade ISO Compliance", duration: "Punctual Delivery Track", scope: "Sterile Space Optimization" },
    description: "High-precision structural renovation of critical healthcare infrastructure, optimizing emergency spatial layouts and life-support utility tracks."
  },
  {
    id: "lds-chapels",
    title: "LDS Church Stake Centres",
    location: "Freetown & Bo Regional Sites",
    category: "Religious Assembly Architecture",
    icon: <FaChurch />,
    image: _2,
    stats: { structural: "Clear-Span Roofing Trusses", duration: "Multi-Site Simultaneous Sync", scope: "Mass Assembly Concrete Foundations" },
    description: "Simultaneous civil construction of three separate high-capacity religious centres engineered for acoustics, durability, and structural longevity."
  },
  {
    id: "community-boreholes",
    title: "Community Borehole Utilities",
    location: "Wellington & New England",
    category: "Industrial Hydro-Drilling",
    icon: <FaWater />,
    image: _3,
    stats: { structural: "Deep Aquifer Rotary Drilled", duration: "Community Utility Access", scope: "Anti-Corrosive Outer Casing" },
    description: "Deploying heavy drilling fleets to introduce vital clean water utility access lines for the Wellington community and Bethel School."
  },
  {
    id: "private-residential",
    title: "Private Luxury Residences",
    location: "Freetown Enclaves",
    category: "Turnkey Home Construction",
    icon: <FaDraftingCompass />,
    image: _4,
    stats: { structural: "Retaining Structural Footings", duration: "Foundation to Key Handover", scope: "Bespoke Framing Geometries" },
    description: "Breathtaking modern family properties built seamlessly on complex sloped terrains, integrating premium woodwork and independent solar grids."
  }
];

const AboutGallery = () => {
  const [activeProject, setActiveProject] = useState(galleryData[0]);

  return (
    <section className="py-24 bg-gray-100 text-slate-800 relative overflow-hidden">
      {/* Light gray structural drafting grid layout backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Component Title Block */}
        <div className="mb-16 space-y-4 max-w-xl">
          <span className="text-xs font-black tracking-widest text-[#F97316] uppercase bg-[#F97316]/10 border border-[#F97316]/20 px-4 py-1.5 rounded-md inline-block">
            Milestone Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Our Historic Footprint In Action
          </h2>
          <div className="w-16 h-1 bg-[#F97316] rounded-full"></div>
        </div>

        {/* Master Interactive Core Split-Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* ================= LEFT SIDE: PROJECT INTERACTIVE TABS ================= */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            {galleryData.map((project) => {
              const isSelected = activeProject.id === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`group relative text-left p-6 rounded-2xl border transition-all duration-500 overflow-hidden outline-none
                    ${isSelected
                      ? 'bg-gradient-to-r from-[#1E3A8A] to-[#1e3a8a]/80 border-[#1E3A8A] shadow-[0_15px_30px_rgba(30,58,138,0.15)] text-white'
                      : 'bg-white border-slate-200/80 hover:border-[#1E3A8A]/30 hover:bg-slate-50 text-slate-800'
                    }`}
                >
                  {/* Subtle hover background blueprint grid lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#00000003_1px,transparent_1px)] bg-[size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="flex items-center gap-5 relative z-10">
                    {/* Icon container matrix */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg transition-all duration-500 shrink-0
                      ${isSelected
                        ? 'bg-[#F97316] text-white shadow-lg'
                        : 'bg-slate-100 text-slate-500 group-hover:text-[#1E3A8A]'
                      }`}
                    >
                      {project.icon}
                    </div>

                    {/* Metadata text stack */}
                    <div className="space-y-1">
                      <span className={`text-[10px] font-bold tracking-wider uppercase transition-colors
                        ${isSelected ? 'text-amber-400' : 'text-slate-400 group-hover:text-[#F97316]'}`}
                      >
                        {project.category}
                      </span>
                      <h3 className={`font-bold text-lg tracking-tight md:text-xl transition-colors
                        ${isSelected ? 'text-white' : 'text-slate-800 group-hover:text-[#1E3A8A]'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs font-medium ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator Left Accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#F97316] transition-all duration-500
                    ${isSelected ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                  ></div>
                </button>
              );
            })}
          </div>

          {/* ================= RIGHT SIDE: DYNAMIC VIEWPORT TERMINAL ================= */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative group/viewport backdrop-blur-md">

            {/* Image display layer */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover/viewport:scale-[1.02]"
              />

              {/* Shading Vignette Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>

              {/* Hover Live View Mode badge overlay */}
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-md flex items-center gap-1.5">
                <FaEye className="text-[#F97316]" /> Live Site View
              </div>
            </div>

            {/* Explanatory Data Section */}
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl font-black text-slate-900 tracking-tight">
                  {activeProject.title} Execution Brief
                </h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                  {activeProject.description}
                </p>
              </div>

              {/* Technical Specifications Parameter Badges */}
              <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 border border-slate-200/60 p-3.5 rounded-xl">
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Structural Focus</p>
                  <p className="text-xs font-bold text-slate-800 tracking-tight mt-1">{activeProject.stats.structural}</p>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 p-3.5 rounded-xl">
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Operational Target</p>
                  <p className="text-xs font-bold text-slate-800 tracking-tight mt-1">{activeProject.stats.duration}</p>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 p-3.5 rounded-xl">
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Quality Parameter</p>
                  <p className="text-xs font-bold text-slate-800 tracking-tight mt-1">{activeProject.stats.scope}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
