import React from "react";
import Table from "./Table";

export default function TokenInfo() {
  return (
    <div className="w-full lg:h-[96.87rem] overflow-hidden relative py-10">
      <div className="whitespace-nowrap text-3xl lg:text-5xl font-['Cattino'] leading-[100px] text-[#40a072] relative w-full flex justify-center lg:mt-10">
        Token Information{" "}
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-7 lg:space-x-64 lg:mt-24 px-4">
        <div>
          <div className="text-xl lg:text-4xl font-['Inter'] font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
            Name : BIOSW
          </div>
          <div className="text-xl lg:text-4xl font-['Inter'] font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
            Token Symbol : BIOSW{" "}
          </div>
          <div className="text-xl lg:text-4xl font-['Inter'] font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
            Blockchain : Binance Chain
          </div>
        </div>
        <div>
          <div className="text-xl lg:text-4xl font-['Inter'] font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
            Token Sale : Total Supply 100B
          </div>
          <div className="text-xl lg:text-4xl font-['Inter'] font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
            BIOSW
          </div>
          <div className="text-xl lg:text-4xl font-['Inter'] font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
            Presale
            {"  "}: 70B
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[10%] lg:mt-32 w-full">
        <Table />
      </div>
    </div>
  );
}
