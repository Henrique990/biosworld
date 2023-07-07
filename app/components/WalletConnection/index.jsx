import React from 'react'
import Image from 'next/image'

import CardPayment from './CardPayment'

import morcego from "../../../public/owle 1-min.png"
import arvore from "../../../public/arvore.png"
import stone from "../../../public/stone.png"

export default function WalletConnection() {
  return (
    <div className="w-full h-[67.5rem] overflow-hidden relative">
      <div className='float-right mr-[18.7rem] mt-[13.1rem]'>
        <CardPayment /> 
      </div>
      <div className='h-full relative w-[45%]'>
        <Image className='absolute left-[25%] top-[20.8rem] xl:top-[31rem] xl:w-[50%] z-10' src={morcego} />
        <Image className='absolute top-0 h-full' src={arvore} />
        <Image className='absolute bottom-0 xl:left-[-8%] ' src={stone} />
      </div>
    </div>
  )
}
