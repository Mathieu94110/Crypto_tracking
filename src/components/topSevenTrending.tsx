import React, { FC, useState, useEffect } from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import TopSevenTrendingTable from "./topSevenTrendingTable";

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
      height: "100%",
      border: "2px solid #000",
      backgroundColor: "rgba(25,25,112,0.9)",
      fontSize: "0.8rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
        height: "100%", //   height: "528px",
      },
    },
  })
);

export interface IItems {
  id: string;
  score: number;
  thumb: string;
  name: string;
  large: string;
  symbol: string;
  market_cap_rank: number;
}

export const topSevenTrending: FC = () => {
  const [sevenTrends, setSevenTrends] = useState<IItems[]>([]);

  let sevenTrendUrl = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    fetch(sevenTrendUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let trends = res.coins.map((category: any) => category.item);
        //keeping only the four datas i need !
        const newTrends: IItems[] = trends.map(
          ({ id, score, thumb, ...trends }) => trends
        );

        setSevenTrends(newTrends);
        console.log(sevenTrends);
      });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.topSevenTrendingCard}>
      <TopSevenTrendingTable
        tableData={sevenTrends}
        headingColumns={["Nom", "Symbole", "Classement", "Image"]}
        title="Top 7 des tendances sur 24h"
      />
    </div>
  );
};

export default topSevenTrending;
