

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialCard() {
   const data = [
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

  const [active, setActive] = React.useState(0);

  const prev = () => {
    setActive((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className= "text-primary flex backdrop-blur-[10px] flex-col md:flex-row items-center gap-10 p-6 md:p-16 transition-all duration-500">
      {/* Image Section */}
      <div className="relative w-full max-w-sm">
        <div className="absolute inset-0 rounded-2xl  scale-105 translate-x-4 translate-y-4" />
        <img
          src={data[active].img}
          alt={data[active].name}
          className="relative rounded-2xl w-full object-cover shadow-xl"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-xl space-y-4">
        <h2 className="text-2xl font-bold">{data[active].name}</h2>
        <p>{data[active].role}</p>
        <p className="leading-relaxed">{data[active].text}</p>

        {/* Arrows */}
        <div className="flex gap-4 mt-6">
          <button onClick={prev} className="p-2 rounded-full border hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="p-2 rounded-full border hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
