import React from "react";
import { HeaderBar } from "../../components/headerBar";
import TopSevenTrending from "../../components/topSevenTrending";
import NavBar from '../../components/Nav/Navbar';
import BitCoinData from "../../components/Bitcoin/BitcoinData";

export default function Home() {


  return (
    <div>

      <NavBar />
      <HeaderBar />
      <div style={{display:"flex"}}>
      <TopSevenTrending />
<BitCoinData/>
</div>
    </div>
  )
}

