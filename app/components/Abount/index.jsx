import Image from "next/image";
import React from "react";

import junglle from "../../../public/img/about/junglle-graphics.png";
import fox from "../../../public/img/about/fox 1.png";

export default function About() {
  return (
    <div className="w-full h-[1080px] overflow-hidden relative">
      <div className="flex flex-col max-w-[44.5rem] mt-[10%] ml-[10%] w-[80%] md:w-[80%] xl:w-[40%] 2xl:mt-[15.8rem] 2xl:ml-[18.9rem] md:ml-[10%] md:mt-[10%] space-y-24">
        <div className="text-3xl sm:text-5xl font-['Cattino'] leading-[78px] text-[#40a072] justify-start relative w-full">
          Welcome to Bios World
          <div className="text-3xl sm:text-5xl font-['Cattino'] leading-[78px] text-[#deede4] contents">
            {" "}
            Where Memes, Money, and
            {"  "}
            Mother Nature Meet
          </div>
        </div>
        <div className="text-lg sm:text-xl leading-[39.6px] text-[#e9e9e9] relative w-full z-10">
          While others may be dreaming of Mars, here at Bios World, we're putting
          our roots down on Earth. Sure, technological advancement is exciting,
          but we believe our primary responsibility is protecting and preserving
          the beauty of our home planet.
        </div>

      </div>
        <Image className="absolute right-0 bottom-0 2xl:w-[50%]" src={junglle} alt="jungle" />
        <Image className="absolute right-[25%] w-[40%] bottom-[15%]  sm:w-[30%] sm:bottom-[25%] sm:right-[25%] xl:bottom-[25%] xl:w-[20%] xl:right-[20%]" src={fox} alt="fox" /> 
    </div>
  );
}
