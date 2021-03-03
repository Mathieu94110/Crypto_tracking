import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import AlertError from "../../components/SearchCrypto/Alert";
import SuccessAlert from "../../components/SearchCrypto/SuccessAlert";
import SearchedCrypto from "../../components/SearchCrypto/SearchedCrypto";
import SearchForm from "../../components/SearchCrypto/SearchForm";
import { setAlert, setAlertSuccess } from "../../redux/Actions/alertActions";
import LeftNav from "../../components/Nav/LeftNav";
const search_crypto = require("../../images/crypto_search.jpg");

//styles

import { makeStyles, createStyles, Theme, Paper } from "@material-ui/core/";
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
      textAlign: "center",
      display: "column",
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${search_crypto})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    },
    NavBar: {
      height: "10vh",
    },
    alerts: {
      width: "100%",
      height: "40px",
      [theme.breakpoints.up("md")]: {
        height: "10vh",
      },
    },
    emptyAlert: {
      width: "100%",
      height: "10vh",
    },

    formAndResult: {
      display: "block",
      justifyContent: "space-evenly",
      [theme.breakpoints.up("md")]: {
        alignItems: "center",
        display: "flex",
        height: "calc(80vh - 10vh)",
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
      <Paper className={classes.NavBar}>
        <LeftNav />
      </Paper>

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
        <>
          <SearchForm />
        </>
        <>
          {loading ? (
            <h2 style={{ margin: "auto" }}>Chargement...</h2>
          ) : (
            SearchCryptoData && <SearchedCrypto data={SearchCryptoData} />
          )}
        </>
      </div>
    </div>
  );
};

export default Search;
