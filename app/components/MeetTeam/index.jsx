import React from "react";
import Cards from "./Cards";

import savana from "../../../public/animals-savana.svg";
import Image from "next/image";

export default function MeetTeam() {
  return (
    <div className="w-full xl:h-[1580px] relative mt-20">
      <Image className=" absolute bottom-0" src={savana} />
      <div className="lg:text-5xl md:text-3xl text-center font-['Cattino'] leading-[78px] capitalize text-[#40a072] w-full py-[6.94rem]">
        Meet The Team
      </div>
      <div className="flex justify-center">
        <Cards />
      </div>
    </div>
  );
}
