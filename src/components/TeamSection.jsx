import React from "react";

const TeamSection = ({ language }) => {
  const teamMembers = [
    {
      name: language === "ar" ? "سارة أحمد" : "Sarah Ahmed",
      role:
        language === "ar" ? "مديرة التكنولوجيا" : "Chief Technology Officer",
      image: "/team-member-1.jpg",
    },
    {
      name: language === "ar" ? "محمد علي" : "Mohammed Ali",
      role:
        language === "ar"
          ? "مدير تطوير الأعمال"
          : "Business Development Manager",
      image: "/team-member-2.jpg",
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === "ar" ? "فريقنا" : "Our Team"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700">
                  {language === "ar"
                    ? "خبرة واسعة في مجال التكنولوجيا وقيادة الفرق الناجحة"
                    : "Extensive experience in technology and leading successful teams"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
