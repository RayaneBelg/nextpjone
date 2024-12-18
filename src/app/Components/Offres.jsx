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
            className="h-[27vh] md:h-[35vh] lg:h-[40vh] w-full object-cover object-bottom"
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
          <h1 className="font-westmeath uppercase text-4xl sm:text-4xl lg:text-6xl   sm:my-6 my-2">
            Formules
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
            {offers.map((off, id) => (
              <div
                key={id}
                className=" card p border border-gray-200 shadow-md rounded-lg text-center bg-white hover:shadow-lg transition-shadow"
              >
                <h1 className="font-westmeath uppercase text-xl sm:text-4xl lg:text-5xl text-center my-2">
                  {off.nom}
                </h1>
                <ul className="mt space-y-3 sm:space-y-8  sm:my-16 font-mono">
                  {off.inclus.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs font-bold sm:text-xl sm:uppercase text-gray-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm sm:text-3xl mt-4 font-extrabold text-red-700">
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
