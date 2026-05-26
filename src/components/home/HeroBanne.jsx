import banner_image from '../../images/1.jpeg'

const HeroBanner = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banner_image})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight tracking-tighter animate-fade-in">
          Building the Future<br />
          <span className="text-[#F97316]">with Excellence</span>
        </h1>

        <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
          Trusted construction company delivering high-quality residential, commercial,
          and civil engineering projects across Sierra Leone since 2014.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#F97316] hover:bg-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-105 shadow-xl">
            Get a Free Quote
          </button>
          <button className="border border-white text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all">
            View Our Projects
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓ Scroll to Explore
      </div>
    </div>
  );
};

export default HeroBanner;
