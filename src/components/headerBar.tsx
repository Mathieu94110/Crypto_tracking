import React, { useState, useEffect } from 'react'

export function HeaderBar(){
    const [globalsCoinsDatas, setglobalsCoinsDatas] = useState([]);
  
    let globalUrl = "https://api.coingecko.com/api/v3/global";

    
    useEffect(() => {
        fetch(globalUrl)
            .then(res => res.json())
            .then(res => {
               
                let global = res.data;
                 console.log(global)
                setglobalsCoinsDatas(global)
                
            })
    }, []);
      

    return (
 <div style={{ display: "flex", justifyContent: "space-evenly", margin: "20px 0", fontWeight: 600 }}>
          
     <span>Capitalisation globale: {globalsCoinsDatas.markets}  </span>
                <span>Volume en 24h: {globalsCoinsDatas.markets} </span>
                <span>Dominance du BTC: {}  </span>
                <span>Crypto-monnaies: {globalsCoinsDatas.active_cryptocurrencies} </span>
            <span>Marchés: {globalsCoinsDatas.markets} </span>
</div>
    
   
    )
            
        
    }

