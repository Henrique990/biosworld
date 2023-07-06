import React from 'react'
import Image from 'next/image'

import CardPayment from './CardPayment'

import suricato from "../../../public/11 1-min.png"
import bird from "../../../public/img/WalletConnection/bird-01 1.png"
import morcego from "../../../public/owle 1-min.png"
import arvore from "../../../public/arvore.png"
import stone from "../../../public/stone.png"

export default function WalletConnection() {
  return (
    <div className="w-full h-[67.5rem] overflow-hidden relative">
      <div className='float-right mr-[18.7rem] mt-[13.1rem]'>
        <CardPayment /> 
      </div>
      <div className=''>
        <Image className='absolute right-[7.81rem] top-[4rem] ' src={bird} />
        <Image className='absolute right-0 top-[36rem]' src={suricato} />
        <Image className='absolute left-[17.7rem] top-[20.8rem] z-10' src={morcego} />
        <Image className='absolute top-0 left-0' src={arvore} />
        <Image className='absolute w-[52rem] bottom-0' src={stone} />
      </div>
    </div>
  )
}
