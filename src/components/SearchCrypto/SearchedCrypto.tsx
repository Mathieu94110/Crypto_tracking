import React, {FC } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//rajout//
import { setAlert } from '../../redux/Actions/alertActions';
import { SearchCryptoData  } from "../../redux/Types/searchCryptoTypes";
import {addCrypto } from "../../redux/Actions/AddAndDeleteActions";
import { connect } from 'react-redux';





const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

interface SearchCryptoProps {
  data: SearchCryptoData
}

const searchedCrypto: FC<SearchCryptoProps> = ({data}) => {

  const classes = useStyles();

    return (
        <div style={{textAlign:"center",width:"50vw"}}>
           
            <div style={{display:"flex"}}>
          
<div style={{ width:"50vw",height:"90vh",display: "flex",
    flexDirection: "column",
    justifyContent: "center",alignItems:"center" }}>
                    <div style={{width:"600px",height:"300px",display:"flex", flexDirection:"column" ,justifyContent:"space-evenly", alignItems:"center"}}>
                            
  <Card className={classes.root}>
                <CardActionArea>
                  
        <CardMedia
          style={{height: 140}}
          image={Object.values(data)[0].image} //changement des cryptoState en data
          title={Object.values(data)[0].id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Object.values(data)[0].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                        <span>Symbole : {Object.values(data)[0].symbol} </span>
                        <span>Prix : {Object.values(data)[0].current_price} €</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=> data.addCrypto()}>
          Ajouter à ma liste
        </Button>
        <Button size="small" color="primary">
          En savoir plus
        </Button>
      </CardActions>
                </Card> 

    
              
          </div>
                </div>
                </div>
        </div>
  
     
    
    )
}



const mapDispatchToProps = (dispatch) => {
  return {
    addCrypto: ()=> dispatch(addCrypto())
  }
}



export default connect(null,mapDispatchToProps)(searchedCrypto);
