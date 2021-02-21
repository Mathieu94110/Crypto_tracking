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
      height: "400px",
      border: "2px solid #000",
      backgroundColor: "rgba(25,25,112,0.9)",
      fontSize: "0.8rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "none",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
        height: "100%", //   height: "528px",
        justifyContent: "space-evenly",
      },
    },
    title: {
      height: "45px",
      lineHeight: "45px",
      fontSize: "1.2em",
      color: "#fff",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.7em",
        height: "70px",
        lineHeight: "70px",
      },
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
    },
    gridFirstSpan: {
      padding: "8px 4px 8px 4px",
      fontSize: "0.9em",
      fontWeight: 600,
      color: "gold",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2em",
        padding: "8px 4px 36px 4px",
      },
    },
    gridLastChilds: {
      height: "45px",
      fontWeight: 600,
      fontSize: "0.8em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
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
  item?: IItems;
}
interface IItems {
  item: {
    large: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
  };
}
export default function TopSevenTrending() {
  const [seventrendDatas, setsevenTrendDatas] = useState<ISevenTrends[]>([]);

  let sevenTrendUrl = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    fetch(sevenTrendUrl)
      .then((res) => res.json())
      .then((res) => {
        let trends = res.coins;

        setsevenTrendDatas(trends);
      });
  }, []);
  console.log(seventrendDatas);
  const headingColumns = ["Nom", "Symbole", "Classement"];

  const data = seventrendDatas.map((row, index) => {
    let rowData: { key: string; val: string | number }[] = [];

    Object.entries(row).forEach((data, i) => {
      rowData.push({
        key: headingColumns[i],
        val: data[1],
      });
    });

    return <div>hello</div>;
  });

  return <div>hello</div>;
}
