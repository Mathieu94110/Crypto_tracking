import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 200,
      margin: "auto",
      alignItems: "center",
    },
    header: {
      width: "100%",
      height: "10vh",
      lineHeight: "10vh",
      backgroundColor: "#0063cc",
      color: "#fff",
      textAlign: "center",
      fontWeight: 800,
      fontSize: "1.8em",
    },
    index: {
      width: "30px",
      height: "30px",
      lineHeight: "30px",
      background: "gold",
      borderRadius: "50%",
      textAlign: "center",
      fontWeight: 600,
    },
    datas_keys: {
      fontWeight: 600,
    }, //modal popup
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }, //
  })
);
const myFavorites: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Favorites = useSelector(
    (state: RootStore) => state.favorites.favoriteDatas
  );
  console.log(Favorites);

  return (
    <div style={{}}>
      <h1 className={classes.header}>
        {" "}
        <h1>Favoris</h1>
      </h1>
      <Grid container spacing={10} style={{ padding: "20px" }}>
        {Favorites.map((fav, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <>
                <p className={classes.index}>{(index += 1)}</p>
                <Card key={index} className={classes.root}>
                  <CardActionArea>
                    {fav["0"].image && (
                      <CardMedia
                        component="img"
                        alt={fav["0"].name}
                        height="80"
                        image={fav["0"].image}
                        title={fav["0"].name}
                      />
                    )}

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {fav["0"].name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                      >
                        <p>
                          <span className={classes.datas_keys}>Symbole :</span>{" "}
                          {fav["0"].symbol.toUpperCase()}
                        </p>
                        <p>
                          <span className={classes.datas_keys}>Valeur :</span>{" "}
                          {fav["0"].current_price} €
                        </p>
                        <p>
                          <span className={classes.datas_keys}>Rang :</span>{" "}
                          {fav["0"].market_cap_rank}
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" onClick={handleOpen}>
                      Details
                    </Button>
                    <Button size="small" color="primary">
                      Retirer
                    </Button>
                  </CardActions>
                </Card>
              </>
            </Grid>
          );
        })}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}></div>
          </Fade>
        </Modal>
      </Grid>
    </div>
  );
};

export default myFavorites;
