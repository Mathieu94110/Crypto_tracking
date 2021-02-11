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
    media: {
      height: 140,
    },
    page: {
      width: "100vw",
      height: "300px",
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
      width: 250,
    },
    textButton: {
      margin: "auto",
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
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              style={{ height: 140 }}
              image={Object.values(data)[0].image} //changement des cryptoState en data
              title={Object.values(data)[0].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {Object.values(data)[0].name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <p>Symbole : {Object.values(data)[0].symbol.toUpperCase()} </p>
                <p>Prix : {Object.values(data)[0].current_price} €</p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
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
      </div>
    </div>
  );
};

export default searchedCrypto;
