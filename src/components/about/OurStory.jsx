import { FaCalendarAlt } from 'react-icons/fa';

const OurStory = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-8">Our Story</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Our Beginning</h3>
                <p className="text-gray-600">
                  Founded on September 4, 2014, Baabacon SL Limited started as a small local contractor
                  with just five employees, specializing in building renovations and borehole drilling.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Why We Were Created</h3>
                <p className="text-gray-600">
                  To provide reliable, affordable, and high-quality construction services while contributing
                  to the infrastructure development of Sierra Leone.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <FaCalendarAlt className="text-4xl text-[#F97316]" />
              <div>
                <p className="text-sm text-gray-500">JOURNEY SO FAR</p>
                <p className="text-3xl font-bold text-[#1E3A8A]">2014 — Present</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              From a small team to a reputable construction firm, our growth reflects our commitment to
              quality workmanship, timely delivery, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
