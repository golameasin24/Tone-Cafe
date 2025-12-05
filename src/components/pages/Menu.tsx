// import React from 'react';

import TeamSection from "../ui/Testomoneal";
import TestimonialCard from "../ui/TestomonialCard";



function Menu() {
  return (
    <>
    <div 
    className=" backdrop-blur-7xl"
      style={{ backgroundImage: "url('/img/plate.png')" }}
    >
        <div
            className='h-[400px] lg:h-[500px]  max-w-full '
                style={{ backgroundImage: "url('/img/plate.png')" }}
            >
                <div className='  backdrop-blur-[5px] w-[300px] px-5 sm:px-10 py-2 sm:py-10 sm:w-[520px] mx-auto flex flex-col items-center relative top-10 sm:top-15 md:top-40'>
                    <h4 className='text-primary text-center text-2xl sm:text-5xl mb-10 font-custom'>MENU</h4>
                    <p className='text-gray-400 bg-[#757373]'>You Can order from our Direct Ordering Page </p>
                    <button className='hover:bg-white  hover:text-primary bg-primary px-6 py-2 mt-10 text-center text-white'>Order Now</button>
                </div>
            </div>
          <div className="bg-[#2F2E2E] p-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-10 xl:py-10  xl:px-40">
               <img className="sm:w-full  xl:mx-auto" src="/img/certificate.png" alt="" />
               <img className="sm:w-full  xl:mx-auto" src="/img/certificate.png" alt="" />
               <img className="sm:w-full  xl:mx-auto" src="/img/certificate.png" alt="" />
               <img className="sm:w-full  xl:mx-auto" src="/img/certificate.png" alt="" />
          </div>
            <div className="bg-[#3A2D18] opacity-90 px-4 py-5 sm:px-2 sm:py-3 lg:px-5 ">
                    <div className="bg-[#2F2E2E] text-primary p-6 sm:p-10 rounded-xl">
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Team.</h4>

                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        "Experience the Taste of Georgia at Tone Cafe - Where Authenticity Meets Deliciousness!"
                        </p>
                    </div>
            </div>

            <div>
                <TestimonialCard/>
                <TeamSection/>
            </div>

    </div>
    </>
  );
}

export default Menu;
