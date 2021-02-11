import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import coinGecko from "../Api/coinGecko";

//styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    scrollingContainer: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontWeight: 600,
      fontSize: "1.6em",
    },
  })
);
const TextScroller = () => {
  const [key, setKey] = useState(1);
  const [data, setData] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/global");
      const responseData = response.data.data;
      console.log(responseData);
      setData(responseData);
    };
    fetchData();
  });

  //scrolling
  const scrolling = useSpring({
    from: { transform: "translate(5%,0)" },
    to: { transform: "translate(95%,0)" },
    config: { duration: 20000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  //scrolling datas // Bc data volume percentage and total request failed i dont know why !
  const text = `Crypto-monnaie existantes :   ${data.active_cryptocurrencies}  Évolution sur 24h (%) : ${data.market_cap_change_percentage_24h_usd} marchés : ${data.markets} `;
  return (
    <div key={key} className={classes.scrollingContainer}>
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  );
};

export default TextScroller;
