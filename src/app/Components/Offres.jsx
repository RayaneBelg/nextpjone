"use client";

import React from "react";
import { offers } from "../assets/data";

export default function Offres() {
  return (
    <div className="flex flex-col snap-start h-dvh bg-white">
      {/* Wrapper Div for Content with Adjusted Height */}
      <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col">
        {/* Video Section */}
        <div className="flex-shrink-0 w-full">
          <video
            className="h-[30vh] md:h-[35vh] lg:h-[40vh] w-full object-cover object-bottom"
            src="../../head.mov"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-center px-4 ">
          <h1 className="font-westmeath uppercase text-xl sm:text-4xl lg:text-5xl text-center my-2">
            Formules
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
            {offers.map((off, id) => (
              <div
                key={id}
                className="p-4 border border-gray-200 shadow-md rounded-lg text-center bg-white hover:shadow-lg transition-shadow"
              >
                <h1 className="text-sm sm:text-lg lg:text-xl font-bold font-westmeath uppercase">
                  {off.nom}
                </h1>
                <ul className="mt-2 space-y-1">
                  {off.inclus.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm lg:text-base text-gray-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm sm:text-lg lg:text-xl mt-4 font-semibold">
                  {off.prix} €
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
