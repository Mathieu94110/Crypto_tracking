import React, { useEffect, useState } from "react"; //
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";

//

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

  return (
    <div
      style={{
        border: "2px solid #000",
        borderRadius: "2%",
        background: "linear-gradient(to bottom left, #f83600, #f9d423)",
        color: "#fff",
        fontSize: "1em",
      }}
    >
      <h2 style={{ textAlign: "center", height: "50px", lineHeight: "50px" }}>
        Top 7 des tendances cryptos{" "}
      </h2>
      <div
        style={{
          width: "100%",
          padding: "0 10px",
          height: "450px",
        }}
      >
        <table
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <thead style={{}}>
            <tr
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                color: "#000",
              }}
            >
              <th colSpan={1}>Position</th>
              <th colSpan={1}>Logo</th>
              <th colSpan={1}>Nom</th>
              <th colSpan={1}>Symbole</th>
              <th colSpan={1}>Position</th>
            </tr>
          </thead>
          {trendDatas.map((trend: ISevenTrends, index) => (
            <tbody style={{}}>
              <tr
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <td>{(index += 1)} </td>
                <td>
                  <img
                    src={trend.item.large}
                    alt="logo"
                    width="40px"
                    height="40px"
                  />
                </td>
                <td>{trend.item.name}</td> <td>{trend.item.symbol}</td>
                <td>{trend.item.market_cap_rank}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
