import { FaHeadset } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-[#1E3A8A] to-slate-900 py-24 overflow-hidden border-b border-white/5">
      {/* Structural Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Floating Ambient Light Orbs */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-[#F97316]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
        <span className="text-xs font-black tracking-widest text-[#F97316] uppercase bg-white/[0.04] border border-white/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <FaHeadset className="animate-bounce" />
          Central Estimating Desk
        </span>

        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
          Let’s Engineer Your <br />
          <span className="bg-gradient-to-r from-amber-400 via-[#F97316] to-orange-600 bg-clip-text text-transparent">
            Next Structural Solution.
          </span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Connect with Baabacon SL Limited’s corporate engineering managers. Whether you are launching an institutional build, configuring community borehole utilities, or booking heavy equipment, our desk handles it smoothly.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
