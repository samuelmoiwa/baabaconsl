import _1 from '../../images/3.jpeg'
import _2 from '../../images/4.jpeg'
import _3 from '../../images/5.jpeg'


const FeaturedProjects = () => {
  const projects = [
    { title: "Connaught Hospital ICU", location: "Freetown", img: _1 },
    { title: "Stake Centre Chapel", location: "Bo", img: _2 },
    { title: "Private Residence", location: "Freetown", img: _3 },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#1E3A8A] mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl shadow-lg">
              <img src={project.img} alt={project.title} className="w-full h-72 object-cover transition-transform group-hover:scale-110 duration-500" />
              <div className="p-6 bg-white">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="text-gray-500">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
