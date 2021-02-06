import React from "react";
import TextScroller from "../../components/TextScroller";
import TopSevenTrending from "../../components/topSevenTrending";
import NavBar from "../../components/Nav/Navbar";
import BitCoinData from "../../components/Bitcoin/BitcoinData";
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
    NavBar: {
      height: "10vh",
    },
    TextScroller: {
      height: "10vh",
    },
    Cards: {
      display: "block",
      margin: " 0% 2%",

      [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        alignItems: "space-between",
        flexGrow: 1,
        width: "100%",
        height: "80vh",
      },
    },
    paperTrendings: {
      textAlign: "center",
      display: "block",
      width: "96%",
      marginBottom: "20px",

      [theme.breakpoints.up("md")]: {
        marginBottom: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "47%",
        alignItems: "space-between",
        flexGrow: 1,
        height: "80vh",
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
        height: "80vh",
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
    <div style={{ height: "100vh" }}>
      <Paper className={classes.NavBar}>
        <NavBar />
      </Paper>

      <Paper className={classes.TextScroller}>
        <TextScroller />
      </Paper>

      <Grid container xs={12} className={classes.Cards}>
        <Paper className={classes.paperTrendings}>
          <TopSevenTrending />
        </Paper>{" "}
        <Paper className={classes.paperBitcoin}>
          <BitCoinData />
        </Paper>
      </Grid>
    </div>
  );
}
