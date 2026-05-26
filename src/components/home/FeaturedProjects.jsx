import _1 from '../../images/3.jpeg';
import _2 from '../../images/4.jpeg';
import _3 from '../../images/5.jpeg';
import { FaArrowRight, FaLocationDot } from 'react-icons/fa6';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Connaught Hospital ICU Renovation",
      location: "Freetown",
      year: "2023",
      category: "Healthcare",
      img: _1
    },
    {
      title: "Stake Centre Chapel",
      location: "Bo",
      year: "2022",
      category: "Religious",
      img: _2
    },
    {
      title: "Luxury Private Residence",
      location: "Freetown",
      year: "2024",
      category: "Residential",
      img: _3
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <div className="inline-block px-5 py-2 bg-white rounded-full text-sm font-semibold text-[#F97316] border border-[#F97316]/20 mb-4">
              PORTFOLIO
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1E3A8A] tracking-tighter">
              Featured Projects
            </h2>
            <p className="text-gray-600 mt-3 text-lg max-w-md">
              Excellence in every structure we build
            </p>
          </div>

          <button className="mt-6 md:mt-0 group flex items-center gap-3 text-[#1E3A8A] font-semibold
          hover:text-[#F97316] transition-colors hover:cursor-pointer">
            View All Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-75 transition-opacity"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#1E3A8A] text-xs font-semibold px-4 py-2 rounded-full">
                  {project.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-6 right-6 bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] leading-tight mb-3 group-hover:text-[#F97316] transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500">
                  <FaLocationDot className="text-[#F97316]" />
                  <span className="font-medium">{project.location}</span>
                </div>

                {/* View Project Button */}
                <div className="mt-8 flex items-center justify-between">
                  <button className="text-sm font-semibold text-[#F97316] flex items-center gap-2 group-hover:gap-3 transition-all">
                    VIEW PROJECT DETAILS
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1.5 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
