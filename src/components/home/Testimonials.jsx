const Testimonials = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-[#1E3A8A] mb-12">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: "Baabacon delivered our chapel ahead of schedule with exceptional quality.", client: "Church of Jesus Christ of Latter-day Saints" },
            { quote: "Professional team. The ICU renovation was outstanding.", client: "Connaught Hospital" },
            { quote: "Reliable and honest. Highly recommended for any construction work.", client: "Private Client, Freetown" },
          ].map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl">
              <p className="italic text-lg">“{t.quote}”</p>
              <p className="mt-6 font-semibold text-[#F97316]">- {t.client}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
