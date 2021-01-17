
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IAllCoins {
  current_price: number,
  symbol: string,
  image: string,
  id: string,
  market_cap_rank: number,
  name: string,

}


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});



export default function list() {
  const [datas, setDatas] = useState<IAllCoins[]>([]);
  let requestUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"

  useEffect(() => {
    fetch(requestUrl)
      .then(res => res.json())
      .then(res => {

        let allDatas = res;
        console.log(allDatas)
        setDatas(allDatas)

      })
  }, [])
  const classes = useStyles();
  return (

    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      <h1>List</h1>
      {datas.map((data: IAllCoins, index) => {
        return <Card key={index} className={classes.root} style={{ margin: "10px" }}>
          <CardActionArea>
            {data.image && (<CardMedia
              component="img"
              alt={data.name}
              height="80"
              image={data.image}
              title={data.name}
            />)}


            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Symbole :{" "} {data.symbol}
                                Valeur :{" "} {data.current_price} $
                                Rang :{" "} {data.market_cap_rank}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Graphique
        </Button>
            <Button size="small" color="primary">
              En savoir plus
        </Button>
          </CardActions>
        </Card>


      })}

    </div>
  )
}
