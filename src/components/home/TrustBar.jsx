const TrustBar = () => {
  return (
    <div className="bg-white py-6 border-b">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-center text-gray-600 font-medium">
          <div className="flex items-center gap-3">
            <span className="text-4xl">📅</span>
            <div>
              <p className="text-sm">ESTABLISHED</p>
              <p className="text-2xl font-bold text-[#1E3A8A]">2014</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-4xl">🏗️</span>
            <div>
              <p className="text-sm">PROJECTS COMPLETED</p>
              <p className="text-2xl font-bold text-[#1E3A8A]">50+</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-4xl">🇸🇱</span>
            <div>
              <p className="text-sm">SERVING</p>
              <p className="text-2xl font-bold text-[#1E3A8A]">Nationwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
