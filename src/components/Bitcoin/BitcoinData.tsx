import React, { FC, useState, useEffect } from "react";
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
      height: "400px",
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
      marginBottom: "15px",
      [theme.breakpoints.up("md")]: {
        height: "100%",
        margin: "0",
      },
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
      height: "60px",
      [theme.breakpoints.up("md")]: {
        height: "100px",
      },
    },
    bitcoinH2: {
      marginBottom: "7px",
      fontSize: "1.2em",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.7em",
      },
    },
    bitcoinImage: {
      width: "25px",
      height: "25px",

      [theme.breakpoints.up("md")]: {
        width: "45px",
        height: "45px",
      },
    },
    table: {
      border: "1px solid #fff none",
      borderStyle: "groove",

      [theme.breakpoints.up("md")]: {},
    },
    categoriesTitle: {
      color: "gold",
      fontSize: "0.5em",
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
interface dataTypes {
  name: string;
  image: string;
  circulating_supply: number;
  market_cap: number;
  total_supply: number;
  total_volume: number;
  low_24h: number;
  high_24h: number;
}

const CoinsDatas: FC = () => {
  const [allCoinsDatas, setallCoinsDatas] = useState<dataTypes>({
    name: "",
    image: "",
    circulating_supply: 0,
    market_cap: 0,
    total_supply: 0,
    total_volume: 0,
    low_24h: 0,
    high_24h: 0,
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

    fetchData();
  }, []);
  const classes = useStyles();

  const convert = (value: any) => {
    if (value >= 1000000000) {
      value =
        (value / 1000000000).toString().substring(0, value.length - 10) + " G";
    } else if (1000000000 > value && value >= 1000000) {
      value =
        (value / 1000000).toString().substring(0, value.length - 7) + " M";
    } else if (1000000 > value && value >= 1000) {
      value = (value / 1000).toString().substring(0, value.length - 4) + " K";
    } else {
      return value;
    }
    return value;
  };

  return (
    <div className={classes.bitcoinCard}>
      <div className={classes.bitcoinCardContent}>
        <div className={classes.bitcoinTitle}>
          <h2 className={classes.bitcoinH2}>{allCoinsDatas.name} </h2>
          <img
            src={allCoinsDatas.image}
            className={classes.bitcoinImage}
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
              <td>{convert(allCoinsDatas.market_cap.toFixed(2))} $</td>
              <td>{convert(allCoinsDatas.total_supply.toFixed(2))}</td>
              <td>{convert(allCoinsDatas.total_volume.toFixed(2))} $</td>
              <td>{convert(allCoinsDatas.high_24h.toFixed(2))} $</td>
              <td>{convert(allCoinsDatas.low_24h.toFixed(2))} $</td>
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
