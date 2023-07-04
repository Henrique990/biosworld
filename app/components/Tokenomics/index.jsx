import Image from "next/image";
import React from "react";

import preguiça from "../../../public/img/tokenomics/bicho-preguiça.png"
import esquilo from "../../../public/img/tokenomics/Group 46.png"

export default function Tokenomics() {
  return (
    <div>
      Tokenomics
      <div className="text-5xl font-['Cattino'] leading-[78px] capitalize text-[#40a072] relative w-full">
        Tokenomics
      </div>
      <div className="text-5xl font-['Inter'] font-bold leading-[72px] text-[#e9e9e9] justify-start relative w-full">
        100,000,000,000
        <div className="text-5xl font-['Inter'] font-bold leading-[72px] text-[#deede4] contents">
          {" "}
        </div>
        <div className="text-5xl font-['Cattino'] leading-[72px] text-[#40a072] contents">
          Total Supply
        </div>
      </div>
      <div>
        <Image src={preguiça} />
        <Image src={esquilo} />
      </div>
    </div>
  );
}
