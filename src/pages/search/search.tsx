import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {createStyles,withStyles,makeStyles,Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import coinGecko from "../../Api/coinGecko";


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

/*
//interface pour les données de cryptomonnaies
interface ICrypto {
  id: string;
  umage: string;
  symbol: string;
  current_price:number
}*/

//
const search = () => {
  const classesInput = useStyles();

  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [cryptoState, setCryptoState] = useState({
  id: "string",
  image: "string",
  symbol: "string",
    current_price: "number",
  name:"string"
});




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue)
 
    if (inputValue.length <= 1) {
      setError(true);
      setTimeout(() => { setInputValue(" "); setError(false) }, 2000);
    } else {

      const searchCrypto = async () => {
        try {
          let response = await coinGecko.get(
            'coins/markets/', {
            params: {
              vs_currency: "eur",
              ids: inputValue
            }
          }
          ).then(res => {
            response = res.data[0];
            console.log(response);
            setCryptoState(response)
            console.log(cryptoState.length)
          })
        }
        catch (err) {
          
          console.error(err);
        
        };
 
      
      }
        searchCrypto();
    }
  }

    const handleChange = (e) => {
        
        setInputValue(e.target.value.toLowerCase())
 
    }
    
  const classes = useStylesCard();
    // i have to fix the issue for search.tsx:129 TypeError: Cannot read property 'id' of undefined if input value is no recognized
    
    return (
        <div style={{textAlign:"center"}}>
           <header> <h1 style={{ height: "10vh", lineHeight: "10vh", verticalAlign: "middle", color: "#fff", background: "#0063cc" }}>Rechercher une crypto-monnaie</h1></header>
            <div style={{display:"flex"}}>
            <div style={{ width: "50vw",  height: "90vh", display: "flex",
    flexDirection: "column",
    justifyContent: "center",alignItems:"center" }}>
            <div style={{width:"400px",height:"300px",display:"flex", flexDirection:"column" ,justifyContent:"space-evenly", border:"2px solid #0063cc", borderRadius:"10%"}}>
             <form className={classesInput.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id={error ? "outlined-error-helper-text" : "outlined-basic"} label={error ? "Erreur" : "Nom"} helperText={error ? "Saisie non valide !" : null } variant="outlined" value={inputValue} onChange={handleChange} />
       <BootstrapButton variant="contained" color="primary" disableRipple className={classesInput.margin}  type="submit" value="Envoyer">
        Rechercher
      </BootstrapButton>
                 
            </form>
                </div>
          </div>
          


               <div style={{ width:"50vw",height:"90vh",display: "flex",
    flexDirection: "column",
    justifyContent: "center",alignItems:"center" }}>
                    <div style={{width:"600px",height:"300px",display:"flex", flexDirection:"column" ,justifyContent:"space-evenly", alignItems:"center"}}>
              {cryptoState.id !== "string" ? (                    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cryptoState.image}
          title={cryptoState.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cryptoState.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                        <p>Symbole : {cryptoState.symbol} </p>
                        <p>Prix : {cryptoState.current_price} €</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ajouter à ma liste
        </Button>
        <Button size="small" color="primary">
          En savoir plus
        </Button>
      </CardActions>
                </Card> ) : null}
              
          </div>
                </div>
                </div>
        </div>
  
     
    )
}

export default search;
