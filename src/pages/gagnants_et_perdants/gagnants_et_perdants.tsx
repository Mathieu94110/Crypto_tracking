import React, { FC } from "react";
import Crypto_chart from "../../images/crypto_chart.jpg";
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
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
      [theme.breakpoints.up("md")]: {
        height: "100%",
      },
    },

    title: {
      width: "100%",
      height: "10vh",
      color: "gold",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    cards_parent: {
      height: "600px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      margin: "auto",

      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "center",
        margin: "0",
      },
    },
    title_bull: {
      color: "green",
      marginLeft: "20px",
    },
    title_bear: {
      marginLeft: "20px",
    },

    description: {
      fontWeight: "bold",
      color: "#000",
      margin: "0 10px",
      fontSize: "0.8em",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2em",
        margin: "0 20px",
      },
    },
    action: {
      fontWeight: 800,
      marginLeft: "20px",
    },

    root: {
      maxWidth: 280,
      maxHeight: 280,
      [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        maxWidth: 345,
        maxHeight: 420,
      },
    },
    media: {
      height: 80,
      [theme.breakpoints.up("md")]: {
        height: 140,
      },
    },
    /* cardsSpaceOnResponsive: {
      display: "block",
      height: "100%",
      width: "100%",
      justifyContent: "spaceBetween",
      alignItems: "stretch",
    },*/
  })
);

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
