import React from "react";
import { HeaderBar } from "../headerBar";
import TopSevenTrending from "../topSevenTrending";
import NavBar from '../Nav/Navbar';
import List from '../list/list';
export default function Home() {


  return (
    <div>

      <NavBar />
      <HeaderBar />
      <TopSevenTrending />


    </div>
  )
}

