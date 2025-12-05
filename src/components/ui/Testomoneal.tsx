export default function TeamSection() {
  const team = [
    {
      name: "Vakhtang Watson",
      role: "Cheff",
      img: "/img/man1.avif",
      text: "Vakhtang brings authentic Georgian culinary passion to every dish.",
    },
    {
      name: "Diana Diana",
      role: "Sub Chef",
      img: "/img/wonen1.avif",
      text: "Diana ensures consistency and quality with every recipe she touches.",
    },
    {
      name: "Gocha Gocha",
      role: "Baker",
      img: "/img/wonen2.avif",
      text: "Gocha’s bakery creations are loved by customers of all ages.",
    },
    {
      name: "Levan Levan",
      role: "Khinkali Cheff",
      img: "/img/wonen1.png",
      text: "Levan crafts the most delicious Khinkali with true perfection.",
    },
  ];

  return (
    <section className="bg-[#312413]  backdrop-blur-5xl px-1 py-16 sm:px-10 lg:px-20">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        {team.map((person, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl duration-300 max-w-xs w-full text-center"
          >
            {/* Round Image */}
            <div className="w-28 h-28 mx-auto mb-4">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover rounded-full border"
              />
            </div>

            {/* Quote */}
            <p className="text-gray-700 italic mb-4">“{person.text}”</p>

            {/* Name & Role */}
            <h3 className="text-lg font-semibold text-gray-900">
              {person.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

