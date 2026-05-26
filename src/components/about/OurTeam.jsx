import avater from '../../assets/profile_avatar.png'

const teamMembers = [
  { name: "Mr. Abu Bakarr", role: "Founder & CEO", image: avater },
  { name: "Eng. Samuel Conteh", role: "Chief Engineer", image: avater },
  { name: "Mrs. Fatmata Kamara", role: "Project Manager", image: avater },
];

const OurTeam = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">Meet Our Team</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="text-center">
              <img src={member.image} alt={member.name} className="w-full h-80 object-cover rounded-3xl mb-6 shadow-xl" />
              <h3 className="text-2xl font-semibold text-[#1E3A8A]">{member.name}</h3>
              <p className="text-gray-600 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
