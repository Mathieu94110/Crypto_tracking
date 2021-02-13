import React, { useState, useEffect } from "react";
import bitcoin_background from "../../images/bitcoin_background.jpg";
import coinGecko from "../../Api/coinGecko";
import BitcoinDetailPage from "./BitcoinDetailPage";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
    bitcoinCard: {
      height: "100%", //  height: "528px",
      border: "2px solid #000",
      verticalAlign: "middle",
      color: "#fff",
      backgroundColor: "#191970",
      backgroundImage: `url(${bitcoin_background})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    bitcoinCardContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      textAlign: "center",
      fontSize: "1em",
    },
    bitcoinTitle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      width: "200px",
      height: "100px",
    },
    bitcoinH2: {
      marginBottom: "7px",
      fontSize: "1.2em",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.7em",
      },
    },
    table: {
      border: "1px solid #fff none",
      borderStyle: "groove",
    },
    categoriesTitle: {
      color: "gold",
      fontSize: "0.7em",
      [theme.breakpoints.up("md")]: {
        fontSize: "1em",
      },
    },
    categoriesDatas: {
      fontSize: "0.7em",
      [theme.breakpoints.up("md")]: {
        fontSize: "1em",
      },
    },
  })
);

//////////

const CoinsDatas = () => {
  const [allCoinsDatas, setallCoinsDatas] = useState({
    name: "string",
    image: "string",
    circulating_supply: "number",
    market_cap: "number",
    total_supply: "number",
    total_volume: "number",
    low_24h: "number",
    high_24h: "number",
  });

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "eur",
          id: "bitcoin",
        },
      });
      let data = response.data[0];
      console.log();
      setallCoinsDatas(data);
    };

    fetchData(allCoinsDatas);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.bitcoinCard}>
      <div className={classes.bitcoinCardContent}>
        <div className={classes.bitcoinTitle}>
          <h2 className={classes.bitcoinH2}>{allCoinsDatas.name} </h2>
          <img
            src={allCoinsDatas.image}
            width="45px"
            height="45px"
            alt="bitcoin"
          />
        </div>

        <table className={classes.table}>
          <thead>
            <tr className={classes.categoriesTitle}>
              <th>Capitalisation :</th>
              <th> Jeton :</th>
              <th>Volume(24H)</th>
              <th> Max 24h :</th>
              <th> Min 24h :</th>
              <th>En circulation :</th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes.categoriesDatas}>
              <td>{allCoinsDatas.market_cap.toLocaleString()}</td>
              <td>{allCoinsDatas.total_supply.toLocaleString()}</td>
              <td>{allCoinsDatas.total_volume.toLocaleString()}</td>
              <td>{allCoinsDatas.high_24h.toLocaleString()}</td>
              <td>{allCoinsDatas.low_24h.toLocaleString()}</td>
              <td>{allCoinsDatas.circulating_supply.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <BitcoinDetailPage />
    </div>
  );
};

export default CoinsDatas;
