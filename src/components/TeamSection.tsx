
import asaba from '@/assets/images/team-asaba.webp'
import peter from '@/assets/images/team-peter.webp'
import calvin from '@/assets/images/team-calvin.webp'
import alice from '@/assets/images/team-mbabazi.webp'
import deborah from '@/assets/images/team-deborah.webp'

const Team = () => {
  const teamMembers = [
    {
      name: "James Asaba",
      position: "Director",
      image: asaba
    },
    {
      name: "Peter Mugerwa",
      position: "Audio Producer",
      image: peter
    },
    {
      name: "Ruth Alice Mbabazi",
      position: "Director",
      image: alice
    },
    {
      name: "Calvin Engola",
      position: "Creative Director",
      image: calvin
    },
    {
      name: "Deborah Twinomujuni",
      position: "Market Research Analyst",
      image: deborah
    }
  ];

  return (
    <section id="team" className="py-10 bg-white font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 ">Our Team</h2>
          <p className="text-lg text-gray-600 font-kaushan max-w-3xl mx-auto leading-relaxed font-sans">
            Our team is composed of passionate and skilled professionals who are dedicated to delivering exceptional results. With a diverse range of expertise and a commitment to excellence, we work collaboratively to achieve our goals and exceed client expectations.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
          {teamMembers.map((member, index) => (
            <div key={index}  className="text-center group" >
              {/* Profile Image with Dotted Border */}
              <div className="relative mb-4">
                <div className="w-80 h-80 md:w-80 md:h-80 mx-auto">
                  {/* Dotted Border */}
                  <div className="absolute inset-0 border-4 border-dashed border-primary rounded-full animate-pulse-border"></div>
                  {/* Profile Image */}
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
