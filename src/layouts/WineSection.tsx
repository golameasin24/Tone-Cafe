import React from "react";



function WineSection() {
  return (
    <div className="xl:w-[1200px] xl:mx-auto lg: mt-20">
      <div className=" md:grid grid-cols-2 gap-2 lg:gap-0">

        <div className="">
                <p className="mb-2 mt-3 text-[20px] sm:text-center  text-gray-500">OUR RESTAURANT</p>
                <p className=" lg:ml-14 text-primary mb-5 font-custom xl:ml-30">KABA BOGDANOVI OWNER & FOUNDER</p>
                <img className="w-[320px]  sm:w-[640px] md:w-[768px] md:h-[400px]  lg:w-[400px] lg:mx-auto object-cover" src="/img/wine-man.png" alt="wine-man" />
                <p className=' mb-5  lg:ml-12 text-primary xl:ml-30'>FOUNDED 2012</p>
                <p className="mt-5 mb-2 text-primary font-custom lg:hidden">OUR RESTAURANT</p>
         </div>

           <div className="order-3">
            <img className='lg:w-[450px] lg:mx-auto lg:h-[450px]' src="/img/house.png" alt="house" />
           </div>
      


             <div className="md:mt-20">
                      <p className="mt-5 mb-2 text-primary hidden lg:block font-custom lg:hidden">OUR RESTAURANT</p>
                  <h4 className="text-3xl font-cursive font-[100] mb-2 mt-4 text-primary">Georgian Authentic Cuisine for everyone</h4>
                   <p className="font-cursive text-primary mb-5 md:text-[12px]">
                Welcome to Tone-Cafe, a cozy and authentic Georgian cuisine restaurant located in the heart of New York.
                Our restaurant offers a unique dining experience with a menu that highlights the bold and flavorful dishes
                of Georgia. 
              </p>
              <p className="text-primary font-cursive mb-4">
                At Tone-Cafe, we take pride in using only the freshest and highest quality ingredients to
                create our dishes. Our menu features a wide range of options, from traditional Georgian staples such as
                Khachapuri and Khinkali, to lesser-known but equally delicious dishes like Chakapuli.
              </p>
                   <button  className="bg-primary px-4 hidden md:block text-white mt-4 py-1">Read More Here &gt;</button>
             </div>



             <div>
                  <img className='md:h-[400px] lg:w-[380px] lg:mx-auto lg:mb-10' src="/img/wine.png" alt="wine" />
              </div>

                <button  className="bg-primary px-4 md:hidden text-white mt-4 py-1">Read More Here &gt;</button>
              
                  <img className='mb-10 lg:w-[420px] lg:mx-auto lg:mb-10 order-4 md:h-[400px]' src="/img/laddu.png" alt="house" />
                  <img className='lg:w-[400px] lg:h-[350px]  lg:mb-10' src="/img/house2.png" alt="house" />
              
             
      </div>
             
            <div className='text-primary px-18'>
                <h4 className='text-3xl font-cursive py-5'>Real Georgian Khinkali by Chef Levan  finally is here </h4>
                <p className='text-justify text-[14px]'>Welcome to Tone-Cafe, the ultimate destination for authentic Georgian cuisine in New York City! Our restaurant is dedicated to serving you the best traditional Georgian dishes that are sure to tantalize your taste buds and transport you to the vibrant country of Georgia.

                        At Tone-Cafe, we pride ourselves on using only the freshest and highest quality ingredients in all of our dishes. Our menu is inspired by the rich culinary heritage of Georgia, with each dish prepared to perfection by our expert chefs.

                        One of our most popular dishes is the Khachapuri, a delicious cheese-filled bread that is a staple in Georgian cuisine. We also offer a variety of meat and vegetarian options, including our mouth-watering grilled meats, stews, and savory vegetarian dishes. Don't forget to try our famous Georgian dumplings, known as Khinkali, which are filled with spiced meat, cheese, or mushrooms.

                        Our warm and inviting atmosphere is perfect for a romantic evening out or a casual meal with friends and family. Our attentive staff will make sure you feel at home and provide you with a memorable dining experience.

                        At Tone-Cafe, we also offer a variety of Georgian wines to perfectly complement your meal. Our wine list features a selection of red, white, and sparkling wines from the finest vineyards in Georgia.

                        So why not come and experience the taste of Georgia at Tone-Cafe? We promise you won't be disappointed!

                        

                        Our Khachapuri, a Georgian cheese-filled bread, is a must-try item on the menu. The bread is freshly baked and served hot, with a gooey mixture of cheese that oozes out with every bite. The Khinkali, Georgian dumplings filled with spiced meat or vegetables, are also a popular choice.

                        In addition to our savory dishes, we also offer a selection of Georgian wines and spirits to perfectly complement your meal. Our friendly and knowledgeable staff are always on hand to provide recommendations and ensure your dining experience is a memorable one.

                        Whether you're a seasoned Georgian food lover or trying it for the first time, we invite you to come and experience the unique flavors of Tone-Cafe. We look</p>
                        <button className="mb-10 bg-primary px-4 text-white mt-4 py-1">Read More Here &gt;</button>
            </div>
    </div>
  );
}

export default WineSection;
