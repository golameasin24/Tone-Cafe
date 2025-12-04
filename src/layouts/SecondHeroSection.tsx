import React from 'react';

function SecondHeroSection() {
  return (
    <section 
      className="
        flex flex-col md:flex-row 
        justify-center items-center 
        h-auto md:h-[300px] 
        bg-cover bg-center
      "
      style={{ backgroundImage: "url('/img/light-img.png')" }}
    >

      {/* Left spacer (only visible on large screens) */}
      <div className="hidden lg:flex flex-1"></div>

      {/* Center Image */}
      <img
        className="
          w-full md:w-[400px] 
          h-[200px] md:h-[300px] 
          object-cover 
           md:my-0
         
        "
        src="https://static.wixstatic.com/media/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg/v1/fill/w_735,h_393,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg"
        alt="picture"
      />

      {/* Right Content */}
   <div
  className="
    bg-gradient-to-r 
    from-[#060403] 
    to-primary/70
    w-full md:w-[400px]
    h-[200px] md:h-[300px]
    flex flex-col justify-center items-center
    p-4
    lg:mr-50
    2xl:mr-[500px]
   
  "
>
  <h4 className="mb-2 text-center text-[50px] text-primary font-cursive">
    Join EASIN Club
  </h4>

  <button
    className="
      bg-primary 
      px-20 py-2 
      text-white 
      hover:text-primary hover:bg-white 
      transition
      mb-3 
      lg:md-0
    "
  >
    Sign up
  </button>
</div>


    </section>
  );
}

export default SecondHeroSection;
