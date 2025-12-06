// import React from 'react';
import ContactSection from "@/layouts/ContactPage";
function Contact() {
  return (


         <>
        <div>
            <div
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/img/contactpijja.png')" }}
               >
                    <div
                                className="
                                text-5xl
                                text-primary
                                font-cursive
                                max-w-[90%] sm:max-w-[400px] md:max-w-[500px]
                                mx-auto bg-white 
                                px-4 sm:px-6 md:px-8 
                                py-10 sm:py-14 md:py-20 
                                text-center relative top-12 sm:top-16 md:top-20
                                shadow-lg rounded-md
                                "
                            >
                                Contact Us
                        </div>
                  </div>

                    <div
                       className="w-full h-[800px] sm:h-[800px] md:h-[450px] bg-cover bg-center bg-no-repeat"
                       style={{ backgroundImage: "url('/img/bg-black.avif')" }}
                     >
                      
                      <div>
                          <ContactSection/>
                      </div>
                    </div>

              </div>
         </>
  );
}

export default Contact;
