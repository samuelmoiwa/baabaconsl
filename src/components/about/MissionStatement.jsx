const MissionStatement = () => {
  return (
    <div className="py-20 bg-[#1E3A8A] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Mission</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#F97316]">Purpose</h3>
            <p className="text-white/80">To deliver reliable and high-quality construction services in residential, commercial, and civil engineering projects.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#F97316]">Future Goals</h3>
            <p className="text-white/80">To become a leading name in the construction industry in Sierra Leone and beyond.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#F97316]">Long-term Impact</h3>
            <p className="text-white/80">To be a trusted leader in innovative and customer-focused construction services worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
