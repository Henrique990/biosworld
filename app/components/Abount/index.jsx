import Image from "next/image";
import React from "react";

import junglle from "../../../public/img/about/junglle-graphics.png";
import fox from "../../../public/img/about/fox 1.png";

export default function About() {
  return (
    <div className="w-full h-[67.5rem] overflow-hidden relative">
      <div className="flex flex-col max-w-[44.5rem] mt-[15.8rem] ml-[18.9rem] space-y-24">
        <div className="text-5xl font-['Cattino'] leading-[78px] text-[#40a072] justify-start relative w-full">
          Welcome to Bios World
          <div className="text-5xl font-['Cattino'] leading-[78px] text-[#deede4] contents">
            {" "}
            Where Memes, Money, and
            {"  "}
            Mother Nature Meet
          </div>
        </div>
        <div className="text-xl font-['Inter'] leading-[39.6px] text-[#e9e9e9] relative w-full">
          While others may be dreaming of Mars, here at Bios World, we're putting
          our roots down on Earth. Sure, technological advancement is exciting,
          but we believe our primary responsibility is protecting and preserving
          the beauty of our home planet.
        </div>

      </div>
      <div>
        <Image className="absolute right-0 bottom-0" src={junglle} />
        <Image className="absolute right-[18.9rem] top-[14.2rem] max-w-[27.5rem]" src={fox} /> 
      </div>
    </div>
  );
}
