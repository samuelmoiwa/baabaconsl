import { FaArrowRight, FaCube, FaHardHat } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import banner_image from '../../assets/banner.png';

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-slate-950/40 text-white">

      {/* ================= BACKGROUND IMAGE & GRADIENT MASK LAYERS ================= */}
      <div className="absolute inset-0 z-0">
        {/* The Construction Base Photography */}
        <img
          src={banner_image}
          alt="Baabacon Construction Site Background"
          className="w-full h-full object-cover object-center scale-105 select-none pointer-events-none opacity-40"
        />

        {/* Multi-stage High-Contrast Masking Gradients */}
        {/* Left-to-Right dark mask protecting the textual layout */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/80 to-transparent lg:block hidden"></div>

        {/* Top-to-Bottom/Diagonal premium color grading fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-[#1E3A8A]/10 to-slate-900/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-slate-950/10"></div>
      </div>

      {/* 1. Structural Engineering Grid Backdrop Layer */}
      <div className="absolute inset-0 z-1 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* 2. Deep Glow Light Leak Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F97316]/10 rounded-full blur-[120px] pointer-events-none animate-pulse z-1"></div>
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-[#1E3A8A]/20 rounded-full blur-[100px] pointer-events-none z-1"></div>

      {/* 3. Main Split Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center py-12">

        {/* ================= LEFT COLUMN: PERSUASIVE CONTENT & ACTION PARAMETERS ================= */}
        <div className="lg:col-span-7 space-y-8 text-left">

          {/* Small Specialized Badge */}
          <div className="inline-flex items-center gap-2.5 bg-slate-950/60 backdrop-blur-xl border border-white/10
          px-5 py-2 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <span className="text-[#F97316] text-sm animate-bounce">🏗️</span>
            <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
              EST. 2014 • SIERRA LEONE GRID
            </span>
          </div>

          {/* Master Heading Block */}
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black leading-[1.05] tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Building the Future <br />
            <span className="bg-gradient-to-r from-amber-400 via-[#F97316] to-orange-600 bg-clip-text text-transparent">
              with Excellence
            </span>
          </h1>

          {/* Core Corporate Tagline Description */}
          <p className="text-slate-200 text-base md:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-md">
            Trusted structural engineers delivering high-quality residential, commercial,
            and deep civil utility deployment networks smoothly across Sierra Leone.
          </p>

          {/* High-Converting CTA Action Triggers */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              className="group bg-[#F97316] hover:bg-[#EA580C] text-white px-10 py-4.5 rounded-2xl text-sm
              font-black uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-xl
              shadow-[#F97316]/20 flex items-center justify-center gap-3"
            >
              Get a Free Quote
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="border border-white/10 hover:border-white/20 bg-slate-950/40 hover:bg-white/[0.06]
              text-white px-9 py-4.5 rounded-2xl text-sm font-black uppercase tracking-wider transition-all
              duration-300 backdrop-blur-md flex items-center justify-center"
            >
              Explore Our Projects
            </a>
          </div>

          {/* Trust Indicators Footer Sub-Grid */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-white/10 text-slate-400
          text-xs font-bold">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              <span className="text-slate-200">50+ Mega Structural Projects Delivered</span>
            </div>
            <div className="tracking-wider uppercase text-[10px] text-slate-400">
              On Time • On Budget • With Absolute Integrity
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: PREMIUM LOGO VIEWPORT SHOWCASE ================= */}
        <div className="lg:col-span-5 relative flex justify-center items-center">

          {/* Aesthetic Blueprint Wrapper Ring (Switched back to transparent backdrop overlay for contrast) */}
          <div className="relative w-full aspect-square max-w-[420px] bg-white border border-white/10
          rounded-[2.5rem] p-8 flex items-center justify-center shadow-2xl backdrop-blur-md overflow-hidden group/logo">

            {/* Embedded Micro Drafting Grid lines behind the asset */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:16px_16px]"></div>

            {/* Moving Scanner Laser Bar Accent Effect */}
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30
            to-transparent top-0 animate-[scan_4s_infinite_linear]"></div>

            {/* The Logo Graphic Element Asset */}
            <img
              src={logo}
              alt="Baabacon SL Limited Corporate Signage"
              className="w-4/5 h-auto object-contain relative z-10 transition-transform duration-700
              group-hover/logo:scale-[1.03] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            />

            {/* Ambient Highlight Corners */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 rounded-tl-md"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 rounded-br-md"></div>
          </div>

          {/* Floating Spatial Micro Geometry Badges */}
          <div className="absolute -top-4 right-6 bg-slate-950/90 border border-white/10 p-3 rounded-xl
          text-[#F97316] text-lg shadow-xl animate-float pointer-events-none hidden sm:block">
            <FaHardHat />
          </div>
          <div className="absolute bottom-4 -left-6 bg-slate-950/90 border border-white/10 p-3 rounded-xl
            text-[#1E3A8A] text-lg shadow-xl animate-float [animation-delay:1.5s] pointer-events-none hidden sm:block">
            <FaCube />
          </div>
        </div>

      </div>

      {/* 4. Downward Scroll Discovery Prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-slate-400
        opacity-80 hover:opacity-100 transition-opacity pointer-events-none z-10">
        <div className="text-[10px] font-black tracking-[4px] uppercase mb-2">Scroll To Discover</div>
        <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-[#F97316] rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
