import image_about from '../../images/2.jpeg'

const AboutTeaser = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold text-[#1E3A8A] leading-tight">
            Building Trust,<br />One Project at a Time
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Baabacon SL Limited is a trusted construction company dedicated to delivering
            high-quality building solutions with professionalism, safety, and excellence.
          </p>
          <button className="mt-8 bg-[#1E3A8A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#172E6B] transition-all">
            Learn Our Story →
          </button>
        </div>

        <div className="relative">
          <img
            src={image_about}
            alt="Construction Team"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTeaser;
