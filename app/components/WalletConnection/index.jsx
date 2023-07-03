import React from 'react'
import Image from 'next/image'

import CardPayment from './CardPayment'

import arvore from "../../../public/img/WalletConnection/arvore.png"
import suricato from "../../../public/img/WalletConnection/suricato.png"
import bird from "../../../public/img/WalletConnection/bird-01 1.png"
import stone from "../../../public/img/WalletConnection/stone-01 1.png"
import owle from "../../../public/img/WalletConnection/owle 1.png"

export default function WalletConnection() {
  return (
    <div>WalletConnection
      <CardPayment />
      <div>
        <Image src={owle} />
        <Image src={stone} />
        <Image src={bird} />
        <Image src={suricato} />
        <Image src={arvore} />
      </div>
    </div>
  )
}
