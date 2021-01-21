import React, { useEffect, useState} from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";
                      //props transmise par Bitcoindetails 
const HistoryChart = ({ data }) => {

// mise en place du format / jour / semaine / année pour ensuite pouvoir reaffecter les valeurs à partir de determineTimeFormat() crée plus bas puis renseigné dans les datasets
  const { day, week, year} = data;
  const [timeFormat, setTimeFormat] = useState("24h");

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
let ctx = document.getElementById('myChart').getContext('2d'); // 2d context nécessaire au rendu
      console.log(data);
      const chartInstance = new Chartjs(ctx,  {
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


  return (
    <div>
   
      <div>
        <canvas  id="myChart" width={250} height={250}></canvas>
      </div>

      <div>
        <button
          onClick={() => setTimeFormat("24h")}
       
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          style={{margin:"0 10px"}}
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
      
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
