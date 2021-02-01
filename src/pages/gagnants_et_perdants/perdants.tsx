import React, { FC, useState, useEffect } from "react";
import To_the_sea from "../../images/go_to_the_sea.jpg";
import coinGecko from "../../Api/coinGecko";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const perdants: FC = () => {
  const [winningCryptos, setWinningCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeFormat, setTimeFormat] = useState("24h"); //
  console.log(timeFormat);
  useEffect(() => {
    const fetchData = async (page: number) => {
      setIsLoading(true);

      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "eur",
          per_page: 250,
          page: page,
          price_change_percentage: timeFormat,
        },
      });
      const responseData = response.data;
      const targetDatas = responseData.map((data) => {
        if (timeFormat === "7d") {
          return {
            id: data.id,
            image: data.image,
            symbole: data.symbol,
            pourcentage_evolution: data.price_change_percentage_7d_in_currency,
          };
        }
        if (timeFormat === "30d") {
          return {
            id: data.id,
            image: data.image,
            symbole: data.symbol,
            pourcentage_evolution: data.price_change_percentage_30d_in_currency,
          };
        } else {
          return {
            id: data.id,
            image: data.image,
            symbole: data.symbol,
            pourcentage_evolution: data.price_change_percentage_24h_in_currency,
          };
        }
      });
      return targetDatas;
    };
    (async () => {
      let results = [];

      for (let page = 0; page < 65; page++) {
        const res = await fetchData(page);

        results.push(...res);
      }
      const sortByMapped = (map, compareFn) => (a, b) =>
        compareFn(map(a), map(b));
      const byValue = (a, b) => a - b;
      const toPrice = (e) => e.pourcentage_evolution;
      const byPrice = sortByMapped(toPrice, byValue);

      const formatedData = [...results].sort(byPrice);
      const topTen = formatedData.splice(0, 10);
      console.log(topTen);
      setWinningCryptos(topTen);
      setIsLoading(false);
    })();
  }, [timeFormat]);
  /* styles */

  let styles = {
    page: {
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${To_the_sea})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    },
    mainTitle: {
      height: "10vh",
      lineHeight: "10vh",
      verticalAlign: "middle",
      color: "#fff",
      background: "#0063cc",
      width: "100%",
      textAlign: "center",
    },

    cardContainer: {
      display: "flex",
      flexDirection: "column",
      height: "90vh",
      justifyContent: "center",
      alignItems: "center",
    },
    periodContainer: {
      width: "600px",
      height: "50px",
      background: "rgba(0, 99, 204, 0.5)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontWeight: 600,
    },
    period_content: {
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
    },
    period_contentspan: {
      color: "#fff",
      fontSize: "18px",
      alignItems: "center",
      display: "inline-flex",
    },
    button: {
      padding: "5px",
      color: "#0063cc",
      background: "#fff",
      border: "1px solid #fff",
      textShadow: "1px 1px 1px #000",
    },
    card: {
      width: "600px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      fontWeight: 600,
    },
    table: {
      margin: "0 auto",
      width: "600px",
      background: "rgba(255,255,255,0.5)",
      borderSpacing: "0px",
      boxShadow: " 5px 8px 24px 5px #0063cc",
      border: "1px solid #fff",
    },

    thead: {
      color: "#000",
      background: "rgba(255,255,255,0.2)",
    },
    tr: {
      color: "#fff",
    },
    tdIndex: {
      textAlign: "center",
      fontWeight: 800,
    },

    tdImage: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: "40px",
      height: "40px",
      margin: "7px auto",
    },
    tdDetails: {
      textAlign: "center",
      letterSpacing: "2px",
    },
    tdDetailsBlue: {
      textAlign: "center",
      color: "#0063cc",
      letterSpacing: "2px",
    },
    growing: {
      color: "green",
      textAlign: "center",
    },
    triangleUp: {
      width: "0",
      height: "0",
      borderLeft: "9px solid transparent",
      borderRight: "9px solid transparent",
      borderBottom: "15px solid green",
    },

    decreasing: {
      color: "red",
      textAlign: "center",
    },
    root: {
      height: "100%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "auto",
    },
    loading: {
      height: "100px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
  };

  /**/

  if (isLoading) {
    return (
      <div style={styles.page}>
        <div style={styles.root}>
          <div style={styles.loading}>
            <div
              style={{
                textAlign: "center",

                fontWeight: 900,
                fontSize: "20px",
                color: "white",
              }}
            >
              <p
                style={{
                  marginBottom: "30px",
                }}
              >
                Chargement en cours
              </p>
              <CircularProgress disableShrink />
            </div>

            <div />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={styles.page}>
      <header>
        {" "}
        <h1 style={styles.mainTitle}>Perdants</h1>
      </header>
      <div style={styles.cardContainer}>
        <div style={styles.periodContainer}>
          <div style={styles.period_content}>
            <span style={styles.period_contentspan}>Période :</span>

            <button style={styles.button} onClick={() => setTimeFormat("24h")}>
              24 H
            </button>

            <button style={styles.button} onClick={() => setTimeFormat("7d")}>
              7 J
            </button>

            <button style={styles.button} onClick={() => setTimeFormat("30d")}>
              30 J
            </button>
          </div>
        </div>
        <div style={styles.card}>
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th colSpan={1}>Position</th>
                <th colSpan={1}>Logo</th>
                <th colSpan={1}>Nom</th>
                <th colSpan={1}>symbole</th>
                <th colSpan={1}>%</th>
              </tr>
            </thead>

            <tbody>
              {winningCryptos.map((crypto, index) => (
                <tr key={"crypto" + index} style={styles.tr}>
                  <td style={styles.tdIndex}>{index + 1}</td>
                  <td style={styles.tdImage}>
                    <img src={crypto.image} style={styles.img} />
                  </td>
                  <td style={styles.tdDetailsBlue}>{crypto.id}</td>
                  <td style={styles.tdDetails}>{crypto.symbole}</td>
                  <td
                    style={
                      crypto.pourcentage_evolution > 0
                        ? styles.growing
                        : styles.decreasing
                    }
                  >
                    {crypto.pourcentage_evolution.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default perdants;
