import React from "react";

import Image from "next/image";
import { Button } from "@material-tailwind/react";

import eth from "../../../public/img/WalletConnection/eth.png";
import bnb from "../../../public/img/WalletConnection/bnb.png";
import usdt from "../../../public/img/WalletConnection/usdt.png";
import biosw from "../../../public/img/WalletConnection/BIOSW 1.png";
import suricato from "../../../public/11 1-min.png";
import bird from "../../../public/img/WalletConnection/bird-01 1.png";
import MyPage from "./MyCountdown";

export default function CardPayment() {
  return (
    <div className="relative z-20 w-4/5 h-4/5 md:w-2/5 2xl:h-4/5 lg:ml-[30%] xl:h-3/5 bg-blue-gray-900 bg-opacity-90 shadow-md rounded-sm p-4 flex justify-center items-center">
      <div className="space-y-8 lg:space-y-4 flex flex-col ">
        <MyPage />
        {/* <div className="group-one flex flex-row space-x-4">
          <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
            <p>15</p>
            <p>Days</p>
          </div>
          <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
            <p>12</p>
            <p>Hours</p>
          </div>
          <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
            <p>30</p>
            <p>Minute</p>
          </div>
          <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
            <p>10</p>
            <p>Second</p>
          </div>
        </div> */}
        <div className="group-two flex w-full h-5 rounded-md border border-gray-500 hover:border-green-300 bg-gray-700">
          <div className="bg-green-600 border-0 rounded-md text-sm px-4">
            <p>Until Next Price: $0.0000324</p>
          </div>
        </div>
        <div className="group-tree flex justify-center text-xs">
          <p>USDT Raised: $5,879,000.34 / $7,876,8745</p>
        </div>
        <div className="group-four flex justify-center items-center">
          <div className="border border-gray-500 hover:border-green-300 h-0 w-1/4"></div>
          <div className="mx-4 text-[10px]">1 BIOSW = $0.00008</div>
          <div className="border border-gray-500 hover:border-green-300 h-0 w-1/4"></div>
        </div>
        <div className="group-five flex flex-row space-x-4 text-[6px] lg:text-[8px]">
          <div className="basis-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2">
            <Image className="w-1/2" src={eth} alt="eth"/>
            <div className="flex flex-col justify-center items-center ">
              <p>ETH</p>
            </div>
          </div>
          <div className="basis-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2">
            <Image className="w-1/2" src={usdt} alt="usdt" />
            <div className="flex flex-col justify-center items-center w-1/2">
              <p>USDT</p>
              <p>ERC20</p>
            </div>
          </div>
          <div className="basis-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2">
            <Image className="w-1/2" src={bnb} alt="bnb" />
            <div className="flex flex-col justify-center items-center w-1/2">
              <p>BNB</p>
            </div>
          </div>
          <div className="basis-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2">
            <Image className="w-1/2" src={usdt} alt="usdt" />
            <div className="flex flex-col justify-center items-center w-1/2">
              <p>USDT</p>
              <p>ERC20</p>
            </div>
          </div>
        </div>
        <div className="group-six flex flex-col justify-center items-center space-y-2">
          <p>ETH Balance 23.00</p>
          <div className="border border-gray-500 hover:border-green-300 w-full"></div>
        </div>
        <div className="group-seven flex justify-between">
          <div className="flex flex-col w-[45%] h-[20%]">
            <div className="flex flex-row justify-between px-2 text-[8px]">
              <p>Amount in ETH you pay</p>
              <p>Max</p>
            </div>
            <div className="flex flex-row justify-between h-[10%] p-1  border border-gray-500 hover:border-green-300 rounded-md">
              <input className="w-full bg-transparent border-0 " type="number" />
              <Image className="" src={eth} alt="eth" />
            </div>
          </div>
          <div className="relative flex flex-col w-[45%] h-[20%]">
            <div className="flex flex-row justify-between px-2 text-[8px]">
              <p>Amount in ETH you pay</p>
              <p>Max</p>
            </div>
            <div className="flex justify-between h-[10%] p-1 border border-gray-500 hover:border-green-300 rounded-md">
              <input className="w-full bg-transparent border-0" type="number" />
              <Image src={biosw} alt="Bios" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1 text-[8px]">
          <p>
            0.0025 BNB is reserved for gas.The actual amount used will depend an
            the network.
          </p>

          <Button color="green">Connect Wallet</Button>
          <p className="pt-4 text-sm">LISTING PRICE: $0.00008</p>
        </div>
      </div>
         <Image className='absolute top-[-15%] -right-[25%] w-[55%] ' src={bird} alt="bird" />
         <Image className='absolute -right-[40%] -bottom-[10%] w-[50%]' src={suricato} alt="meerkat" />
    </div>
    // <div className="shadow-[3px_3px_7px_2px_rgba(0,_0,_0,_0.09)] bg-[rgba(31,_55,_63,_0.9)] flex flex-col justify-center gap-1 relative 2xl:w-[38.75rem] w-[50%] max-[390px]:w-[40rem]  md:w-[80%] h-[30rem] max-h-[40.47463rem] items-stretch pt-10 md:pt-0 pb-8 px-3 xl:px-12 rounded z-10">
    //   <div className="flex flex-row justify-between relative items-center mb-6 ml-0 mr-px">
    //     <div className="border-solid border-[#e9e9e9] bg-[#40a072] flex flex-col justify-start w-[18%] shrink-0 h-16 items-center pt-2 pb-3 border rounded">
    //       <div className="text-center text-xl  font-bold text-[#e9e9e9] justify-start relative h-full">
    //         15
    //         <br />
    //         <div className="text-xs  text-[#e9e9e9] contents">
    //           Days
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border-solid border-[#e9e9e9] bg-[#40a072] flex flex-col justify-start relative w-[18%] shrink-0 h-16 items-center pt-2 pb-3 border rounded">
    //       <div className="text-center text-xl  font-normal text-[#e9e9e9] justify-start relative h-full">
    //         12
    //         <br />
    //         <div className="text-xs font-medium text-[#e9e9e9] contents">
    //           Hours
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border-solid border-[#e9e9e9] bg-[#40a072] flex flex-col justify-start relative w-[18%] shrink-0 h-16 items-center py-2 border rounded">
    //       <div className="text-center text-xl  font-bold text-[#e9e9e9] justify-start relative w-1/2 h-[88.15%]">
    //         30
    //         <br />
    //         <div className="text-xs  text-[#e9e9e9] contents">
    //           minute
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border-solid border-[#e9e9e9] bg-[#40a072] flex flex-col justify-start relative w-[18%] shrink-0 h-16 items-center py-2 border rounded">
    //       <div className="text-center text-xl  font-bold text-[#e9e9e9] justify-start relative w-3/5 h-[87.91%]">
    //         10
    //         <br />
    //         <div className="text-xs  text-[#e9e9e9] contents">
    //           Second
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-blend-normal relative flex flex-col justify-start items-end mb-2 ml-0 mr-px py-px border rounded">
    //     <div className="w-3/5 h-4 bg-[#40a072] absolute top-0 left-0 rounded" />
    //     <div className="text-xs  font-medium text-[#e9e9e9] relative w-[9rem] h-full">
    //       Until Next Price: $0.0000324
    //     </div>
    //   </div>
    //   <div className=" text-[#e9e9e9] self-center mb-2 relative w-full md:w-3/5 h-[3.64%] text-xs text-center">
    //     USDT Raised: $5,879,000.34 / $7,876,8745
    //   </div>
    //   <div className="flex flex-row justify-center gap-8 relative items-center mb-5 ml-0 mr-px">
    //     <div className="border-solid border-[#c1c1c1] relative w-32 shrink-0 h-px bordert borderb-0 borderx-0" />
    //     <div className="text-lg  font-semibold text-[#e9e9e9] mr-px relative md:w-48 shrink-0 h-full">
    //       1 BIOSW = $0.00008
    //     </div>
    //     <div className="border-solid border-[#c1c1c1] relative w-32 shrink-0 h-px bordert borderb-0 borderx-0" />
    //   </div>
    //   <div className="flex flex-row justify-between relative items-center mb-3 ml-0">
    //     <div className="border-solid border-[#40a072] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-center mt-px gap-3 relative h-12 items-center pl-2 pr-3 py-1 border rounded">
    //       <Image
    //         src={eth}
    //         className="min-h-0 min-w-0 relative w-8 shrink-0"
    //       />
    //       <div className="text-xs  font-medium text-[#c1c1c1] relative w-6 shrink-0 h-[50.73%]">
    //         ETH
    //       </div>
    //     </div>
    //     <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-start gap-2 relative items-center pl-2 pr-3 py-1 border rounded">
    //       <Image
    //         src={usdt}
    //         className="min-h-0 min-w-0 mb-1 relative w-8 shrink-0"
    //       />
    //       <div className="text-center text-xs  font-medium text-[#c1c1c1] justify-start relative h-[75.17%]">
    //         USDT
    //         <br />
    //         <div className="text-xs  text-[#c1c1c1] contents">
    //           ERC20
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-start gap-2 relative h-12 items-center pl-2 pr-4 py-1 border rounded">
    //       <Image
    //         src={bnb}
    //         className="min-h-0 min-w-0 relative w-8 shrink-0"
    //       />
    //       <div className="text-center text-xs  font-medium text-[#c1c1c1] relative w-8 shrink-0 h-[38.76%]">
    //         BNB
    //       </div>
    //     </div>
    //     <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-start gap-1 relative h-12 items-center pl-2 pr-3 py-2 border rounded">
    //       <Image
    //         src={usdt}
    //         className="min-h-0 min-w-0 relative w-8 shrink-0"
    //       />
    //       <div className="text-center text-xs  font-medium text-[#c1c1c1] justify-start relative h-[73.9%]">
    //         USDT
    //         <br />
    //         <div className="text-xs  text-[#c1c1c1] contents">
    //           ERC20
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="text-lg  text-[#e9e9e9] self-center mb-10 relative w-40 h-[3.82%]">
    //     ETH Balance 23.00
    //   </div>
    //   <div className="flex flex-row justify-start gap-12 relative items-center ml-px mr-12">
    //     <div className="text-xs  text-[#e9e9e9] relative w-32 shrink-0 h-full">
    //       Amount in ETH you pay
    //     </div>
    //     <div className="text-xs  font-medium text-[#e9e9e9] mr-8 relative w-6 shrink-0 h-[66.84%]">
    //       Max
    //     </div>
    //     <div className="text-xs  text-[#e9e9e9] justify-start relative h-full">
    //       Amount in{" "}
    //       <div className="text-xs  font-medium text-[#e9e9e9] contents">
    //         $BIOSW
    //       </div>
    //       <div className="text-xs  text-[#e9e9e9] contents">
    //         {" "}
    //         you receive
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-row justify-start gap-16 relative items-center mb-4 ml-0 mr-px">
    //     <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-between mb-0 relative w-2/5 h-12 items-center px-2 border rounded">
    //       <div className=" font-bold text-[#e9e9e9] relative w-2 shrink-0 h-[35.96%]">
    //         0
    //       </div>
    //       <Image
    //         src={eth}
    //         className="min-h-0 min-w-0 relative w-8 shrink-0"
    //       />
    //     </div>
    //     <div className="border-solid border-[#e9e9e9] bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.23)_0%,rgba(217,_217,_217,_0)_169%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-between relative w-2/5 h-12 items-center px-3 border rounded">
    //       <div className=" font-bold text-[#e9e9e9] relative w-2 shrink-0 h-[35.96%]">
    //         0
    //       </div>
    //       <Image
    //         src={biosw}
    //         className="min-h-0 min-w-0 relative w-10 shrink-0"
    //       />
    //     </div>
    //   </div>
    //   <div className="text-center text-xs  font-medium text-[#e9e9e9] self-center mb-1 relative w-2/3 h-[4.68%]">
    //     0.0025 BNB is reserved for gas.The actual amount used will
    //     <br />
    //     depend an the network.
    //   </div>
    //   <div className="bg-[#40a072] self-center flex flex-col justify-center mb-6 relative h-16 shrink-0 items-stretch px-8 rounded">
    //     <div className="text-lg  font-medium leading-[27px] text-white relative h-[46.55%]">
    //       Connect Wallet
    //     </div>
    //   </div>
    //   <div className="text-xs  font-semibold text-[#e9e9e9] self-center relative w-36 h-[1.73%]">
    //     LISTING PRICE: $0.00008
    //   </div>
    

    // </div>
  );
}
