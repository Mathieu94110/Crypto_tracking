import React from "react";
import { HeaderBar } from "../headerBar";
import TopSevenTrending from "../topSevenTrending";
import NavBar from '../Nav/Navbar';
import BitCoinDatas from "../BitcoinDatas";

export default function Home() {


  return (
    <div>

      <NavBar />
      <HeaderBar />
      <div style={{display:"flex"}}>
      <TopSevenTrending />
<BitCoinDatas/>
</div>
    </div>
  )
}

