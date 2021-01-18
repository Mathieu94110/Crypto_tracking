import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import bitcoin_background from "../images/bitcoin_background.jpg";



const BitCoinDatas = () => {
  const [bitcoinDatas, setBitcoinsDatas] = useState({
      market_data: "string",
  name: "string",
  market_cap: "string",
  image:"string",
  large: "string",
   eur: "number" 
  });

    let bitcoinsDatasUrl = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=fr&tickers=true&market_data=true";


  
 useEffect(() => {
        fetch(bitcoinsDatasUrl)
            .then(res => res.json())
            .then(res => {

                let globalBitcoinDatas = res;
              console.log(globalBitcoinDatas)
              console.log(typeof(globalBitcoinDatas.market_data.market_cap.eur));
              console.log(globalBitcoinDatas.image.large.toString())
                setBitcoinsDatas(globalBitcoinDatas)

            })
    }, []);




  return (
    <div style={{ width: '500px', height: '500px', border: "2px solid #000", borderRadius: "2%", verticalAlign: "middle", color: "#fff",    backgroundImage: `url(${bitcoin_background})`, backgroundSize: 'cover', backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }}>
    

 <div style={{ display: "flex", flexDirection:"column", justifyContent:"space-evenly"}}>
      
      </div>
     

     <h2>{bitcoinDatas.name}</h2> 
                   <img src={bitcoinDatas.image.large} width="45px" height="45px" alt="bitcoin" />
          <p>En circulation : {bitcoinDatas.market_data.circulating_supply}</p>
      
            </div>
      
     )
                                                                                                                                 
};

export default BitCoinDatas;

/*
  <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="coinlist-image" src={coin.image} alt="" />
        <span className="text-decoration-none">{coin.current_price}</span>

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )}
          {coin.price_change_percentage_24h}
        </span>
        <i
          onClick={(e) => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
          className="delete-icon far fa-times-circle text-danger"
        ></i>
      </li>
    </Link>


 
   

 
  let bitcoinsMarketoNEuros = bitcoinDatas.market_data.market_cap.eur;
      
     <h2>{bitcoinDatas.name}</h2> 
                   <img src={bitcoinDatas.image.large} width="45px" height="45px" alt="bitcoin" />
          <p>En circulation : {bitcoinDatas.market_data.circulating_supply}</p>
        <p>Capitalisation boursière : {bitcoinDatas.market_data.market_cap.eur } </p>
        <p>Record historique : {bitcoinDatas.market_data.ath.eur}</p>
        <p>Date : {bitcoinDatas.market_data.ath_date.eur}</p>








*/