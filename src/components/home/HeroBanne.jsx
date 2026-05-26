import banner_image from '../../images/1.jpeg';

const HeroBanner = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${banner_image})`
        }}
      >
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/40 to-transparent"></div>
      </div>

      {/* Subtle Construction Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:60px_60px]"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6">
          <span className="text-[#F97316] text-xl">🏗️</span>
          <span className="text-white font-medium tracking-widest text-sm">EST. 2014 • SIERRA LEONE</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tighter">
          Building the Future<br />
          <span className="bg-gradient-to-r from-[#F97316] via-orange-400 to-[#F97316] bg-clip-text text-transparent">
            with Excellence
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Trusted construction experts delivering high-quality residential, commercial,
          and civil engineering projects across Sierra Leone.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button className="group bg-[#F97316] hover:bg-[#EA580C] text-white px-12 py-5 rounded-3xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#F97316]/50 flex items-center gap-3">
            Get a Free Quote
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button className="border-2 border-white/80 hover:border-white text-white px-10 py-5 rounded-3xl text-lg font-semibold transition-all hover:bg-white/10 backdrop-blur-sm">
            Explore Our Projects
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></div>
            <span>50+ Projects Completed</span>
          </div>
          <div>On Time • On Budget • With Integrity</div>
        </div>
      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70">
        <div className="text-xs tracking-[3px] mb-2">SCROLL TO DISCOVER</div>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-10 text-7xl opacity-20 hidden lg:block animate-float">🏗️</div>
      <div className="absolute top-32 left-10 text-6xl opacity-20 hidden lg:block animate-float delay-1000">🧱</div>
    </div>
  );
};

export default HeroBanner;
