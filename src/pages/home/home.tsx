import React from "react";
import { HeaderBar } from "../../components/headerBar";
import TopSevenTrending from "../../components/topSevenTrending";
import NavBar from "../../components/Nav/Navbar";
import BitCoinData from "../../components/Bitcoin/BitcoinData";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid: {
      width: "100px",
      margin: "0px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

export default function Home() {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);

  const classes = useStyles();
  return (
    <div style={{ height: "100vh" }}>
      <NavBar />
      <HeaderBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "80vh",
        }}
      >
        <div className={classes.root}>
          <Grid container spacing={spacing}>
            <Grid item xs={12} sm={6}>
              {" "}
              <Paper className={classes.paper}>
                <TopSevenTrending />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              {" "}
              <Paper className={classes.paper}>
                <BitCoinData />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
