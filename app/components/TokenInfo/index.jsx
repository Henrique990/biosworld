import React from "react";
import Table from "./Table";

export default function TokenInfo() {
  return (
    <div>
      TokenInfo
      <div className="whitespace-nowrap text-5xl font-['Cattino'] leading-[100px] text-[#40a072] relative w-full">
        Token Information{" "}
      </div>
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
          Token Sale : Total Supply 100B BIOSW
        </div>
        <div className="text-4xl font-['Inter'] font-medium leading-[84px] text-[#e9e9e9] relative w-full">
          Presale
          {"  "}: 70B
        </div>
      </div>
      <Table />
    </div>
  );
}
