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
      height: "100%",
    },
    onColumn: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      fontSize: "0.5rem",
      padding: "2px",
      minWidth: "50px",
      border: "1px solid gold",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.1rem",
        padding: "5px",
      },
    },
    whitesDatas: {
      color: "#fff",
      textDecoration: "underline #fff",
      paddingBottom: "5px",
      [theme.breakpoints.up("md")]: {},
    },
    colored_datas: {
      color: "gold",
      [theme.breakpoints.up("md")]: {},
    },
  })
);

interface textScrollerDatas {
  updated_at: number;
  active_cryptocurrencies: number;
  market_cap_change_percentage_24h_usd: number;
  market_cap_percentage: any;
  markets: number;
  ongoing_icos: number;
  upcoming_icos: number;
}

const TextScroller = () => {
  const [key, setKey] = useState(1);
  const [data, setData] = useState<textScrollerDatas>({
    updated_at: 0,
    active_cryptocurrencies: 0,
    market_cap_change_percentage_24h_usd: 0,
    market_cap_percentage: 0,
    markets: 0,
    ongoing_icos: 0,
    upcoming_icos: 0,
  });
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
    from: { transform: "translate(-5%,0)" },
    to: { transform: "translate(25%,0)" },
    config: { duration: 10000 },
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
              <span className={classes.whitesDatas}>Mise à jour à </span>
              {data.updated_at && (
                <span className={classes.colored_datas}>
                  {data.updated_at.toString().slice(0, 2) +
                    "h" +
                    data.updated_at.toString().slice(2, 4) +
                    "m"}
                </span>
              )}
            </div>

            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>
                Crypto-monnaie existantes
              </span>
              <span className={classes.colored_datas}>
                {data.active_cryptocurrencies}{" "}
              </span>
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>Évolution sur 24h (%)</span>
              <span className={classes.colored_datas}>
                {data.market_cap_change_percentage_24h_usd !== undefined
                  ? data.market_cap_change_percentage_24h_usd.toFixed(2)
                  : null}
              </span>
            </div>

            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>
                Capitalisation globale BTC
              </span>
              {data.market_cap_percentage && (
                <span className={classes.colored_datas}>
                  {data.market_cap_percentage.btc.toFixed(2)} %
                </span>
              )}
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>
                Capitalisation globale ETH
              </span>
              {data.market_cap_percentage && (
                <span className={classes.colored_datas}>
                  {data.market_cap_percentage.eth.toFixed(2)} %
                </span>
              )}
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>
                Capitalisation globale ETH
              </span>
              {data.market_cap_percentage && (
                <span className={classes.colored_datas}>
                  {data.market_cap_percentage.usdt.toFixed(2)} %
                </span>
              )}
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>Marchés </span>
              <span className={classes.colored_datas}>{data.markets}</span>
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>Icos en cours </span>
              <span className={classes.colored_datas}>{data.ongoing_icos}</span>
            </div>
            <div className={classes.onColumn}>
              <span className={classes.whitesDatas}>Icos à venir </span>
              <span className={classes.colored_datas}>
                {data.upcoming_icos}
              </span>
            </div>
          </div>
        }
      </animated.div>
    </div>
  );
};
export default TextScroller;
