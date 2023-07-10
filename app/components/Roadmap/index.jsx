import Image from "next/image";
import React from "react";

import guaxinin from "../../../public/guaxinin.png";
import galho from "../../../public/galho.png";
import bananeira from "../../../public/bananeira.png";
import espinho from "../../../public/porco-espinho.png";
import viado from "../../../public/viado.png";
import urso from "../../../public/urso.png";
import estrada from "../../../public/estrada.png";

export default function Roadmap() {
  return (
    // <div>
    //   Roadmap
    //   <div className="text-center text-5xl font-['Cattino'] leading-[78px] capitalize text-[#40a072] relative w-full">
    //     Roadmap
    //   </div>
    //   <div>
    //     <div className="bg-[#40a072] flex flex-col justify-start relative w-full items-center pt-1 pb-2 px-12 rounded-lg">
    //       <div className="text-3xl font-['Cattino'] text-[#e9e9e9] relative w-full h-full">
    //         Education
    //       </div>
    //     </div>
    //     <div className="text-xl font-['Inter'] leading-[44px] text-[#e9e9e9] relative w-full">
    //       Academy with AI tools
    //       <br />
    //       BIOS Gaming (P2E with cause)
    //       <br />
    //       ZOO on Metaverse Live
    //       <br />
    //       5% token to Charities
    //       <br />
    //       500,000 holders
    //       <br />
    //       100,000 Volunteers
    //       <br />
    //       1B Market Cap
    //       <br />
    //       BIOS Protocol ( Continued......
    //     </div>
    //   </div>
    //   <div>
    //     <div className="bg-[#40a072] flex flex-col justify-start relative w-full items-center pt-1 pb-2 px-10 rounded-lg">
    //       <div className="text-3xl font-['Cattino'] text-[#e9e9e9] relative w-full h-full">
    //         Restoration
    //       </div>
    //     </div>
    //     <div className="text-xl font-['Inter'] leading-[44px] text-[#e9e9e9] relative w-full">
    //       NFT Release <br />
    //       CrowdFunding Website Live <br />
    //       2nd Donation to Biodiversity <br />
    //       60,000 Holders <br />
    //       60,000 community <br />
    //       Partnership <br />
    //       2nd Launch on DEX/CEX <br />
    //       Airdrop 500M{" "}
    //     </div>
    //   </div>
    //   <div>
    //     <div className="bg-[#40a072] flex flex-col justify-start relative w-full items-center pt-1 pb-2 px-12 rounded-lg">
    //       <div className="text-3xl font-['Cattino'] text-[#e9e9e9] relative w-full h-full">
    //         Discovery
    //       </div>
    //     </div>
    //     <div className="text-xl font-['Inter'] leading-[44px] text-[#e9e9e9] relative w-full">
    //       Pre-sale Website
    //       <br />
    //       Pre-sale Live
    //       <br />
    //       10,000 Telegram Community
    //       <br />
    //       Media/PR
    //       <br />
    //       Social Channel Live
    //     </div>
    //   </div>
    //   <div>
    //     <div className="bg-[#40a072] relative w-full h-12 rounded-lg">
    //       <div className="text-3xl font-['Cattino'] text-[#e9e9e9] relative w-full">
    //         Sustainability
    //       </div>
    //       <div className="text-xl font-['Inter'] leading-[44px] text-[#e9e9e9] relative w-full">
    //         NFT MarketPlace <br />
    //         Climate Change Initiative Launch (Flora & Fauna) 50,000 volunteers{" "}
    //         <br />
    //         200,000 Holders <br />
    //         Partnership <br />
    //         BIOSwap Live <br />
    //         Staking Live{" "}
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <div className="bg-[#40a072] relative w-full h-12 rounded-lg">
    //       <div className="text-3xl font-['Cattino'] text-[#e9e9e9] relative w-full">
    //         Protection
    //       </div>
    //       <div className="text-xl font-['Inter'] leading-[44px] text-[#e9e9e9] relative w-full">
    //         1st donation to Biodiversity
    //         <br />
    //         30,000 telegram community
    //         <br />
    //         Ambassador Campaign
    //         <br />
    //         Full Website Live
    //         <br />
    //         1st Launch on DEX/Cex
    //         <br />
    //         Chain Bridge added
    //         <br />
    //         Airdrop 500M
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full xl:[121.87rem] relative px-2 pb-20">
      <Image
        className="max-w-[50.12rem] w-[60%] md:w-[40%] absolute right-0 top-[20%] lg:top-14"
        src={guaxinin}
      />
      <Image className="absolute max-w-[19rem] w-[40%] md:w-[30%] top-[3%] lg:top-40 left-[18%] lg:left-44 z-10" src={viado} />
      <Image className="absolute max-w-[36rem] w-[60%] top-0 left-2" src={galho} />
      <Image className="absolute max-w-[43rem] w-[60%] top-[8%] lg:top-80 left-1" src={bananeira} />
      <Image
        className="absolute w-[15%] left-[38%] top-[2%] md:top-0 md:w-[10%] md:left-[32%] lg:top-[8.81rem] lg:left-[22.3rem] z-10"
        src={espinho}
      />
      <Image className="absolute w-[50%] md:w-[25%]  -bottom-[10%] md:-bottom-[15%] xl:left-28" src={urso} />
      <div className="flex justify-center">
        <Image className="absolute -bottom-[9%] xl:bottom-[23rem]" src={estrada} />
      </div>

      <div className="text-center text-5xl font-['Cattino'] leading-[78px] capitalize text-[#40a072] w-full mt-[70%] xl:mt-64 relative z-10">
        Roadmap
      </div>
      <div className="flex justify-center mt-[20%] xl:mt-56">
        <div className="Group88 w-[80%] md:w-[60%] lg:w-[40%] xl:w-[1315px] xl:h-[1348px] relative space-y-10 ml-2">
          <div className="Group82 xl:w-[314px] xl:h-[346px] xl:left-0 xl:top-[311px] xl:absolute">
            <div className="Group81 xl:w-52 xl:h-[46px] xl:left-0 xl:top-0 xl:absolute">
              <div className="Rectangle70 xl:w-52 xl:h-[46px] xl:left-0 xl:top-0 xl:absolute bg-green-500 rounded-2xl">
              <div className="Discovery flex justify-center py-2 xl:w-[108px] xl:h-[33px] xl:left-[50px] xl:top-[6px] xl:absolute text-gray-200 text-[28px] font-['Cattino']">
                Discovery
              </div>
              </div>
            </div>
            <div className="PreSaleWebsitePreSaleLive10000TelegramCommunityMediaPrSocialChannelLive xl:w-[313px] xl:h-[279px] xl:left-[1px] xl:top-[67px] xl:absolute text-gray-200 text-[22px] font-normal leading-10">
              Pre-sale Website
              <br />
              Pre-sale Live
              <br />
              10,000 Telegram Community
              <br />
              Media/PR
              <br />
              Social Channel Live
            </div>
          </div>
          <div className="Group84 xl:w-[463px] xl:h-[382px] xl:left-[353px] xl:top-[966px] xl:absolute">
            <div className="Group83 xl:w-52 xl:h-[46px] xl:left-0 xl:top-0 xl:absolute">
              <div className="Rectangle69 flex justify-center items-center xl:w-52 h-[46px] xl:left-0 xl:top-0 xl:absolute bg-green-500 rounded-2xl">
              <div className="Protection xl:w-[116px] xl:h-[33px] xl:left-[46px] xl:top-[5px] xl:absolute text-gray-200 text-[28px] font-['Cattino']">
                Protection
              </div>
              </div>
            </div>
            <div className="StDonationToBiodiversity30000TelegramCommunityAmbassadorCampaignFullWebsiteLive1stLaunchOnDexCexChainBridgeAddedAirdrop500m xl:w-[463px] xl:left-0 xl:top-[74px] xl:absolute text-gray-200 text-[22px] font-normal leading-10">
              1st donation to Biodiversity
              <br />
              30,000 telegram community
              <br />
              Ambassador Campaign
              <br />
              Full Website Live
              <br />
              1st Launch on DEX/Cex
              <br />
              Chain Bridge added
              <br />
              Airdrop 500M
            </div>
          </div>
          <div className="Group78 xl:w-[310px] xl:h-[416px] xl:left-[438px] xl:top-[8px] xl:absolute">
            <div className="Group77 xl:w-52 xl:h-[46px] xl:left-0 xl:top-0 xl:absolute">
              <div className="Rectangle71 flex justify-center items-center xl:w-52 h-[46px] xl:left-0 xl:top-0 xl:absolute bg-green-500 rounded-2xl">
              <div className="Restoration xl:w-[126px] xl:h-[34px] xl:left-[41px] xl:top-[4px] xl:absolute text-gray-200 text-[28px] font-['Cattino']">
                Restoration
              </div>
              </div>
            </div>
            <div className="NftReleaseCrowdfundingWebsiteLive2ndDonationToBiodiversity60000Holders60000CommunityPartnership2ndLaunchOnDexCexAirdrop500m xl:w-[310px] xl:h-[352px] xl:left-0 xl:top-[64px] xl:absolute text-gray-200 text-[22px] font-normal leading-10">
              NFT Release <br />
              CrowdFunding Website Live <br />
              2nd Donation to Biodiversity <br />
              60,000 Holders <br />
              60,000 community <br />
              Partnership <br />
              2nd Launch on DEX/CEX <br />
              Airdrop 500M{" "}
            </div>
          </div>
          <div className="Group86 xl:w-[478px] xl:h-[368px] xl:left-[816px] xl:top-[729px] xl:absolute">
            <div className="Group85 xl:w-[222px] xl:h-[46px] xl:left-0 xl:top-0 xl:absolute">
              <div className="Rectangle71 flex justify-center items-center py-2 xl:w-[222px] xl:h-[46px] xl:left-0 xl:top-0 xl:absolute bg-green-500 rounded-2xl">
              <div className="Sustainability xl:w-[153px] xl:h-[33px] xl:left-[34px] xl:top-[3px] xl:absolute text-gray-200 text-[28px] font-['Cattino']">
                Sustainability
              </div>
              </div>
            </div>
            <div className="NftMarketplaceClimateChangeInitiativeLaunchFloraFauna50000Volunteers200000HoldersPartnershipBioswapLiveStakingLive xl:w-[477px] xl:left-[1px] xl:top-[60px] xl:absolute text-gray-200 text-[22px] font-normal leading-10">
              NFT MarketPlace <br />
              Climate Change Initiative Launch (Flora & Fauna) 50,000 volunteers{" "}
              <br />
              200,000 Holders <br />
              Partnership <br />
              BIOSwap Live <br />
              Staking Live{" "}
            </div>
          </div>
          <div className="Group80 xl:w-80 xl:h-[424px] xl:left-[995px] xl:top-0 xl:absolute">
          <div className="Group79 xl:w-52 xl:h-[46px] xl:left-[1px] xl:top-0 xl:absolute">
              <div className="Rectangle70 flex justify-center py-2 xl:w-52 xl:h-[46px] lx:left-0 lx:top-0 xl:absolute bg-green-500 rounded-2xl">
              <div className="Education xl:w-[108px] xl:h-[34px] lx:left-[50px] lx:top-[4px] xl:absolute text-gray-200 text-[28px] font-['Cattino']">
                Education
              </div>
              </div>
            </div>

            <div className="AcademyWithAiToolsBiosGamingP2eWithCauseZooOnMetaverseLive5TokenToCharities500000Holders100000Volunteers1bMarketCapBiosProtocolContinued xl:w-80 h-[366px] xl:left-0 xl:top-[58px] xl:absolute text-gray-200 text-[22px] font-normal leading-10">
              Academy with AI tools
              <br />
              BIOS Gaming (P2E with cause)
              <br />
              ZOO on Metaverse Live
              <br />
              5% token to Charities
              <br />
              500,000 holders
              <br />
              100,000 Volunteers
              <br />
              1B Market Cap
              <br />
              BIOS Protocol ( Continued......
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
