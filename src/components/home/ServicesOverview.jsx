const services = [
  { title: "Residential Buildings", icon: "🏠", desc: "Modern homes & estates" },
  { title: "Chapels & Churches", icon: "⛪", desc: "Religious structures" },
  { title: "Borehole Drilling", icon: "🚰", desc: "Clean water solutions" },
  { title: "Block Making", icon: "🧱", desc: "Quality building blocks" },
  { title: "Woodworks", icon: "🪑", desc: "Doors, furniture & more" },
  { title: "Solar Installations", icon: "☀️", desc: "Renewable energy" },
];

const ServicesOverview = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#1E3A8A]">Our Services</h2>
          <p className="text-gray-600 mt-3 text-lg">Comprehensive construction solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 hover:border-[#F97316] p-8 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 transition-transform group-hover:scale-110">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
