
const InDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#6b21a8_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      <div className="relative z-10 max-w-2xl mx-auto text-center px-6 py-16">
        {/* Logo / Site Name */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/30">
            <span className="text-4xl">🥥</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tighter text-white">
            baabaconsl
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/80 tracking-widest">UNDER DEVELOPMENT</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            Something<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Delicious
            </span><br />
            is Coming
          </h2>

          <p className="text-xl text-white/70 max-w-md mx-auto">
            We're crafting an amazing experience for you at Baaba Con SL.
            Stay tuned — we're almost ready to serve the best!
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto pt-6">
            <div className="flex justify-between text-sm text-white/60 mb-2">
              <span>Progress</span>
              <span>87%</span>
            </div>
            <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[87%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative">
                <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Expected Launch */}
          <div className="text-white/60 text-sm pt-4">
            Contact: <span className="font-medium text-white">Desmond for inquiries</span>
          </div>

          {/* Action Buttons
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => window.location.href = "mailto:info@baabaconsl.com"}
              className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl hover:bg-white/90 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Get Notified
            </button>

            <button
              className="px-8 py-4 border border-white/30 hover:border-white/60 text-white font-medium rounded-2xl transition-all active:scale-95"
            >
              Follow on Instagram
            </button>
          </div> */}
        </div>

        {/* Footer */}
        <div className="mt-20 text-white/40 text-sm">
          © 2026 Baaba Con SL • Freetown, Sierra Leone
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-10 left-10 text-6xl opacity-10 animate-float">🥥</div>
      <div className="absolute top-20 right-16 text-6xl opacity-10 animate-float delay-700">🍍</div>
      <div className="absolute bottom-32 right-32 text-5xl opacity-10 animate-float delay-1000">🌴</div>
    </div>
  );
};

export default InDevelopment;
