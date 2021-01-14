import React, { useState, useEffect } from 'react'

export const HeaderBar = () => {
    const [globalsCoinsDatas, setglobalsCoinsDatas] = useState<any[]>([]);
  
    let globalUrl = "https://api.coingecko.com/api/v3/global";

    useEffect(() => {

        fetch(globalUrl)
            .then(res => res.json())
            .then(res => {
               console.log(res)
             setglobalsCoinsDatas(res)
                
            })

        
    })

    return(<div>
         
                <div style={{ display: "flex", justifyContent: "space-evenly", margin: "20px 0", fontWeight: 600 }}>
             <span>Capitalisation globale: {}  </span>
                <span>Volume en 24h: </span>
                <span>Dominance du BTC:  </span>
                <span>Crypto-monnaies: </span>
                <span>Marchés: </span>
    
  
            
            </div>
        
       
                                    
            
                </div>)
 
                
            
        
    }

