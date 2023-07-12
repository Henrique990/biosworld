import React from "react";

import monkey from "../../../public/nature-monkey.png";
import Image from "next/image";

export default function HowToBuySection() {
  return (
    <div className="w-full xl:h-[165.875rem] relative my-[10%]">
      <Image className="absolute bottom-0 w-full h-full object-fill" src={monkey} alt="monkey" />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-10 max-w-[82.33rem] items-stretch mt-12">
          <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-[#3e986f] self-start lg:w-1/2">
            1. Meme-ify Your Mobile:
          </div>
          <div className="bg-white/10 flex flex-col justify-start lg:mb-16 lg:h-[302px] shrink-0 items-stretch lg:pt-16 pb-12 px-2 lg:px-12">
            <div className="text-base lg:text-3xl font-['Inter'] leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-1 h-full">
              To join the BIOSW brigade, you're going to need a crypto wallet.
              Trust Wallet, MetaMask, or another of your choice will do the trick.
              Pop over to the App Store or Google Play to snag one, or if you're
              on desktop, grab the MetaMask Chrome extension.
            </div>
          </div>
          <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-[#3e986f] self-start mb-1 lg:w-3/5">
            2. Feed Your Wallet with ETH:
          </div>
          <div className="bg-white/10 flex flex-col justify-center lg:mb-16 lg:h-[339px] shrink-0 items-stretch px-2 lg:px-12">
            <div className="text-base lg:text-3xl font-['Inter'] leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-1 lg:h-[66.96%]">
              Your wallet's got a serious hunger for some BNB, the magic key to
              unlock your BIOSW. You can grab some directly through MetaMask,
              transfer from another wallet, or buy on an exchange and withdraw it
              to your wallet. Remember to dance with the Binance Smart Chain
              BEP-20 network when you do.{" "}
            </div>
          </div>
          <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-[#3e986f] mb-1 lg:mr-[426px]">
            3. Unleash the Power of Uniswap:
          </div>
          <div className="bg-white/10 flex flex-col justify-start lg:mb-16 lg:h-[357px] shrink-0 items-stretch px-2 lg:px-12 lg:py-16">
            <div className="text-base lg:text-3xl font-['Inter'] leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-3 lg:h-[78.19%]">
              It's time to connect to Uniswap, your portal to the BIOSW universe.
              We've made it super simple by embedding Uniswap right here on
              biosworld.io. If you're going solo on your browser, make sure you're
              on the official Uniswap site, select token, and paste in the
              official BIOSW token address.
            </div>
          </div>
          <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-[#3e986f] mb-1 ml-0 lg:mr-[426px]">
            4. Make the Swap:
          </div>
          <div className="bg-white/10 flex flex-col justify-center lg:h-[357px] shrink-0 items-stretch mx-0 lg:px-12">
            <div className="text-base lg:text-3xl font-['Inter'] leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-2 lg:h-[68.91%] px-2">
              Now that you've got BNB in your wallet, you can swap it for some
              shiny BIOSW. Make sure you keep enough BNB for those gas fees, and
              then review and confirm your transaction. Congratulations! You're
              now a card-carrying member of the BIOSW brigade, making a real
              difference while having fun. Welcome to Bios World, where memes and
              nature unite!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
