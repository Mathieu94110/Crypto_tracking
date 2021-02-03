import React, { useState, useEffect } from "react";
import bitcoin_background from "../../images/bitcoin_background.jpg";
import coinGecko from "../../Api/coinGecko";
import BitcoinDetailPage from "./BitcoinDetailPage";

const CoinsDatas = () => {
  const [allCoinsDatas, setallCoinsDatas] = useState({
    name: "string",
    image: "string",
    circulating_supply: "number",
    market_cap: "number",
    total_supply: "number",
    total_volume: "number",
    low_24h: "number",
    high_24h: "number",
  });

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "eur",
          id: "bitcoin",
        },
      });
      let data = response.data[0];
      console.log();
      setallCoinsDatas(data);
    };

    fetchData(allCoinsDatas);
  }, []);

  return (
    <div
      style={{
        height: "500px",
        border: "2px solid #000",
        borderRadius: "2%",
        verticalAlign: "middle",
        color: "#fff",
        backgroundImage: `url(${bitcoin_background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <h2>
          {allCoinsDatas.name} :{" "}
          <img
            src={allCoinsDatas.image}
            width="45px"
            height="45px"
            alt="bitcoin"
          />
        </h2>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Capitalisation : </span>
            <span>{allCoinsDatas.market_cap}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            Jeton : <span>{allCoinsDatas.total_supply}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            Volume(24H) : <span>{allCoinsDatas.total_volume}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            Max 24h : <span>{allCoinsDatas.high_24h}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            Min 24h : <span>{allCoinsDatas.low_24h}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>En circulation : {allCoinsDatas.circulating_supply}</p>
          </div>
        </div>
      </div>

      <BitcoinDetailPage />
    </div>
  );
};

export default CoinsDatas;
