import React, { FC, useState, useEffect } from "react";
import coinGecko from "../../Api/coinGecko";
import To_the_moon from "../../images/to_the_moon.jpeg";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const gagnants: FC = () => {
  const [winningCryptos, setWinningCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeFormat, setTimeFormat] = useState("24h"); //
  const [sample, setSample] = useState(1);

  console.log(timeFormat);
  useEffect(() => {
    const fetchData = async (page: number) => {
      setIsLoading(true);

      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "eur",
          per_page: 100,
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

      for (let page = 0; page < sample; page++) {
        const res = await fetchData(page);

        results.push(...res);
      }
      const sortByMapped = (map, compareFn) => (a, b) =>
        compareFn(map(a), map(b));
      const byValue = (a, b) => b - a;
      const toPrice = (e) => e.pourcentage_evolution;
      const byPrice = sortByMapped(toPrice, byValue);

      const formatedData = [...results].sort(byPrice);
      const topTen = formatedData.splice(0, 10);
      console.log(topTen);
      setWinningCryptos(topTen);
      setIsLoading(false);
    })();
  }, [timeFormat, sample]);
  /* styles */

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      page: {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${To_the_moon})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.up("md")]: {
          height: "100vh",
        },
      },
      mainTitle: {
        height: "60px",
        lineHeight: "60px",
        verticalAlign: "middle",
        textAlign: "center",
        color: "#fff",
        background: "#0063cc",
        width: "100%",
        [theme.breakpoints.up("md")]: {
          height: "10vh",
          lineHeight: "10vh",
        },
      },

      cardContainer: {
        display: "flex",
        flexDirection: "column",
        height: "612px",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
          height: "90vh",
        },
      },
      card: {
        [theme.breakpoints.up("md")]: {
          height: "90%",
        },
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
      tableContainer: {
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
    })
  );

  /**/
  const classes = useStyles();
  if (isLoading) {
    return (
      <div className={classes.page}>
        <div className={classes.root}>
          <div className={classes.loading}>
            <div
              style={{
                textAlign: "center",
                fontWeight: 900,
                fontSize: "20px",
                color: "#fff",
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
    <div className={classes.page}>
      <header>
        {" "}
        <h1 className={classes.mainTitle}>Gagnants</h1>
      </header>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <div className={classes.periodContainer}>
            <div className={classes.period_content}>
              <span className={classes.period_contentspan}>Échantillon :</span>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">
                  Grouping
                </InputLabel>

                <Select defaultValue="" id="grouped-native-select">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  <MenuItem value={1} onClick={() => setSample(1)}>
                    100 premières
                  </MenuItem>
                  <MenuItem value={10} onClick={() => setSample(10)}>
                    1000 premières
                  </MenuItem>
                  <MenuItem value={100} onClick={() => setSample(65)}>
                    Toutes
                  </MenuItem>
                </Select>
              </FormControl>
              <span className={classes.period_contentspan}>Période :</span>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                <Select defaultValue="" id="grouped-select">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  <MenuItem value={"24h"} onClick={() => setTimeFormat("24h")}>
                    24 heures
                  </MenuItem>
                  <MenuItem value={"7d"} onClick={() => setTimeFormat("7d")}>
                    7 jours
                  </MenuItem>
                  <MenuItem value={"30d"} onClick={() => setTimeFormat("30d")}>
                    30 jours
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={classes.tableContainer}>
            <table className={classes.table}>
              <thead className={classes.thead}>
                <tr>
                  <th colSpan={1}>Position</th>
                  <th colSpan={1}>Logo</th>
                  <th colSpan={1}>Nom</th>
                  <th colSpan={1}>symbole</th>
                  <th colSpan={1}>%</th>
                </tr>
              </thead>

              <tbody className={classes.datas}>
                {winningCryptos.map((crypto, index) => (
                  <tr key={"crypto" + index} className={classes.tr}>
                    <td className={classes.tdIndex}>{index + 1}</td>
                    <td className={classes.tdImage}>
                      <img src={crypto.image} className={classes.img} />
                    </td>
                    <td className={classes.tdDetailsBlue}>{crypto.id}</td>
                    <td className={classes.tdDetails}>{crypto.symbole}</td>
                    <td
                      className={
                        crypto.pourcentage_evolution > 0
                          ? classes.growing
                          : classes.decreasing
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
    </div>
  );
};

export default gagnants;
