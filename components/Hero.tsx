"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find the best car deals for your trip in Oporto city!
        </h1>

        <p className="hero__subtitle">
          Elevate your adventure in Porto effortlessly with our convenient
          vehicle rental reservation system.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles=" bg-orange-400 text-white rounded-full mt-10 hover:bg-orange-500 "
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
