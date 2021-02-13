import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme, Paper } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import LeftNav from "../../components/Nav/LeftNav";
//styles

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
    listPage: {
      height: "90vh",
      textAlign: "center",
      fontWeight: 900,
      fontSize: "20px",
      color: "#fff",
    },
    root: {
      maxWidth: 300,
      margin: "auto",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        maxWidth: 200,
      },
    },
    NavBar: {
      height: "10vh",
    },
    card: {
      padding: "20px",
      margin: "0",
      width: "100%",
      backgroundColor: "#191970",
    },
    index: {
      borderRadius: "50%",
      border: "2px solid gold",
      width: "30px",
      height: "30px",
      lineHeight: "30px",
      textAlign: "center",
      fontWeight: 600,
      margin: " 0 auto 10px auto",
      [theme.breakpoints.up("md")]: {
        margin: 0,
        background: "gold",
        borderRadius: "50%",
        borderColor: "none",
        marginBottom: "0px",
      },
    },
    datas_keys: {
      fontWeight: 600,
    },
  })
);

//////////

interface IAllCoins {
  current_price: number;
  symbol: string;
  image: string;
  id: string;
  market_cap_rank: number;
  name: string;
}

export default function list() {
  const [datas, setDatas] = useState<IAllCoins[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  let requestUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    setIsLoading(true);
    fetch(requestUrl)
      .then((res) => res.json())
      .then((res) => {
        let allDatas = res;
        console.log(allDatas);
        setDatas(allDatas);
        setIsLoading(false);
      });
  }, []);
  const classes = useStyles();
  /*let bitcoinDatas = JSON.stringify(datas[0]);
  alert(bitcoinDatas);*/

  if (isLoading) {
    return (
      <div>
        <div>
          <div>
            <div className={classes.listPage}>
              <p
                style={{
                  marginTop: "45vh",
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
  } else {
    return (
      <div>
        <Paper className={classes.NavBar}>
          <LeftNav />
        </Paper>
        <Grid container spacing={10} className={classes.card}>
          {datas.map((data: IAllCoins, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                className={classes.cardContainer}
              >
                <>
                  <p className={classes.index}>{(index += 1)}</p>
                  <Card key={index} className={classes.root}>
                    <CardActionArea>
                      {data.image && (
                        <CardMedia
                          component="img"
                          alt={data.name}
                          height="80"
                          image={data.image}
                          title={data.name}
                        />
                      )}

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {data.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          component="p"
                        >
                          <p>
                            <span className={classes.datas_keys}>
                              Symbole :
                            </span>{" "}
                            {data.symbol.toUpperCase()}
                          </p>
                          <p>
                            <span className={classes.datas_keys}>Valeur :</span>{" "}
                            {data.current_price.toLocaleString()} €
                          </p>
                          <p>
                            <span className={classes.datas_keys}>Rang :</span>{" "}
                            {data.market_cap_rank}
                          </p>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Graphique
                      </Button>
                    </CardActions>
                  </Card>
                </>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
