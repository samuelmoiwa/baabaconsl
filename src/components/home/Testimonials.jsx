import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import profile_avater from '../../assets/profile_avatar.png'

const testimonials = [
  {
    quote: "Baabacon delivered our chapel ahead of schedule with exceptional quality and professionalism. Their attention to detail was outstanding.",
    client: "Church of Jesus Christ of Latter-day Saints",
    position: "Project Committee, Bo",
    avatar: profile_avater
  },
  {
    quote: "The ICU renovation at Connaught Hospital was executed flawlessly. Professional team, excellent communication, and outstanding results.",
    client: "Connaught Hospital",
    position: "Management",
    avatar: profile_avater
  },
  {
    quote: "Reliable, honest, and highly skilled. They completed our private residence with top quality workmanship. Highly recommended!",
    client: "Private Client",
    position: "Freetown",
    avatar: profile_avater
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 mb-6">
            <FaQuoteLeft className="text-[#F97316] text-2xl" />
            <span className="uppercase tracking-widest font-semibold text-sm text-[#1E3A8A]">Client Voices</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1E3A8A] tracking-tighter">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-16">
          <div className="min-h-[320px] flex items-center">
            <div className="text-center transition-all duration-700">
              {/* Large Quote Icon */}
              <FaQuoteLeft className="text-[#F97316] text-7xl mx-auto mb-8 opacity-20" />

              {/* Testimonial Quote */}
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 font-light italic max-w-3xl mx-auto">
                “{testimonials[current].quote}”
              </p>

              {/* Client Info */}
              <div className="mt-12 flex flex-col items-center">
                <img src={testimonials[current].avatar} alt={testimonials[current].client} className="w-16 h-16 bg-linear-to-br from-[#1E3A8A] to-[#F97316] rounded-2xl flex items-center justify-center text-4xl shadow-lg mb-4" />
                <p className="font-semibold text-xl text-[#1E3A8A]">
                  {testimonials[current].client}
                </p>
                <p className="text-gray-500 mt-1">{testimonials[current].position}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-[#1E3A8A] p-4 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <FaChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-[#1E3A8A] p-4 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <FaChevronRight className="text-2xl" />
          </button>

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-[#F97316] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Footer */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          Trusted by leading organizations and individuals across Sierra Leone
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
