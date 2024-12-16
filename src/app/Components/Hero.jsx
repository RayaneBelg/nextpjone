import React from 'react';

export default function Hero() {
  return (
    <div>
      <video
        className="h-[50vh] w-full object-cover"
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
