import React, { FC, useRef } from "react";
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
import Grid from "@material-ui/core/Grid";
import { DELETE_CRYPTO } from "../../redux/Actions/AddAndDeleteActions";
import Modal from "react-modal";

///////////// styles

/////////
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
    modalParent: {},
    modal: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      width: "300px",
      height: "600px",
      margin: "auto",
      border: "none",
      [theme.breakpoints.up("md")]: {
        width: "600px",
      },
    },
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
      margin: "0 auto 15px auto",
      [theme.breakpoints.up("md")]: {
        margin: "0",
      },
    },
    datas_keys: {
      fontWeight: 600,
    },

    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }, //
    cryptoTitle: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    dataTitle: {
      marginBottom: "10px",
    },
    dataLine: {
      display: "flex",
      justifyContent: "space-between",
    },
    datasKeys: {
      fontWeight: 600,
    },
    detailsDatas: {
      right: 0,
      color: "#000",
      fontWeight: 600,
    },
    detailsDatasImage: {
      margin: "10px 0",
    },
  })
);

/////////////

const myFavorites: FC = () => {
  const classes = useStyles();
  const [selectedFav, setSelectedFav] = React.useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Récupération du redux storage
  const Favorites = useSelector(
    (state: RootStore) => state.favorites.favoriteDatas
  ); //creation d'un tableau pour y stoquer les valeurs du storage
  console.log(Favorites);
  const newArray = [...Favorites];
  console.log(newArray);

  //Modal
  function openModal(fav) {
    setIsOpen(true);
    setSelectedFav(fav);
  }

  function closeModal() {
    setIsOpen(false);
  }

  ///////////// Modals events ////
  //index modal
  let ctyptoId;
  //index favorites
  let index = 1;
  //formatedDate

  const ChangeFormateDate = (date) => {
    return (
      date.substring(0, 10).toString().split("-").reverse().join("-") +
      " à " +
      date.substring(11, 16).replace(":"[0], "h")
    );
  };
  //
  return (
    <div style={{}}>
      <h1 className={classes.header}> Favoris</h1>
      <Grid container spacing={10} style={{ padding: "20px" }}>
        {Favorites.map((fav, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <>
                <p className={classes.index}>{index}</p>
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
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => openModal(fav)}
                    >
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
      </Grid>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={classes.modal}
          contentLabel="Example Modal"
        >
          <h2
            ref={(_ctyptoId) => (ctyptoId = _ctyptoId)}
            onClick={closeModal}
            className={classes.modalContent}
          >
            {selectedFav && (
              <div className={classes.paper}>
                <div className={classes.cryptoTitle}>
                  <h2 id="transition-modal-title">
                    <span className={classes.dataTitle}>Détails du </span>{" "}
                    <span className={classes.detailsDatas}>
                      {selectedFav["0"].name}
                    </span>
                  </h2>
                  <li className={classes.dataLine}>
                    <span className={classes.datasKeys}>En date du :</span>
                    <span className={classes.detailsDatas}>
                      {" "}
                      {ChangeFormateDate(selectedFav["0"].last_updated)}
                    </span>
                  </li>
                  <img
                    className={classes.detailsDatasImage}
                    src={selectedFav["0"].image}
                    width={80}
                    height={80}
                    alt="nom de cryptomonnaie"
                  />
                </div>
                <ul id="transition-modal-description">
                  <li className={classes.dataLine}>
                    <span className={classes.datasKeys}>Symbole :</span>
                    <span className={classes.detailsDatas}>
                      {" "}
                      {selectedFav["0"].symbol.toUpperCase()}
                    </span>
                  </li>
                  <ul>
                    <li className={classes.dataLine}>
                      <span className={classes.datasKeys}>Rang :</span>
                      <span className={classes.detailsDatas}>
                        {selectedFav["0"].market_cap_rank}
                      </span>
                    </li>
                    <li className={classes.dataLine}>
                      <span className={classes.datasKeys}>
                        En valeur (24h) :
                      </span>
                      <span className={classes.detailsDatas}>
                        {selectedFav["0"].market_cap_change_24h} €
                      </span>
                    </li>
                    <li className={classes.dataLine}>
                      <span className={classes.datasKeys}>
                        En pourcentage (24h) :
                      </span>
                      <span className={classes.detailsDatas}>
                        {selectedFav[
                          "0"
                        ].market_cap_change_percentage_24h.toFixed(2)}{" "}
                        %
                      </span>
                    </li>
                  </ul>
                  <li>
                    <span className={classes.datasKeys}>
                      Record historique ( max ) :
                    </span>
                    <ul>
                      <li className={classes.dataLine}>
                        <span className={classes.datasKeys}>En valeur :</span>{" "}
                        <span className={classes.detailsDatas}>
                          {" "}
                          {selectedFav["0"].ath} ‎€
                        </span>
                      </li>

                      <li className={classes.dataLine}>
                        <span className={classes.datasKeys}>
                          En pourcentage :
                        </span>
                        <span className={classes.detailsDatas}>
                          {" "}
                          {selectedFav["0"].ath_change_percentage.toFixed(2)} %
                        </span>
                      </li>
                      <li style={{}} className={classes.dataLine}>
                        <span className={classes.datasKeys}>Date :</span>{" "}
                        <span className={classes.detailsDatas}>
                          {" "}
                          {ChangeFormateDate(selectedFav["0"].ath_date)}
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className={classes.datasKeys}>
                      Record historique ( min ) :
                    </span>
                    <ul>
                      <li className={classes.dataLine}>
                        <span className={classes.datasKeys}>En valeur :</span>{" "}
                        <span className={classes.detailsDatas}>
                          {" "}
                          {selectedFav["0"].atl} ‎€
                        </span>
                      </li>

                      <li className={classes.dataLine}>
                        <span className={classes.datasKeys}>
                          En pourcentage :
                        </span>
                        <span className={classes.detailsDatas}>
                          {" "}
                          {selectedFav["0"].atl_change_percentage.toFixed(2)} %
                        </span>
                      </li>
                      <li className={classes.dataLine}>
                        <span className={classes.datasKeys}>Date :</span>{" "}
                        <span className={classes.detailsDatas}>
                          {" "}
                          {ChangeFormateDate(selectedFav["0"].atl_date)}
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className={classes.dataLine}>
                    {" "}
                    <span className={classes.datasKeys}>En circulation :</span>
                    <span className={classes.detailsDatas}>
                      {" "}
                      {selectedFav["0"].circulating_supply} tokens
                    </span>
                  </li>
                  <li className={classes.dataLine}>
                    <span className={classes.datasKeys}>Prix actuel :</span>{" "}
                    <span className={classes.detailsDatas}>
                      {" "}
                      {selectedFav["0"].current_price} ‎€
                    </span>
                  </li>
                  <li className={classes.dataLine}>
                    <span className={classes.datasKeys}>Maximum en 24h :</span>{" "}
                    <span className={classes.detailsDatas}>
                      {" "}
                      {selectedFav["0"].high_24h} ‎€
                    </span>
                  </li>

                  <li className={classes.dataLine}>
                    <span className={classes.datasKeys}>Minimum en 24h :</span>
                    <span className={classes.detailsDatas}>
                      {" "}
                      {selectedFav["0"].low_24h}
                    </span>
                  </li>
                  <li>
                    <li className={classes.dataLine}>
                      <span className={classes.datasKeys}>
                        Capitalisation boursière :
                      </span>
                      <span className={classes.detailsDatas}>
                        {" "}
                        {selectedFav["0"].market_cap}
                      </span>
                    </li>
                  </li>
                  <li className={classes.dataLine}>
                    <span className={classes.datasKeys}>Offre maximale :</span>
                    <span className={classes.detailsDatas}>
                      {selectedFav["0"].max_supply} tokens
                    </span>
                  </li>
                  <li>
                    <span className={classes.datasKeys}>
                      Évolution en 24h :
                    </span>
                    <ul>
                      <li className={classes.dataLine}>
                        <span className={classes.datasKeys}>En valeur :</span>{" "}
                        <span className={classes.detailsDatas}>
                          {" "}
                          {selectedFav["0"].price_change_24h} €
                        </span>
                      </li>
                      <li className={classes.dataLine}>
                        <span className={classes.datasKeys}>
                          En pourcentage :
                        </span>
                        <span className={classes.detailsDatas}>
                          {selectedFav["0"].price_change_percentage_24h.toFixed(
                            2
                          )}{" "}
                          %
                        </span>
                      </li>
                    </ul>
                  </li>

                  <li className={classes.dataLine}>
                    <span className={classes.datasKeys}>Offre totale :</span>
                    <span className={classes.detailsDatas}>
                      {" "}
                      {selectedFav["0"].total_supply} tokens
                    </span>
                  </li>
                  <li className={classes.dataLine}>
                    <span className={classes.datasKeys}>Volume total :</span>
                    <span className={classes.detailsDatas}>
                      {" "}
                      {selectedFav["0"].total_volume}
                    </span>
                  </li>
                  <li className={classes.dataLine}>
                    <span className={classes.datasKeys}>Roi :</span>{" "}
                    <span className={classes.detailsDatas}>
                      {" "}
                      {selectedFav["0"].roi ? (
                        <li>{fav["0"].market_cap_rank}</li>
                      ) : (
                        "Pas de données"
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </h2>
        </Modal>
      </div>
    </div>
  );
};
export default myFavorites;
