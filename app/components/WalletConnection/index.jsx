import React from 'react'
import Image from 'next/image'

import CardPayment from './CardPayment'

import morcego from "../../../public/owle 1-min.png"
import arvore from "../../../public/arvore.png"
import stone from "../../../public/stone.png"

export default function WalletConnection() {
  return (
    <div className="w-full h-[800px] overflow-hidden relative">
        <div className='absolute w-full h-full flex justify-center items-center mt-[0%] md:mt-[0%] xl:mt-[10%] 2xl:mt-[0%]'>
          <CardPayment /> 
        </div>
      <div className='w-full h-full relative lg:w-[75%]'>
        <Image className='absolute left-[0%] md:left-[12%] bottom-[12%] w-[35%] md:bottom-[14%] lg:top-[37rem] xl:top-[24rem] 2xl:top-[22rem] md:w-[18%] xl:w-[25%] xl:ml-[8%] z-10' src={morcego} alt='bat' />
        <Image className='absolute top-0 w-[100%] h-[110%]' src={arvore} alt='tree' />
        <Image className='absolute bottom-[8%] md:-bottom-[5%]  left-0 w-[90%] md:w-[50%] xl:left-[8%] 2xl:left-0' src={stone} alt='stone' />
      </div>
    </div>
  )
}
