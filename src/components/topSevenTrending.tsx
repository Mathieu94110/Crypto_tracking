import React, { useEffect, useState } from 'react';


interface ISevenTrends {
    id: string,
    large: string,
    market_cap_rank: number,
    name: string,
    score: 0,
    symbol: string,
    thumb: string
}


export default function TopSevenTrending() {
    const [trendDatas, setsevenTrendDatas] = useState<ISevenTrends[]>([]);

    let sevenTrendUrl = "https://api.coingecko.com/api/v3/search/trending";


    useEffect(() => {
        fetch(sevenTrendUrl)
            .then(res => res.json())
            .then(res => {

                let trends = res.coins;
                console.log(trends)
                setsevenTrendDatas(trends)

            })
    }, []);

    let index = 1;

    return (
        <div style={{ width: '500px', height: '500px', border: "2px solid #000", borderRadius: "2%", background: 'linear-gradient(to bottom left, #f83600, #f9d423)',  color: "#fff", verticalAlign: "middle" }}>
            <h2 style={{ textAlign: "center", margin: "10px 0" }}>Top 7 des tendances cryptos </h2>
            {trendDatas.map((trend: ISevenTrends, index) => <ol style={{ height: "45px", width: "90%", verticalAlign: "middle", border: "1 px solid #000", fontWeight: 600, listStyleType: "none" }}>
                <li><span style={{ marginRight: "20px" }}>{index += 1} </span>  <img src={trend.item.large} alt="logo" width="45px" height="45px" /> {trend.item.name} {trend.item.symbol} {trend.item.market_cap_rank} </li>
            </ol>)}
        </div>
    )
}
