import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
//rajout//
import { FavoritesData } from "../../redux/Types/searchCryptoTypes";
import { addCrypto } from "../../redux/Actions/AddAndDeleteActions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { setAlertSuccess } from "../../redux/Actions/alertActions";
import { Paper } from "@material-ui/core";
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
      width: "100vw",
      height: "200px",
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        width: "50vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    pageContent: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        width: "50vw",
      },
    },
    card: {
      width: 160,
      height: 180,
      [theme.breakpoints.up("md")]: {
        width: 250,
        height: 304,
      },
    },

    card_content: {
      height: 90,
      padding: 5,
      fontSize: "0.4em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        height: 120,
        padding: 10,
        fontSize: "0.875em",
      },
    },
    CardTitle: {
      height: 20,
      marginBottom: "0.35em",
      fontSize: "3.5em",
      [theme.breakpoints.up("md")]: {
        marginBottom: "5px",
        fontSize: "1.5rem",
        height: 40,
      },
    },
    card_media: {
      width: "100%",
      height: 50,
      [theme.breakpoints.up("md")]: {
        height: 120,
      },
    },
    textButtonContainer: {
      padding: "0px",
      [theme.breakpoints.up("md")]: {
        padding: "8px",
      },
    },
    textButton: {
      width: "100%",
      margin: "auto",
      fontSize: "0.7em", //
      height: 30,
      fontWeight: 600,
      padding: "0px",
      [theme.breakpoints.up("md")]: {
        height: "auto",
        padding: "8px",
        fontSize: "0.9em",
      },
    },
    textContent: {
      color: "#000",
      margin: "auto",
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
      fontWeight: 600,
      [theme.breakpoints.up("md")]: {
        width: "70%",
      },
    },
  })
);

interface SearchCryptoProps {
  data: FavoritesData;
}

const searchedCrypto: FC<SearchCryptoProps> = ({ data }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  //{Object.values(data)[0] != undefined}
  return (
    <div className={classes.page}>
      <div className={classes.pageContent}>
        <Paper elevation={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.card_media}
                image={Object.values(data)[0].image} //changement des cryptoState en data
                title={Object.values(data)[0].name}
              />
              <CardContent className={classes.card_content}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.CardTitle}
                >
                  {Object.values(data)[0].name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p className={classes.textContent}>
                    <span>Rang :</span>{" "}
                    <span>{Object.values(data)[0].market_cap_rank}</span>
                  </p>
                  <p className={classes.textContent}>
                    <span>Symbole :</span>{" "}
                    <span>{Object.values(data)[0].symbol.toUpperCase()}</span>
                  </p>
                  <p className={classes.textContent}>
                    <span>Prix :</span>{" "}
                    <span>{Object.values(data)[0].current_price} €</span>
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.textButtonContainer}>
              <Button
                size="small"
                color="primary"
                className={classes.textButton}
                onClick={() => {
                  dispatch(
                    setAlertSuccess("Crypto-monnaie ajoutée à vos favoris !")
                  );
                  dispatch(addCrypto(data));
                }}
              >
                Ajouter à ma liste
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </div>
    </div>
  );
};

export default searchedCrypto;
