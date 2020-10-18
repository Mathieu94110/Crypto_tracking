import React, {FC} from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import Img from "./images/img1.png";

const App:FC = () => {
  const env = process.env.NODE_ENV;
  return (
    <div>
      <h1>Hello World</h1>
      <img src={Img} alt="test-image" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
