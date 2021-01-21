import React, { useEffect, useState } from "react";
import HistoryChart from "./HistoryChart";
import coinGecko from "../../Api/coinGecko";


const BitcoinDetailPage = () => {
 

  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map(el => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year] = await Promise.all([
        coinGecko.get(`/coins/bitcoin/market_chart/`, {
          params: {
            vs_currency: "eur",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/bitcoin/market_chart/`, {
          params: {
            vs_currency: "eur",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/bitcoin/market_chart/`, {
          params: {
            vs_currency: "eur",
            days: "365",
          },
        }),
     
      ]);
      console.log(day);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
     
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div style={{ textAlign:"center",fontWeight:600}}>Chargement en cours</div>;
    }
    return (
      <div>
        
        <HistoryChart data={coinData} />
     
      </div>
    )
  }

  return renderData();

}

export default BitcoinDetailPage;
