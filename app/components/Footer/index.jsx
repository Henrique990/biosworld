import Image from "next/image";
import React from "react";

import bios from "../../../public/bios.png";
import discord from "../../../public/discord.png";
import email from "../../../public/email.png";
import twitter from "../../../public/twitter.png";
import telegran from "../../../public/telegran.png";

export default function Footer() {
  return (
    // <div>
    //   <div className="bg-[#14282f] flex flex-col justify-start w-full h-[749px] items-start px-[316px] py-16">
    //     <div className="flex flex-row justify-between ml-1 w-full items-center">
    //       <Image
    //         src={bios}
    //         className="min-h-0 min-w-0"
    //       />
    //       <div className="whitespace-nowrap text-xl font-['Inter'] font-medium leading-[44px] text-[#c1c1c1] w-32 shrink-0">
    //         Follow us on
    //       </div>
    //     </div>
    //     <div className="self-end flex flex-row justify-start gap-3 items-center mb-1 mr-24">
    //       <div className="whitespace-nowrap font-['Inter'] leading-[32px] text-[#c1c1c1] self-start w-16 shrink-0 mb-2 mr-48">
    //         About us
    //       </div>
    //       <Image
    //         src={telegran}
    //         className="min-h-0 min-w-0 self-end w-8 shrink-0"
    //       />
    //       <div className="font-['Inter'] leading-[32px] text-[#c1c1c1] w-16 shrink-0">
    //         Telegram
    //       </div>
    //     </div>
    //     <div className="flex flex-row justify-start gap-3 w-5/6 items-center mb-2 ml-1">
    //       <div className="font-['Inter'] leading-[32px] text-[#c1c1c1] self-start w-1/2 mb-2 mr-[174px]">
    //         Bios World
    //         {"  "}
    //         Driving Environmental Change through Community and Blockchain
    //       </div>
    //       <div className="whitespace-nowrap font-['Inter'] leading-[32px] text-[#c1c1c1] mr-40 w-24 shrink-0">
    //         Tokenomics{" "}
    //       </div>
    //       <Image
    //         src={twitter}
    //         className="min-h-0 min-w-0 self-end w-8 shrink-0"
    //       />
    //       <div className="whitespace-nowrap font-['Inter'] leading-[32px] text-[#c1c1c1] w-12 shrink-0">
    //         Twitter{" "}
    //       </div>
    //     </div>
    //     <div className="self-stretch flex flex-row justify-start gap-3 items-start mb-px mx-px">
    //       <div className="text-sm font-['Inter'] leading-[30px] text-[#c1c1c1] w-1/2 mt-2 mr-40">
    //         We take great pride in our team of passionate specialists who are
    //         deeply committed to protecting the environment and promoting
    //         biodiversity. Our main goal is to raise awareness among the
    //         blockchain community about these essential pursuits. Through a range
    //         of dynamic initiatives, including the NFT marketplace, Vote-to-Earn
    //         (v2E), Educational Driven Play to Earn (P2E), crowdfunding, Rate to
    //         Earn (R2E), and Stake to Earn (S2E), we aim to empower individuals
    //         to make a positive impact.
    //       </div>
    //       <div className="flex flex-col justify-between mr-24 gap-4 items-start">
    //         <div className="whitespace-nowrap font-['Inter'] leading-[32px] text-[#c1c1c1] self-stretch">
    //           Charity Ambassadors
    //         </div>
    //         <div className="font-['Inter'] leading-[32px] text-[#c1c1c1] w-2/5">
    //           Roadmap
    //         </div>
    //         <div className="whitespace-nowrap font-['Inter'] leading-[32px] text-[#c1c1c1] w-1/2">
    //           Pitchdeck{" "}
    //         </div>
    //         <div className="font-['Inter'] leading-[32px] text-[#c1c1c1] w-1/2">
    //           Whitepaper
    //         </div>
    //       </div>
    //       <div className="flex flex-col justify-start mt-2 gap-4 w-8 shrink-0 items-center">
    //         <Image
    //           src={discord}
    //           className="min-h-0 min-w-0 w-8"
    //         />
    //         <Image
    //           src={email}
    //           className="min-h-0 min-w-0 w-8"
    //         />
    //       </div>
    //       <div className="self-center flex flex-col justify-between gap-4 items-start">
    //         <div className="whitespace-nowrap font-['Inter'] leading-[32px] text-[#c1c1c1] w-16">
    //           Discord{" "}
    //         </div>
    //         <div className="font-['Inter'] leading-[32px] text-[#c1c1c1] self-stretch">
    //           support@biosworld.io
    //         </div>
    //         <div className="whitespace-nowrap font-['Inter'] leading-[32px] text-[#c1c1c1] w-3/5">
    //           Privacy Policy
    //         </div>
    //         <div className="whitespace-nowrap font-['Inter'] leading-[32px] text-[#c1c1c1] self-stretch mr-10">
    //           Terms of Service
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-row justify-between mb-32 w-2/3 items-start">
    //       <div className="font-['Inter'] leading-[32px] text-[#c1c1c1] self-end mt-4 w-[629px]">
    //         Together, we can create a greener and more sustainable future, where
    //         blockchain technology becomes a catalyst for environmental change.
    //         Join us in our mission and let's shape a better world for
    //         generations to come!
    //       </div>
    //       <div className="font-['Inter'] leading-[32px] text-[#c1c1c1] w-10 shrink-0">
    //         NFT's
    //       </div>
    //     </div>
    //     <div className="text-lg font-['Inter'] tracking-[1.8] leading-[36px] text-[#c1c1c1] self-center w-[394px] h-[6.56%]">
    //       © Copyright 2023. All Rights Reserved
    //     </div>
    //   </div>
    // </div>
    <footer className="bg-[#142930] h-[25rem] md:h-[43rem] xl:h-[50rem] p-2 md:p-6 leading-7 text-[#C1C1C1] space-y-10">
      <Image className="xl:ml-[11%] 2xl:ml-[12%]" alt="Logo BiosWorld" src={bios} />
      <div className="flex flex-row justify-around text-base md:text-lg xl:text-2xl xl:mx-28">
        <div className="container">
          <div className="hidden md:block md:w-[70%] space-y-5">
            <p>
              Bios World Driving Environmental Change through Community and
              Blockchain
            </p>
            <p>
              We take great pride in our team of passionate specialists who are
              deeply committed to protecting the environment and promoting
              biodiversity. Our main goal is to raise awareness among the
              blockchain community about these essential pursuits. Through a
              range of dynamic initiatives, including the NFT marketplace,
              Vote-to-Earn (v2E), Educational Driven Play to Earn (P2E),
              crowdfunding, Rate to Earn (R2E), and Stake to Earn (S2E), we aim
              to empower individuals to make a positive impact.
            </p>
            <p>
              Together, we can create a greener and more sustainable future,
              where blockchain technology becomes a catalyst for environmental
              change. Join us in our mission and let's shape a better world for
              generations to come!
            </p>
          </div>
        </div>
        <ul className="xl:space-y-4">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Tokenomics</a>
          </li>
          <li>
            <a href="#">Charity Ambassadors</a>
          </li>
          <li>
            <a href="#">Roadmap</a>
          </li>
          <li>
            <a href="#">Pitchdech</a>
          </li>
          <li>
            <a href="#">Whitepaper</a>
          </li>
          <li>
            <a href="#">NFT's</a>
          </li>
        </ul>
        <div className="ml-2 lg:ml-12">
          <h3>Follow us on</h3>
          <ul className="space-y-1 xl:space-y-4 mt-4">
            <li className="flex flex-row space-x-2">
              <Image alt="Logo Telegran" src={telegran} />
              <a href="#">Telegran</a>
            </li>
            <li className="flex flex-row space-x-2">
              <Image alt="Logo Twitter" src={twitter} />
              <a href="#">Twitter</a>
            </li>
            <li className="flex flex-row space-x-2">
              <Image alt="Logo Discord" src={discord} />
              <a href="#">Discord</a>
            </li>
            <li className="flex flex-row space-x-2">
              <Image alt="Support biosworld" src={email} />
              <a href="#">support@biosworld.io</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="flex justify-center text-base lg:text-3xl 2xl:pt-10">
        © Copyright 2023. All Rights Reserveds
      </p>
    </footer>
  );
}
