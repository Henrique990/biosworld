import React from "react";
import Image from "next/image";

import rosto from "../../../public/rosto-menina.png";
import fox from "../../../public/fox.png";
import animals from "../../../public/animals.png";

export default function Cards() {
  return (
    //   <div className="w-[1316px] h-[847.21px] relative">
    //     <div className="w-[424px] h-[843.21px] left-0 top-[2px] absolute">
    //       <div className="w-[424px] h-[843.21px] left-0 top-0 absolute bg-slate-800" />
    //       <div className="w-[364px] h-[750.30px] left-[30px] top-[28.97px] absolute">
    //         <Image
    //           className="w-[364px] h-[253.76px] left-0 top-0 absolute"
    //           src={rosto} />
    //         <div className="w-[353px] h-[452.27px] left-[11px] top-[298.03px] absolute">
    //           <div className="w-[353px] h-[362.66px] left-0 top-[89.61px] absolute text-gray-200 text-[22px] font-normal leading-10">
    //             Our meme-tastic founder, is a true connoisseur of code who
    //             swapped the concrete jungle for the heart of the rainforest.
    //             Known for her genius in tech, she's as comfortable crafting
    //             complex algorithms as she is identifying the calls of rare
    //             birds.
    //           </div>
    //           <div className="w-[183px] left-[2px] top-0 absolute">
    //             <span className="text-white text-[28px] font-normal capitalize leading-10">
    //               flora - Founder
    //               <br />
    //             </span>
    //             <span className="text-white text-[14px] font-normal capitalize leading-tight">
    //               Tech-savvy treehugger
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-[424px] h-[845.21px] left-[446px] top-[2px] absolute">
    //       <div className="w-[424px] h-[845.21px] left-0 top-0 absolute bg-slate-800" />
    //       <div className="w-[364px] h-[750.30px] left-[30px] top-[28.97px] absolute">
    //         <Image
    //           className="w-[364px] h-[253.76px] left-0 top-0 absolute"
    //           src={fox} />
    //         <div className="w-[353px] h-[452.27px] left-[5px] top-[298.03px] absolute">
    //           <div className="w-[353px] h-[362.66px] left-0 top-[89.61px] absolute text-gray-200 text-[22px] font-normal leading-10">
    //             Fauna is more than just a meme – she's a revolution. Armed with
    //             a stethoscope in one hand and a keyboard in the other, she's a
    //             genius doctor and tech enthusiast who's breaking boundaries as
    //             the co-founder of Bios World.
    //           </div>
    //           <div className="w-[343px] left-0 top-0 absolute">
    //             <span className="text-white text-[28px] font-normal capitalize leading-10">
    //               fauna - co-founder
    //               <br />
    //             </span>
    //             <span className="text-white text-[14px] font-normal capitalize leading-tight">
    //               doctor-techie championing biodiversity
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-[424px] h-[845.21px] left-[892px] top-0 absolute">
    //       <div className="w-[424px] h-[845.21px] left-0 top-0 absolute bg-slate-800" />
    //       <div className="w-[364px] h-[750.30px] left-[30px] top-[30.97px] absolute">
    //         <Image
    //           className="w-[364px] h-[253.76px] left-0 top-0 absolute"
    //           src={animals} />
    //         <div className="w-[353px] h-[445.27px] left-[5px] top-[305.03px] absolute">
    //           <div className="w-[353px] h-[362.66px] left-0 top-[82.61px] absolute text-gray-200 text-[22px] font-normal leading-10">
    //             The meme-tastic tech team that's traded office desks for forest
    //             dens. Living in harmony with nature, they're the coding
    //             champions behind Bios World, turning the whispers of the
    //             wilderness into digital dialects.
    //           </div>
    //           <div className="w-[343px] left-0 top-0 absolute">
    //             <span className="text-white text-[28px] font-normal capitalize leading-10">
    //               bios code army
    //               <br />
    //             </span>
    //             <span className="text-white text-[14px] font-normal capitalize leading-tight">
    //               tech warriors of the wild
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="flex flex-row justify-between w-full items-center z-10 mx-[17rem] gap-6">
      <div className="bg-[#203d41] flex flex-col justify-start gap-8 items-center pt-8 pb-16 px-8">
        <Image
          src={rosto}
          className="min-h-0 min-w-0 mb-3"
        />
        <div className="text-3xl font-['Cattino'] leading-[42px] capitalize text-white self-start justify-start ml-3 w-1/2">
          flora - Founder
          <br />
          <div className="text-sm font-['Inter'] leading-[21px] capitalize text-white contents">
            Tech-savvy treehugger
          </div>
        </div>
        <div className="text-xl font-['Inter'] leading-[44px] text-[#e9e9e9] self-stretch ml-3 h-[48.38%]">
          Our meme-tastic founder, is a true connoisseur of code who swapped the
          concrete jungle for the heart of the rainforest. Known for her genius
          in tech, she's as comfortable crafting complex algorithms as she is
          identifying the calls of rare birds.
        </div>
      </div>
      <div className="bg-[#203d41] flex flex-col justify-start gap-8 items-stretch pt-8 pb-16 px-8">
        <Image
          src={fox}
          className="min-h-0 min-w-0 self-center mb-3"
        />
        <div className="text-3xl font-['Cattino'] leading-[42px] capitalize text-white justify-start ml-1 mr-4">
          fauna - co-founder
          <br />
          <div className="text-sm font-['Inter'] leading-[21px] capitalize text-white contents">
            doctor-techie championing biodiversity
          </div>
        </div>
        <div className="text-xl font-['Inter'] leading-[44px] text-[#e9e9e9] h-[48.38%] mx-1">
          Fauna is more than just a meme – she's a revolution. Armed with a
          stethoscope in one hand and a keyboard in the other, she's a genius
          doctor and tech enthusiast who's breaking boundaries as the co-founder
          of Bios World.
        </div>
      </div>
      <div className="bg-[#203d41] flex flex-col justify-start gap-6 items-stretch pt-8 pb-16 px-8">
        <Image
          src={animals}
          className="min-h-0 min-w-0 self-center mb-6"
        />
        <div className="text-3xl font-['Cattino'] leading-[42px] capitalize text-white justify-start ml-1 mr-4">
          bios code army
          <br />
          <div className="text-sm font-['Inter'] leading-[21px] capitalize text-white contents">
            tech warriors of the wild
          </div>
        </div>
        <div className="text-xl font-['Inter'] leading-[44px] text-[#e9e9e9] h-[48.38%] mx-1">
          The meme-tastic tech team that's traded office desks for forest dens.
          Living in harmony with nature, they're the coding champions behind
          Bios World, turning the whispers of the wilderness into digital
          dialects.
        </div>
      </div>
    </div>
  );
}
