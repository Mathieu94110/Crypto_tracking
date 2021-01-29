import React, {FC, FormEvent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {createStyles,withStyles,makeStyles,Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {  useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import { GetCryptoCard } from "../../redux/Actions/SearchActions";
//rajout//
import { setAlert } from '../../redux/Actions/alertActions';
import { SearchCryptoData  } from "../../redux/Types/searchCryptoTypes";
import {SearchCryptoLoading} from '../../redux/Actions/SearchActions';
//Style du champs de texte
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor:  '#0063cc',

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);
// style du boutton
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);
//Card

const useStylesCard = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});







const SearchForm: FC = () => {
  const dispatch = useDispatch();
  const classesInput = useStyles();

  const [inputValue, setInputValue] = useState("");
  const cryptoState = useSelector((state: RootStore) => state.favorites.data);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value.toLowerCase())
 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      dispatch(setAlert('Veuillez choisir un nom de crypto-monnaie !'))
    } else {
      dispatch(SearchCryptoLoading())
      dispatch(GetCryptoCard(inputValue))
      setInputValue('');
 
    }

  }
  // test pour voir le state de favorites 
  console.log(cryptoState)
  
  const classes = useStylesCard();






  return (
    <div style={{ textAlign: "center" }}>

      <div style={{ display: "flex" }}>
        <div style={{
          width: "50vw", height: "90vh", display: "flex",
          flexDirection: "column",
          justifyContent: "center", alignItems: "center"
        }}>
          <div style={{ width: "400px", height: "300px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", border: "2px solid #0063cc", borderRadius: "10%" }}>
            <form className={classesInput.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField id="outlined-basic" label="Nom" variant="outlined" value={inputValue} onChange={handleChange} />
              <BootstrapButton variant="contained" color="primary" disableRipple className={classesInput.margin} type="submit" value="Envoyer">
                Rechercher
      </BootstrapButton>
                 
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;