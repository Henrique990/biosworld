import Image from "next/image";
import React from "react";

import preguiça from "../../../public/preguiça.png"
import esquilo from "../../../public/img/tokenomics/Group 46.png"

export default function Tokenomics() {
  return (
    <div className="w-full h-[96.87rem] overflow-hidden relative">
      <div className="text-5xl font-['Cattino'] leading-[78px] capitalize text-[#40a072] relative w-full flex justify-center mt-52">
        Tokenomics
      </div>
      <div className="text-5xl font-['Inter'] font-bold leading-[72px] text-[#e9e9e9] flex justify-center relative w-full mt-44">
        100,000,000,000
        <div className="text-5xl font-['Inter'] font-bold leading-[72px] text-[#deede4] contents">
          {" "}
        </div>
        <div className="text-5xl font-['Cattino'] leading-[72px] text-[#40a072] contents">
          Total Supply
        </div>
      </div>
      <div className="flex justify-center">
        <Image className="absolute top-0 left-0" src={preguiça} />
        <Image className="absolute top-[33.9rem]" src={esquilo} />
      </div>
    </div>
  );
}
