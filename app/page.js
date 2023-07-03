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

export default function Page() {
  return (
    <>
      <div className="container mx-auto p-4">
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
    </>
  )
}
