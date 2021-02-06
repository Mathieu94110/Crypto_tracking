import React, { useEffect, useState } from "react"; //
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

//styles//

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
    topSevenTrendingCard: {
      height: "528px",
      border: "2px solid #000",

      background: "linear-gradient(to right, #373b44, #4286f4)",

      fontSize: "1em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    title: {
      height: "70px",
      lineHeight: "70px",
      fontSize: "1.2em",
      color: "#fff",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.7em",
      },
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
    },
    gridFirstSpan: {
      padding: "8px 4px 36px 4px",
      fontSize: "1em",
      fontWeight: 600,
      color: "gold",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.3em",
      },
    },
    gridLastChilds: {
      fontWeight: 600,
      fontSize: "0.8em",
      color: "#fff",
      [theme.breakpoints.up("md")]: {
        fontSize: "1em",
      },
    },
  })
);

/////////
interface ISevenTrends {
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  score: 0;
  symbol: string;
  thumb: string;
}

export default function TopSevenTrending() {
  const [trendDatas, setsevenTrendDatas] = useState<ISevenTrends[]>([]);

  let sevenTrendUrl = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    fetch(sevenTrendUrl)
      .then((res) => res.json())
      .then((res) => {
        let trends = res.coins;
        console.log(trends);
        setsevenTrendDatas(trends);
      });
  }, []);

  let index = 1;
  const classes = useStyles();
  return (
    <div className={classes.topSevenTrendingCard}>
      <h2 className={classes.title}>Top 7 des tendances cryptos </h2>
      <div className={classes.grid}>
        <span className={classes.gridFirstSpan}>Position</span>
        <span className={classes.gridFirstSpan}>Logo</span>
        <span className={classes.gridFirstSpan}>Nom</span>
        <span className={classes.gridFirstSpan}>Symbole</span>
        <span className={classes.gridFirstSpan}>Classement</span>

        {trendDatas.map((trend: ISevenTrends, index) => {
          return (
            <>
              <span className={classes.gridLastChilds}>{(index += 1)}</span>
              <span className={classes.gridLastChilds}>
                <img
                  src={trend.item.large}
                  alt="logo"
                  width="40px"
                  height="40px"
                />
              </span>
              <span className={classes.gridLastChilds}>{trend.item.name}</span>{" "}
              <span className={classes.gridLastChilds}>
                {trend.item.symbol}
              </span>
              <span className={classes.gridLastChilds}>
                {trend.item.market_cap_rank}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
}
