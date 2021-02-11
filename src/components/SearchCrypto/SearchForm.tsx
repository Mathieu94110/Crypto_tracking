import React, { FC, FormEvent, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import { GetCryptoCard } from "../../redux/Actions/SearchActions";
//rajout//
import { setAlert } from "../../redux/Actions/alertActions";
import { SearchCryptoData } from "../../redux/Types/searchCryptoTypes";
import { SearchCryptoLoading } from "../../redux/Actions/SearchActions";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

//styles
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
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    page: {
      textAlign: "center",
    },
    form: {
      width: "300px",
      height: "220px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center", //center the form at the beginning on the page
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        width: "50vw",
        height: "100%",
      },
    },
    formContent: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      border: "2px solid #0063cc",
      borderRadius: "10%",
      [theme.breakpoints.up("md")]: {
        width: "400px",
        height: "300px",
      },
    },
  })
);

//

//Style du champs de texte
const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",

    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const SearchForm: FC = () => {
  const dispatch = useDispatch();
  const classesInput = useStyles();

  const [inputValue, setInputValue] = useState("");
  const cryptoState = useSelector((state: RootStore) => state.favorites.data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value.toLowerCase());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      dispatch(setAlert("Vous n'avez rien renseigné !"));
    } else {
      dispatch(SearchCryptoLoading());
      dispatch(GetCryptoCard(inputValue));
      setInputValue("");
    }
  };
  // test pour voir le state de favorites
  console.log(cryptoState);

  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.form}>
        <div className={classes.formContent}>
          <form
            className={classesInput.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Nom"
              variant="outlined"
              value={inputValue}
              onChange={handleChange}
            />
            <BootstrapButton
              variant="contained"
              color="primary"
              disableRipple
              className={classesInput.margin}
              type="submit"
              value="Envoyer"
            >
              Rechercher
            </BootstrapButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
