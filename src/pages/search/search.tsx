import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import AlertError from "../../components/SearchCrypto/Alert";
import SuccessAlert from "../../components/SearchCrypto/SuccessAlert";
import SearchedCrypto from "../../components/SearchCrypto/SearchedCrypto";
import SearchForm from "../../components/SearchCrypto/SearchForm";
import { setAlert, setAlertSuccess } from "../../redux/Actions/alertActions";

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
  const dispatch = useDispatch();
  const SearchCryptoData = useSelector((state: RootStore) => state.search.data);
  const loading = useSelector((state: RootStore) => state.search.loading);
  const alertMsg = useSelector((state: RootStore) => state.alert.message);
  const SuccessAlertMessage = useSelector(
    (state: RootStore) => state.successAlert.message
  );

  //for display alert succeed for adding crypto in favorites
  const Favorites = useSelector((state: RootStore) => state.favorites.data); //object
  console.log(Favorites.length);

  const classes = useStyles();
  return (
    <div className={classes.page}>
      <header>
        {" "}
        <h1 className={classes.homeTitle}>Rechercher une crypto-monnaie</h1>
      </header>

      <div className={classes.alerts}>
        {SuccessAlertMessage && (
          <SuccessAlert
            message={SuccessAlertMessage}
            onClose={() => dispatch(setAlertSuccess(""))}
          />
        )}

        {alertMsg && (
          <AlertError
            message={alertMsg}
            onClose={() => dispatch(setAlert(""))}
          />
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
