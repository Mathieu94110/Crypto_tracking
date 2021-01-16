import React, {FC} from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { Home } from './components/home/home';
import SearchAppBar from "./components/searchAppBar";
import { HeaderBar } from "./components/headerBar";
import TopSevenTrending  from "./components/topSevenTrending";
import NavBar from './components/Nav/Navbar';

const App: FC = () => {
 
  return (
    <div>
    <NavBar />
      <HeaderBar />
          <Home/>
      <TopSevenTrending />


    </div>

    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

