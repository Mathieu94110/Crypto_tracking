import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import AlertError from "../../components/SearchCrypto/Alert";
import SearchedCrypto from "../../components/SearchCrypto/SearchedCrypto";
import SearchForm from "../../components/SearchCrypto/SearchForm";
import { setAlert } from "../../redux/Actions/alertActions";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const Search: FC = () => {
  const Favorites = useSelector(
    (state: RootStore) => state.favorites.favoriteDatas
  );
  /* function searchById(obj) {
  if (SearchCryptoData != null && obj.id === SearchCryptoData ){
  return true
  }
var arrByID = Favorites.filter(searchById);

}*/

  const dispatch = useDispatch();
  const SearchCryptoData = useSelector((state: RootStore) => state.search.data);
  const loading = useSelector((state: RootStore) => state.search.loading);
  const alertMsg = useSelector((state: RootStore) => state.alert.message);

  //console.log(SearchCryptoData)
  (() => {
    if (SearchCryptoData != null) {
      console.log(SearchCryptoData[0].id);
    }
  })();

  const useStyles = makeStyles({
    parent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "absolute",
      maxHeight: "80px",
      width: "100%",
    },

    alert: {
      backgroundColor: "rgba(34, 139, 34,0.8)",
      width: "100%",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
    },
    title: {
      fontWeight: 700,
    },
  });

  const classes = useStyles();
  return (
    <div style={{ textAlign: "center", display: "column" }}>
      <header>
        {" "}
        <h1
          style={{
            height: "10vh",
            lineHeight: "10vh",
            verticalAlign: "middle",
            color: "#fff",
            background: "#0063cc",
            width: "100%",
          }}
        >
          Rechercher une crypto-monnaie
        </h1>
      </header>
      {SearchCryptoData && (
        <div className={classes.parent}>
          {" "}
          <div className={classes.root}>
            <Alert severity="success" className={classes.alert}>
              <AlertTitle className={classes.title}>Succès</AlertTitle>
              <strong>Cryptomonnaie </strong>
              ajoutée à vos favoris !
            </Alert>
          </div>
        </div>
      )}
      {alertMsg && (
        <AlertError message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      <div style={{ display: "flex" }}>
        <SearchForm />
        {loading ? (
          <h2 style={{ margin: "auto" }}>Chargement...</h2>
        ) : (
          SearchCryptoData && <SearchedCrypto data={SearchCryptoData} />
        )}
      </div>
    </div>
  );
};

export default Search;
