const CallToAction = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold">Ready to Start Your Project?</h2>
        <p className="text-xl mt-4 text-white/80">Let’s build something great together.</p>

        <div className="mt-10">
          <button className="bg-[#F97316] hover:bg-orange-600 px-12 py-5 rounded-2xl text-xl font-semibold transition-all hover:scale-105">
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
