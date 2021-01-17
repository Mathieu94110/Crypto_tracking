import React, { useState, useEffect } from 'react';
import TextScroller from "./TextScroller";


export function HeaderBar() {

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
    /**/


    let infos = `Capitalisation globale:  ${globalsCoinsDatas.markets}   Volume en 24h:  ${globalsCoinsDatas.active_cryptocurrencies}  Dominance du BTC:  ${globalsCoinsDatas.markets}  Crypto-monnaies:  ${globalsCoinsDatas.active_cryptocurrencies}  Marchés:  ${globalsCoinsDatas.markets}`;
    let infosTwo = infos.toString()
    console.log(infos);
    console.log(infosTwo)
    /**/
    return (

        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "20px 0", fontWeight: 600 }}>
      <TextScroller text={infosTwo} />

        </div>



    )

}
