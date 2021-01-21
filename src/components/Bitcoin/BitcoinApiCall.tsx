import React, { useState, useEffect } from 'react';
import coinGecko from '../../Api/coinGecko';

const BitcoinApiCall = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await coinGecko.get("/coins/markets/", {
                params: {
                    vs_currency: "eur",
                    ids: "bitcoin",
                },
            });
                console.log(response.data)
        }
        
        fetchData();

    }, []);
    return <div></div>
};

export default BitcoinApiCall;