import React, { FC, useState, useEffect } from "react";
import To_the_sea from "../../images/go_to_the_sea.jpg";
import coinGecko from "../../Api/coinGecko";

const perdants: FC = () => {
  const [loosingCryptos, setLoosingCryptos] = useState([]);
  useEffect(() => {
    const fetchData = async (page: number) => {
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "eur",
          per_page: 250,
          page: page,
        },
      });
      const responseDataTwo = response.data;
      const targetDatasTwo = responseDataTwo.map((data) => {
        return {
          id: data.id,
          image: data.image,
          symbole: data.symbol,
          market_cap_change_percentage_24h:
            data.market_cap_change_percentage_24h,
        };
      });
      return targetDatasTwo;
    };
    (async () => {
      let results = [];

      for (let page = 0; page < 5; page++) {
        const res = await fetchData(page);

        results.push(...res);
      }
      const sortByMappedTwo = (map, compareFn) => (a, b) =>
        compareFn(map(a), map(b));
      const byValueTwo = (a, b) => a - b;
      const toPriceTwo = (e) => e.market_cap_change_percentage_24h;
      const byPriceTwo = sortByMappedTwo(toPriceTwo, byValueTwo);

      const formatedDataTwo = [...results].sort(byPriceTwo);
      const lowTen = formatedDataTwo.splice(0, 10);
      console.log(lowTen);
      setLoosingCryptos(lowTen);
    })();
  }, []);

  //styles//////////////////////
  let styles = {
    page: {
      width: "100%",
      height: "100vh",
      margin: "0",
      padding: "0",
      backgroundImage: `url(${To_the_sea})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    mainTitle: {
      height: "10vh",
      lineHeight: "10vh",
      verticalAlign: "middle",
      color: "#fff",
      background: "#0063cc",
      width: "100%",
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
  };

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

            <button style={styles.button}>24 H</button>

            <button style={styles.button}>7 J</button>

            <button style={styles.button}>30 J</button>
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
              {loosingCryptos.map((crypto, index) => (
                <tr key={"crypto" + index} style={styles.tr}>
                  <td style={styles.tdIndex}>{index + 1}</td>
                  <td style={styles.tdImage}>
                    <img src={crypto.image} style={styles.img} />
                  </td>
                  <td style={styles.tdDetailsBlue}>{crypto.id}</td>
                  <td style={styles.tdDetails}>{crypto.symbole}</td>
                  <td
                    style={
                      crypto.market_cap_change_percentage_24h > 0
                        ? styles.growing
                        : styles.decreasing
                    }
                  >
                    {crypto.market_cap_change_percentage_24h.toFixed(2)}
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
