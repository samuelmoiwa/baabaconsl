import { FaBullseye, FaTrophy, FaGlobe } from 'react-icons/fa';

const MissionStatement = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-[#1E3A8A] via-[#172E6B] to-[#0F172A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:50px_50px] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
            <FaBullseye className="text-[#F97316] text-2xl" />
            <span className="uppercase tracking-widest font-semibold text-sm">OUR MISSION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
            Building a Better Future
          </h2>
          <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
            Driven by purpose, guided by excellence, and committed to lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Purpose */}
          <div className="group bg-white/10 backdrop-blur-lg border border-white/10 hover:border-[#F97316] rounded-3xl p-10 transition-all duration-500 hover:-translate-y-3">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F97316] transition-colors">
              <FaBullseye className="text-5xl text-white group-hover:text-white" />
            </div>
            <h3 className="text-3xl font-semibold mb-5">Our Purpose</h3>
            <p className="text-white/80 leading-relaxed text-[17px]">
              To deliver reliable, high-quality construction services in residential,
              commercial, and civil engineering projects across Sierra Leone.
            </p>
          </div>

          {/* Future Goals */}
          <div className="group bg-white/10 backdrop-blur-lg border border-white/10 hover:border-[#F97316] rounded-3xl p-10 transition-all duration-500 hover:-translate-y-3">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F97316] transition-colors">
              <FaTrophy className="text-5xl text-white group-hover:text-white" />
            </div>
            <h3 className="text-3xl font-semibold mb-5">Future Goals</h3>
            <p className="text-white/80 leading-relaxed text-[17px]">
              To become the leading construction company in Sierra Leone and expand our
              footprint across West Africa with innovation and excellence.
            </p>
          </div>

          {/* Long-term Impact */}
          <div className="group bg-white/10 backdrop-blur-lg border border-white/10 hover:border-[#F97316] rounded-3xl p-10 transition-all duration-500 hover:-translate-y-3">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F97316] transition-colors">
              <FaGlobe className="text-5xl text-white group-hover:text-white" />
            </div>
            <h3 className="text-3xl font-semibold mb-5">Long-term Impact</h3>
            <p className="text-white/80 leading-relaxed text-[17px]">
              To be a trusted global leader in innovative, sustainable, and customer-focused
              construction solutions that contribute to national development.
            </p>
          </div>
        </div>

        {/* Inspirational Closing */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="italic text-white/70 text-lg">
            "We don't just build structures — we build legacies that serve generations."
          </p>
          <p className="text-[#F97316] font-medium mt-4">— Baabacon SL Limited</p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
