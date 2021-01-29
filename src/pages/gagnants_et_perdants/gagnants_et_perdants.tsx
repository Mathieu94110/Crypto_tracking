import React, { FC, useState, useEffect } from "react";
import coinGecko from "../../Api/coinGecko";

const gagnants_et_perdants: FC = () => {
  const [allCryptos, setAllCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async (page: number) => {
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "eur",
          per_page: 250,
          page: page,
        },
      });
      const responseData = response.data;
      const targetDatas = responseData.map((data) => {
        return {
          id: data.id,
          image: data.image,
          symbole: data.symbol,
          market_cap_change_percentage_24h:
            data.market_cap_change_percentage_24h,
        };
      });
      return targetDatas;
    };
    (async () => {
      let results = [];

      for (let page = 0; page < 10; page++) {
        const res = await fetchData(page);
        results.push(...res);
      }
      const sortByMapped = (map, compareFn) => (a, b) =>
        compareFn(map(a), map(b));
      const byValue = (a, b) => b - a;
      const toPrice = (e) => e.market_cap_change_percentage_24h;
      const byPrice = sortByMapped(toPrice, byValue);

      const formatedData = [...results].sort(byPrice);
      const topTen = formatedData.splice(0, 10);

      setAllCryptos(topTen);
    })();
  }, []);

  return (
    <div>
      <header>
        {" "}
        <h1
          style={{
            height: "10vh",
            lineHeight: "10vh",
            verticalAlign: "middle",
            color: "#fff",
            background: "#0063cc",
            width: "100%",
          }}
        >
          Gagnants et perdants
        </h1>
      </header>
      {allCryptos.map((crypto, index) => (
        <div key={"crypto" + index}>
          {crypto.id}
          {crypto.market_cap_change_percentage_24h}
          {crypto.symbol}
          <img src={crypto.image} />
        </div>
      ))}
    </div>
  );
};

export default gagnants_et_perdants;
