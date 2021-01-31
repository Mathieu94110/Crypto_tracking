import React, { FC } from "react";
import Crypto_chart from "../../images/crypto_chart.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Navbar from "../../components/Nav/Navbar";
import Bullish from "../../images/bullish.jpg";
import Bearish from "../../images/bearish.jpg";

const useStyles = makeStyles({
  page: {
    width: "100%",
    height: "100vh",
    margin: "0",
    padding: "0",
    backgroundImage: `url(${Crypto_chart})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  title: {
    width: "100%",
    height: "10vh",
    color: "gold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cards_parent: {
    width: "100%",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title_bull: {
    color: "green",
    marginLeft: "20px",
  },
  title_bear: {
    marginLeft: "20px",
  },

  description: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
    margin: "0 20px",
  },
  action: {
    fontWeight: 800,
    marginLeft: "20px",
  },

  root: {
    maxWidth: 345,
    maxHeight: 420,
  },
  media: {
    height: 140,
  },
});

const gagnants_et_perdants: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Navbar />

      <h1 className={classes.title}>Gagnants et perdants</h1>
      <div className={classes.cards_parent}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Bullish}
              title="Bullish market "
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title_bull}
              >
                En hausse
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.description}
              >
                Retrouvez les 10 hausses les plus importantes sur une période de
                24h, 7j, 1m
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              className={classes.action}
              onClick={() => (window.location = "/gagnants")}
            >
              En savoir plus
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Bearish}
              title="Bearish market "
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="secondary"
                className={classes.title_bear}
              >
                En baisse
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.description}
              >
                Retrouvez les 10 baisses les plus importantes sur une période de
                24h, 7j, 1m
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              className={classes.action}
              onClick={() => (window.location = "/perdants")}
            >
              En savoir plus
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default gagnants_et_perdants;
