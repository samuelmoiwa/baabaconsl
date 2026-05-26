import { useEffect, useRef } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import profile_avater from '../../assets/profile_avatar.png';

const testimonialsData = [
  {
    quote: "Baabacon delivered our chapel ahead of schedule with exceptional quality and professionalism. Their attention to detail was outstanding.",
    client: "Church of Jesus Christ of Latter-day Saints",
    position: "Bo, Sierra Leone",
    avatar: profile_avater,
    rating: 5,
  },
  {
    quote: "The ICU renovation was executed flawlessly. Professional team and outstanding results.",
    client: "Connaught Hospital",
    position: "Freetown",
    avatar: profile_avater,
    rating: 5,
  },
  {
    quote: "Reliable, honest, and highly skilled. They completed our private residence with top quality workmanship.",
    client: "Mr. & Mrs. Kamara",
    position: "Freetown",
    avatar: profile_avater,
    rating: 5,
  },
  {
    quote: "Excellent service and timely delivery. They truly exceeded our expectations on every level.",
    client: "Bethel School",
    position: "New England, Freetown",
    avatar: profile_avater,
    rating: 5,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.7; // Slightly slower for better readability
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;

        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#1E3A8A]/5 text-[#1E3A8A] px-6 py-3 rounded-full mb-6">
            <FaQuoteLeft className="text-[#F97316]" />
            <span className="uppercase tracking-widest font-semibold text-sm">TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1E3A8A] tracking-tighter">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-4 text-lg">Real experiences from real projects</p>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden whitespace-nowrap pb-8"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[380px] bg-white border border-gray-100 rounded-3xl p-9 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#F97316] text-5xl opacity-20 mb-6" />

                {/* Testimonial Quote - FIXED OVERFLOW */}
                <p className="italic text-gray-700 text-[17px] leading-relaxed mb-8 flex-1 line-clamp-6 text-wrap">
                  “{testimonial.quote}”
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.client}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                  />
                  <div className='w-full px-3 overflow-x-auto'>
                    <p className="font-semibold text-[#1E3A8A] text-sm text-wrap">{testimonial.client}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex text-[#F97316] mt-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-8 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Trust Line */}
        <div className="text-center mt-12 text-gray-500 font-medium">
          Trusted by Churches, Hospitals, Schools &amp; Private Clients across Sierra Leone
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
