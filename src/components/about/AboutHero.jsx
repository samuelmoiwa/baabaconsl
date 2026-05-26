import aboutBanner from '../../images/construction_workers_1.png';

const AboutHero = () => {
  return (
    <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/80"></div>
      </div>

      {/* Subtle Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:60px_60px] opacity-10"></div>

      <div className="relative text-center px-6 max-w-4xl mx-auto mt-10">
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
          About Baabacon<br />
          <span className="bg-gradient-to-r from-[#F97316] to-orange-400 bg-clip-text text-transparent">
            SL Limited
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          A trusted construction company committed to delivering excellence,
          quality, and integrity in every project across Sierra Leone.
        </p>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#F97316] to-transparent mx-auto mt-10"></div>
      </div>

    </div>
  );
};

export default AboutHero;
