import React from "react";
import Table from "./Table";

export default function TokenInfo() {
  return (
    <div className="w-full h-[96.87rem] overflow-hidden relative">
      <div className="whitespace-nowrap text-5xl font-['Cattino'] leading-[100px] text-[#40a072] relative w-full flex justify-center mt-10">
        Token Information{" "}
      </div>
      <div className="flex justify-center space-x-64 mt-24">
        <div>
          <div className="text-4xl font-['Inter'] font-medium leading-[84px] text-[#e9e9e9] relative w-full">
            Name : BIOSW
          </div>
          <div className="text-4xl font-['Inter'] font-medium leading-[82px] text-[#e9e9e9] relative w-full">
            Token Symbol : BIOSW{" "}
          </div>
          <div className="text-4xl font-['Inter'] font-medium leading-[84px] text-[#e9e9e9] relative w-full">
            Blockchain : Binance Chain
          </div>
        </div>
        <div>
          <div className="text-4xl font-['Inter'] font-medium leading-[84px] text-[#e9e9e9] relative w-full">
            Token Sale : Total Supply 100B
          </div>
          <div className="text-4xl font-['Inter'] font-medium leading-[84px] text-[#e9e9e9] relative w-full">
            BIOSW
          </div>
          <div className="text-4xl font-['Inter'] font-medium leading-[84px] text-[#e9e9e9] relative w-full">
            Presale
            {"  "}: 70B
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-32">
        <Table />
      </div>
    </div>
  );
}
