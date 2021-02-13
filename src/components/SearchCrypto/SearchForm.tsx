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
      width: "260px",
      height: "200px",
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
      borderRadius: "50%",
      width: "250px",
      height: "250px",
      border: "2px solid #fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      [theme.breakpoints.up("md")]: {
        border: "2px solid #000",
        borderRadius: "200px",
        width: "300px",
        height: "300px",
      },
    },
    button: {
      boxShadow: "none",
      textTransform: "none",
      fontSize: 16,
      padding: "3px 6px",
      border: "2px solid #fff",
      lineHeight: 1.5,
      backgroundColor: "#F79C5A",
      borderRadius: "30px",
      fontWeight: 600,
      width: "180px",
      color: "#fff",
      [theme.breakpoints.up("md")]: {
        padding: "6px 12px",
        border: "2px solid #000",
      },
    },
    textfield: {
      backgroundColor: "rgba(255,255,255,0.8)",
      [theme.breakpoints.up("md")]: {
        width: "200px",
      },
    },
  })
);

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
              className={classes.textfield}
              value={inputValue}
              onChange={handleChange}
            />
            <button className={classes.button} type="submit" value="Envoyer">
              Rechercher
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
