import React from "react";
import Cards from "./Cards";

import savana from "../../../public/animals-savana.svg";
import Image from "next/image";

export default function MeetTeam() {
  return (
    <div>
      <div className="text-5xl md:text-3xl text-center font-['Cattino'] leading-[78px] capitalize text-[#40a072] w-full pt-[16.94rem]">
        Meet The Team
      </div>
      <Image className="absolute" src={savana} />
      <div className="flex justify-center mt-48">
        <Cards />
      </div>
    </div>
  );
}
