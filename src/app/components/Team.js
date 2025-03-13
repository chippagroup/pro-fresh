import Image from 'next/image';

export default function Team() {
  const team = [
    {
      name: 'Reneilwe Maenetja',
      role: 'Project Director',
      title: 'Food Scientist & Agricultural Economist',
      image: '/images/people_food.png',
      qualifications: [
        'B.Sc. Agriculture (Food Science and Agricultural Economics)',
        'B.Sc. Agriculture. Hons (Agricultural Economics)',
        'Certificate in Industrial Quality Management',
        'Advanced Diploma in Disaster Risk Management',
        'Masters in Disaster Risk Management Candidate (2021)'
      ]
    },
    {
      name: 'Petso Mokhatla',
      role: 'Agricultural Manager',
      title: 'Facilitator & Assessor',
      image: '/images/classroom_scientist.png'
    },
    {
      name: 'Kgodisho Mashego',
      role: 'Agricultural Economist',
      title: 'Facilitator & Assessor',
      image: '/images/hands_plant.png'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 top-0 w-40 h-40">
          <Image
            src="/images/green_leaf.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute -right-20 bottom-0 w-40 h-40 rotate-180">
          <Image
            src="/images/leaf.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-green-400 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.title}</p>
                  {member.qualifications && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-green-700">Qualifications:</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {member.qualifications.map((qual, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="mt-1.5 w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></span>
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
