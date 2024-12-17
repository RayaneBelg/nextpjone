import React from "react";

export default function BannerCta() {
  return (
    <div className="flex flex-col justify-center items-center snap-start h-dvh bg-gradient-cta p-4">
      {/* Wrapper Div for Content with Adjusted Height */}
      <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col sm:flex-row justify-center items-center">
        {/* Images Section */}
        <div className="grid grid-cols-2 gap-1 sm:gap-2 sm:grid-cols-2 px-4 mx-4 sm:w-[50%]">
          <img
            className="sm:h-[30vh] sm:w-[30vh] object-cover border-2 border-black"
            src="../../herobann.jpg"
            alt="Hero Banner"
          />
          <img
            className="sm:h-[30vh] sm:w-[30vh] object-cover border-2 border-black"
            src="../../herobann.jpg"
            alt="Hero Banner"
          />
          <img
            className="sm:h-[30vh] sm:w-[30vh] object-cover border-2 border-black"
            src="../../herobann.jpg"
            alt="Hero Banner"
          />
          <img
            className="sm:h-[30vh] sm:w-[30vh] object-cover border-2 border-black"
            src="../../herobann.jpg"
            alt="Hero Banner"
          />
        </div>

        {/* Text Section */}
        <div className="mx-4 mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left sm:w-[50%] ">
          <h1 className="font-westmeath uppercase sm:text-6xl my-6">
            La Carte
          </h1>
          <p className="sm:text-xl sm:w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            ut minus pariatur ipsum eligendiconsectetur adipisicing elit. Similique,
          
          </p>
        </div>
      </div>
    </div>
  );
}
