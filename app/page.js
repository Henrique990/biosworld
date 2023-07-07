"use client"

import About from "./components/Abount";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowToBuySection from "./components/HowToBuySection";
import Info from "./components/Info";
import MeetTeam from "./components/MeetTeam";
import Roadmap from "./components/Roadmap";
import TokenInfo from "./components/TokenInfo";
import Tokenomics from "./components/Tokenomics";
import WalletConnection from "./components/WalletConnection";
import { useEffect } from 'react';

const AlertOnLoad = () => {
  useEffect(() => {
    alert("I'm working on Layout for Mobile!");
  }, []);

  return null;
};

export default function Page() {
  return (
      <div className="max-w-full h-full overflow-hidden">
        <AlertOnLoad />
        <Home />
         <WalletConnection />
        <About />
        <Info />
        <Tokenomics />
        <TokenInfo />
        <Roadmap />
        <MeetTeam />
        <HowToBuySection />
        <Footer />
      </div>
  )
}
