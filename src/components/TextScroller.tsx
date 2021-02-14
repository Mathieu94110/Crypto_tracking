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
      backgroundColor: "#191970",
    },
    textScrolled: {
      display: "flex",
      justifyContent: "space-evenly",
      fontSize: "1em",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.3em",
      },
    },
    onColumn: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    whitesDatas: {
      color: "#fff",
    },
    colored_datas: {
      color: "gold",
    },
  })
);
const TextScroller = () => {
  const [key, setKey] = useState(1);
  const [data, setData] = useState("");
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const response = await coinGecko.get("/global");
      const responseData = response.data.data;
      console.log(responseData);
      setData(responseData);
    })();
  }, []);

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

  return (
    <div key={key} className={classes.scrollingContainer}>
      <animated.div style={scrolling}>
        {
          <div className={classes.textScrolled}>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>
                Crypto-monnaie existantes :
              </span>
              <span className={classes.colored_datas}>
                {data.active_cryptocurrencies}{" "}
              </span>
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>
                Évolution sur 24h (%) :
              </span>
              <span className={classes.colored_datas}>
                {data.market_cap_change_percentage_24h_usd}
              </span>
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>Marchés : </span>
              <span className={classes.colored_datas}>{data.markets}</span>
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>Icos en cours :</span>
              <span className={classes.colored_datas}>{data.ongoing_icos}</span>
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>Icos à venir :</span>
              <span className={classes.colored_datas}>
                {data.upcoming_icos}
              </span>
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>
                Capitalisation globale Btc :
              </span>
              {data.market_cap_percentage && (
                <span className={classes.colored_datas}>
                  {data.market_cap_percentage.btc}
                </span>
              )}
            </div>
          </div>
        }
      </animated.div>
    </div>
  );
};
export default TextScroller;
