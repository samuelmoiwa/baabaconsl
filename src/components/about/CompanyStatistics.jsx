const CompanyStatistics = () => {
  return (
    <div className="py-20 bg-[#1E3A8A] text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <div>
          <p className="text-6xl font-bold text-[#F97316]">10+</p>
          <p className="text-white/70 mt-3">Years of Excellence</p>
        </div>
        <div>
          <p className="text-6xl font-bold text-[#F97316]">50+</p>
          <p className="text-white/70 mt-3">Projects Completed</p>
        </div>
        <div>
          <p className="text-6xl font-bold text-[#F97316]">100+</p>
          <p className="text-white/70 mt-3">Happy Clients</p>
        </div>
        <div>
          <p className="text-6xl font-bold text-[#F97316]">5</p>
          <p className="text-white/70 mt-3">Core Services</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatistics;
