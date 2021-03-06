import React from "react";
import TextScroller from "../../components/TextScroller";
import TopSevenTrending from "../../components/topSevenTrending";
import BitCoinData from "../../components/Bitcoin/BitcoinData";
import LeftNav from "../../components/Nav/LeftNav";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

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
    page: {
      height: "100%",
      overflow: "hidden",
      backgroundColor: "#191970",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        height: "100vh",
      },
    },
    NavBar: {
      height: "10vh",
    },
    TextScroller: {
      height: "50px",
      margin: "5px 0",

      [theme.breakpoints.up("md")]: {
        height: "10vh",
      },
    },
    Cards: {
      display: "block",
      margin: " 0% 2%",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        alignItems: "center",
        flexGrow: 1,
        width: "100%",
        height: "72vh",
        margin: "3vh auto 1vh auto",
      },
    },
    paperTrendings: {
      textAlign: "center",
      display: "block",
      width: "96%",
      marginBottom: "4px",

      [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "47%",
        alignItems: "space-between",
        flexGrow: 1,
        height: "70vh",
        margin: "5vh 0",
      },
    },
    paperBitcoin: {
      display: "block",
      width: "96%",

      [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "47%",
        alignItems: "space-between",
        flexGrow: 1,
        height: "70vh",
        margin: "5vh 0",
      },
    },

    grid: {
      width: "100px",
      margin: "0px",
    }, // spacing for Cards
  })
);

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Paper className={classes.NavBar}>
        <LeftNav />
      </Paper>

      <Paper elevation={0} className={classes.TextScroller}>
        <TextScroller />
      </Paper>

      <Grid container xs={12} className={classes.Cards}>
        <Paper elevation={0} className={classes.paperTrendings}>
          <TopSevenTrending />
        </Paper>{" "}
        <Paper elevation={0} className={classes.paperBitcoin}>
          <BitCoinData />
        </Paper>
      </Grid>
    </div>
  );
}
