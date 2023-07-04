import React from "react";

import Image from "next/image";

import eth from "../../../public/img/WalletConnection/eth.png";
import bnb from "../../../public/img/WalletConnection/bnb.png";
import usdt from "../../../public/img/WalletConnection/usdt.png";
import biosw from "../../../public/img/WalletConnection/BIOSW 1.png";

export default function CardPayment() {
  return (
    <div className="shadow-[3px_3px_7px_2px_rgba(0,_0,_0,_0.09)] bg-[rgba(31,_55,_63,_0.9)] flex flex-col justify-start gap-1 relative max-w-[38.75rem] max-h-[40.47463rem] items-stretch pt-10 pb-8 px-12 rounded ">
      <div className="flex flex-row justify-between relative items-center mb-6 ml-0 mr-px">
        <div className="border-solid border-[#e9e9e9] bg-[#40a072] flex flex-col justify-start relative w-24 shrink-0 h-16 items-center pt-2 pb-3 border rounded">
          <div className="text-center text-xl font-['Inter'] font-bold text-[#e9e9e9] justify-start relative h-full">
            15
            <br />
            <div className="text-xs font-['Inter'] text-[#e9e9e9] contents">
              Days
            </div>
          </div>
        </div>
        <div className="border-solid border-[#e9e9e9] bg-[#40a072] flex flex-col justify-start relative w-24 shrink-0 h-16 items-center pt-2 pb-3 border rounded">
          <div className="text-center text-xl font-['Inter'] font-bold text-[#e9e9e9] justify-start relative h-full">
            12
            <br />
            <div className="text-xs font-['Inter'] text-[#e9e9e9] contents">
              Hours
            </div>
          </div>
        </div>
        <div className="border-solid border-[#e9e9e9] bg-[#40a072] flex flex-col justify-start relative w-24 shrink-0 h-16 items-center py-2 border rounded">
          <div className="text-center text-xl font-['Inter'] font-bold text-[#e9e9e9] justify-start relative w-1/2 h-[88.15%]">
            30
            <br />
            <div className="text-xs font-['Inter'] text-[#e9e9e9] contents">
              minute
            </div>
          </div>
        </div>
        <div className="border-solid border-[#e9e9e9] bg-[#40a072] flex flex-col justify-start relative w-24 shrink-0 h-16 items-center py-2 border rounded">
          <div className="text-center text-xl font-['Inter'] font-bold text-[#e9e9e9] justify-start relative w-3/5 h-[87.91%]">
            10
            <br />
            <div className="text-xs font-['Inter'] text-[#e9e9e9] contents">
              Second
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal relative flex flex-col justify-start items-end mb-2 ml-0 mr-px px-40 py-px border rounded">
        <div className="w-3/5 h-4 bg-[#40a072] absolute top-0 left-0 rounded" />
        <div className="text-xs font-['Inter'] font-medium text-[#e9e9e9] relative w-[140px] h-full">
          Until Next Price: $0.0000324
        </div>
      </div>
      <div className="font-['Inter'] text-[#e9e9e9] self-center mb-2 relative w-3/5 h-[3.64%]">
        USDT Raised: $5,879,000.34 / $7,876,8745
      </div>
      <div className="flex flex-row justify-start gap-8 relative items-center mb-5 ml-0 mr-px">
        <div className="border-solid border-[#c1c1c1] relative w-32 shrink-0 h-px bordert borderb-0 borderx-0" />
        <div className="text-lg font-['Inter'] font-semibold text-[#e9e9e9] mr-px relative w-48 shrink-0 h-full">
          1 BIOSW = $0.00008
        </div>
        <div className="border-solid border-[#c1c1c1] relative w-32 shrink-0 h-px bordert borderb-0 borderx-0" />
      </div>
      <div className="flex flex-row justify-between relative items-center mb-3 ml-0">
        <div className="border-solid border-[#40a072] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-center mt-px gap-3 relative h-12 items-center pl-2 pr-3 py-1 border-2 rounded">
          <Image
            src={eth}
            className="min-h-0 min-w-0 relative w-8 shrink-0"
          />
          <div className="text-xs font-['Inter'] font-medium text-[#c1c1c1] relative w-6 shrink-0 h-[50.73%]">
            ETH
          </div>
        </div>
        <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-start gap-2 relative items-center pl-2 pr-3 py-1 border-2 rounded">
          <Image
            src={usdt}
            className="min-h-0 min-w-0 mb-1 relative w-8 shrink-0"
          />
          <div className="text-center text-xs font-['Inter'] font-medium text-[#c1c1c1] justify-start relative h-[75.17%]">
            USDT
            <br />
            <div className="text-xs font-['Inter'] text-[#c1c1c1] contents">
              ERC20
            </div>
          </div>
        </div>
        <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-start gap-2 relative h-12 items-center pl-2 pr-4 py-1 border-2 rounded">
          <Image
            src={bnb}
            className="min-h-0 min-w-0 relative w-8 shrink-0"
          />
          <div className="text-center text-xs font-['Inter'] font-medium text-[#c1c1c1] relative w-8 shrink-0 h-[38.76%]">
            BNB
          </div>
        </div>
        <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-start gap-1 relative h-12 items-center pl-2 pr-3 py-2 border-2 rounded">
          <Image
            src={usdt}
            className="min-h-0 min-w-0 relative w-8 shrink-0"
          />
          <div className="text-center text-xs font-['Inter'] font-medium text-[#c1c1c1] justify-start relative h-[73.9%]">
            USDT
            <br />
            <div className="text-xs font-['Inter'] text-[#c1c1c1] contents">
              ERC20
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg font-['Inter'] text-[#e9e9e9] self-center mb-10 relative w-40 h-[3.82%]">
        ETH Balance 23.00
      </div>
      <div className="flex flex-row justify-start gap-12 relative items-center ml-px mr-12">
        <div className="text-xs font-['Inter'] text-[#e9e9e9] relative w-32 shrink-0 h-full">
          Amount in ETH you pay
        </div>
        <div className="text-xs font-['Inter'] font-medium text-[#e9e9e9] mr-8 relative w-6 shrink-0 h-[66.84%]">
          Max
        </div>
        <div className="text-xs font-['Inter'] text-[#e9e9e9] justify-start relative h-full">
          Amount in{" "}
          <div className="text-xs font-['Inter'] font-medium text-[#e9e9e9] contents">
            $BIOSW
          </div>
          <div className="text-xs font-['Inter'] text-[#e9e9e9] contents">
            {" "}
            you receive
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-16 relative items-center mb-4 ml-0 mr-px">
        <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-between mb-0 relative w-2/5 h-12 items-center px-2 border rounded">
          <div className="font-['Inter'] font-bold text-[#e9e9e9] relative w-2 shrink-0 h-[35.96%]">
            0
          </div>
          <Image
            src={eth}
            className="min-h-0 min-w-0 relative w-8 shrink-0"
          />
        </div>
        <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-between relative w-2/5 h-12 items-center px-3 border rounded">
          <div className="font-['Inter'] font-bold text-[#e9e9e9] relative w-2 shrink-0 h-[35.96%]">
            0
          </div>
          <Image
            src={biosw}
            className="min-h-0 min-w-0 relative w-10 shrink-0"
          />
        </div>
      </div>
      <div className="text-center text-xs font-['Inter'] font-medium text-[#e9e9e9] self-center mb-1 relative w-2/3 h-[4.68%]">
        0.0025 BNB is reserved for gas.The actual amount used will
        <br />
        depend an the network.
      </div>
      <div className="bg-[#40a072] self-center flex flex-col justify-center mb-6 relative h-16 shrink-0 items-stretch px-8 rounded">
        <div className="text-lg font-['Inter'] font-medium leading-[27px] text-white relative h-[46.55%]">
          Connect Wallet
        </div>
      </div>
      <div className="text-xs font-['Inter'] font-semibold text-[#e9e9e9] self-center relative w-32 h-[1.73%]">
        LISTING PRICE: $0.00008
      </div>
    </div>
  );
}
