import React, { useEffect, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

//props transmise par Bitcoindetails
const HistoryChart = ({ data }) => {
  // mise en place du format / jour / semaine / année pour ensuite pouvoir reaffecter les valeurs à partir de determineTimeFormat() crée plus bas puis renseigné dans les datasets
  const { day, week, year } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

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
      buttons_container: {
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly",
        [theme.breakpoints.up("md")]: {
          justifyContent: "center",
        },
      },
      buttons: {
        width: "50px",
        height: "25px",
        textAlign: "center",
        verticalAlign: "middle",
        background: "black",
        color: "white",
        textDecoration: "none",
        borderRadius: "5%",
        margin: "15px",
        [theme.breakpoints.up("md")]: {
          margin: "8px",
        },
      },
    })
  );

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    let ctx = document.getElementById("myChart").getContext("2d"); // 2d context nécessaire au rendu
    console.log(data);
    const chartInstance = new Chartjs(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Bitcoin",
            data: determineTimeFormat(),
            backgroundColor: "yellow",
            borderColor: "orange",
            pointRadius: 0,
          },
        ],
      },
      options: {
        ...historyOptions,
      },
    });
  });
  const classes = useStyles();
  return (
    <div style={{ margin: " 0 20px" }}>
      <div>
        <canvas id="myChart" width={250} height={250}></canvas>
      </div>

      <div className={classes.buttons_container}>
        <button
          className={classes.buttons}
          onClick={() => setTimeFormat("24h")}
        >
          24h
        </button>
        <button onClick={() => setTimeFormat("7d")} className={classes.buttons}>
          7d
        </button>
        <button onClick={() => setTimeFormat("1y")} className={classes.buttons}>
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
