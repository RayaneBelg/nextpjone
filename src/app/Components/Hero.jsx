import React from 'react';

export default function Hero() {
  return (
    <div>
      <video
        className="h-[20vh] md:h-[30vh] w-full object-cover object-bottom"
        src="../../head.mov"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
