const MissionValues = () => {
  const values = ["Integrity", "Excellence", "Innovation", "Customer Satisfaction", "Teamwork", "Accountability"];

  return (
    <div className="py-20 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          To deliver reliable, high-quality construction services while contributing to the development of Sierra Leone.
        </p>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-8">Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, i) => (
              <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition-all">
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionValues;
