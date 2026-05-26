const WhyChooseUs = () => {
  const reasons = [
    { icon: "⭐", title: "Experienced Professionals", desc: "Skilled engineers and project managers" },
    { icon: "💰", title: "Affordable Pricing", desc: "Quality work at competitive rates" },
    { icon: "⚡", title: "Fast Delivery", desc: "Projects completed on time" },
    { icon: "🛡️", title: "Safety First", desc: "Strict adherence to safety standards" },
  ];

  return (
    <div className="py-20 bg-[#1E3A8A] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">Why Choose Baabacon?</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-6xl mb-6 transition-transform group-hover:scale-125">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
