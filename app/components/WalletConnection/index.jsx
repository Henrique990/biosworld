import React from 'react'
import Image from 'next/image'

import CardPayment from './CardPayment'

import suricato from "../../../public/img/WalletConnection/suricato.png"
import bird from "../../../public/img/WalletConnection/bird-01 1.png"
import morcego from "../../../public/img/WalletConnection/Group 43.png"

export default function WalletConnection() {
  return (
    <div>WalletConnection
      <CardPayment />
      <div>
        <Image src={bird} />
        <Image src={suricato} />
        <Image src={morcego} />
      </div>
    </div>
  )
}
