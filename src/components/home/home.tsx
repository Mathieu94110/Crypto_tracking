import React,{useState, useEffect}  from "react";
import { findDOMNode } from "react-dom";

export const Home = () => {
    const [coins, setCoins] = useState([]);
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";
   
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(res => {
               
             setCoins(res)
                
        })

        
    })

    
    return (
        <div>
            <h1>Crypto</h1>
            <div style={{display:"flex", flexDirection:"column"}}>
                  {coins.map(coin => {
                      return <div>{coin.symbol}</div>
            })}
            </div>
          

    </div>
    )   
}



