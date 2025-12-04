// import React from 'react';

function HeroSection() {
  return (
    <div
      className="h-[200px] lg:h-[500px]  max-w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img/img.png')" }}
    >
      <h1 className="text-justify text-[20px] md:text-2xl lg:text-5xl font-bold text-primary p-4 font-cursive">
           THE WINE IS VERY HERMFUL FOR OUR BODY
      </h1>
    </div>
  );
}

export default HeroSection;
