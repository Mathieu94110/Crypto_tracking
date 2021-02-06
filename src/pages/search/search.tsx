import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import AlertError from "../../components/SearchCrypto/Alert";
import SearchedCrypto from "../../components/SearchCrypto/SearchedCrypto";
import SearchForm from "../../components/SearchCrypto/SearchForm";
import { setAlert } from "../../redux/Actions/alertActions";

import { Alert, AlertTitle } from "@material-ui/lab";

//styles

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
    alerts: {
      height: "100px",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        height: "10vh",
      },
    },
    alert: {
      justifyContent: "center",
    },

    emptyAlert: {
      width: "100%",
      height: "100%",

      [theme.breakpoints.up("md")]: {
        height: "10vh",
      },
    },
    page: {
      textAlign: "center",
      display: "column",
      width: "100%",
      maxHeight: "650px",
      [theme.breakpoints.up("md")]: {
        height: "100vh",
      },
    },
    homeTitle: {
      height: "60px",
      lineHeight: "60px",
      color: "#fff",
      background: "#0063cc",
      width: "100%",
      fontSize: "1.2em",
      [theme.breakpoints.up("md")]: {
        height: "10vh",
        width: "100%",
      },
    },
    title: {
      fontWeight: 700,
      [theme.breakpoints.up("md")]: {},
    },
    formAndResult: {
      display: "block",
      justifyContent: "space-evenly",
      height: "700px",

      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        height: "calc(80vh - 100px)",
        width: "100%",
      },
    },
  })
);

//

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

  const classes = useStyles();
  return (
    <div className={classes.page}>
      <header>
        {" "}
        <h1 className={classes.homeTitle}>Rechercher une crypto-monnaie</h1>
      </header>

      <div className={classes.alerts}>
        {SearchCryptoData ? (
          <Alert severity="success" className={classes.alert}>
            <AlertTitle className={classes.title}>Succès</AlertTitle>
            <strong>Cryptomonnaie </strong>
            ajoutée à vos favoris !
          </Alert>
        ) : alertMsg ? (
          <AlertError
            message={alertMsg}
            onClose={() => dispatch(setAlert(""))}
          />
        ) : (
          <div className={classes.emptyAlert}></div>
        )}
      </div>

      <div className={classes.formAndResult}>
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
