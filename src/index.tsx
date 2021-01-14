import React, {FC} from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { Home } from './components/home/home';
import SearchAppBar from "./components/searchAppBar";
import { HeaderBar } from "./components/headerBar";

const App: FC = () => {
 
  return (
    <div>
      <SearchAppBar />
      <HeaderBar />
    <Home/>

    </div>

    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

