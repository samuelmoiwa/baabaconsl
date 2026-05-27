const ProjectHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-[#1E3A8A] to-slate-900 py-28 overflow-hidden border-b border-white/5">
      {/* Structural Drafting Blueprint Grid Backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
        <span className="text-xs font-black tracking-widest text-[#F97316] uppercase bg-white/[0.04] border border-white/10 px-4 py-1.5 rounded-full inline-block">
          Physical Engineering Proof
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
          Turning Blueprints Into <br />
          <span className="bg-gradient-to-r from-amber-400 via-[#F97316] to-orange-600 bg-clip-text text-transparent">
            Historic Landmarks.
          </span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Explore our verified project execution history. We provide absolute capability confirmation across critical medical settings, mass assembly centers, and custom utility infrastructure.
        </p>
      </div>
    </div>
  );
};

export default ProjectHero;
