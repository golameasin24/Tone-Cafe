import React from 'react';
import FoodShow from './FoodShow';

function ToneCafe() {
  return (
    <div 
      className="flex max-sm:flex-col-reverse flex-col "
      style={{ backgroundImage: "url('/img/bg-tone-cafe.png')" }}
    >
      <img 
        className="lg:max-w-[1300px] mx-auto" 
        src="/img/TONÉ-CAFÉ-magnit.avif" 
        alt="tonecafe" 
      />

        <div className="flex flex-col justify-center sm:flex-row sm:justify-center bg-gradient-to-r from-black via-[#413f3f] to-black sm:p-10">
             <h4 className="font-custom text-[25px] text-center py-5 sm:hidden  text-gray-500 ">Go Green Mag.com</h4>
            <div className="mr-5 ">
                <img src="/img/tone1.avif" alt="tone1" className="w-[100px] mx-auto sm:w-[150px] sm:h-auto rounded-md" />
            </div>
            
            <div className=" sm:w-[500px]">
                <h4 className="font-custom hidden sm:block sm:text-[15px] text-gray-500 sm:mb-2 sm:text-center">Go GreenMag.com</h4>
                <p className="font-cursive px-7 py-4 sm:px-0  sm:py-0 text-2xl text-primary">
                “Indulge in the rich and flavorful taste of Georgia at Tone Cafe, where every dish tells a story of authentic Georgian cuisine”
                </p>
            </div>
        </div>

      <FoodShow />

    </div>
  );
}

export default ToneCafe;
