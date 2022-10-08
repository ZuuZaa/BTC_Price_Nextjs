import styles from "../styles/Home.module.scss";
import { Line } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import Chart from 'chart.js/auto';
import { chartData } from "../utils";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { CurrencyUnit } from "../components/CurrencyUnit";

Chart.register(CategoryScale);

function Home({ btcData, chartItemsData }) {
  const prices = chartItemsData.prices;
  const chartItems = { index: [], price: [] };
  prices.map((item) => {
    chartItems.index.push(item[0]);
    chartItems.price.push(item[1]);
  });
  const [ unit, setUnit] = useState("EUR");
  const [ rate, setRate] = useState("")
  useEffect(()=> {
    setRate(btcData.bpi[unit].rate)
  },[unit])

  const units = [
    {
      id: "eur",
      value: "EUR"
    },
    {
      id: "usd",
      value: "USD"
    },
    {
      id: "gbp",
      value: "GBP"
    }
  ]
const getSelectValue = (e) => setUnit(e.target.value)
  const lastRate = chartItems.price[chartItems.price.length - 1]
  const previousRate = chartItems.price[chartItems.price.length - 2]

  return (
    <div className={styles.container}>
      <div className={styles.charContainer}>
      


      <h1>Bitcoin to 
        <CurrencyUnit/>
      </h1>
      <h3>
        {rate}
        {lastRate > previousRate ? <FaArrowUp/> : <FaArrowDown/>}
      </h3>
      <small>{btcData.time.updated}</small>
        <Line
          data={chartData(chartItems.index, chartItems.price)}
          width={4}
          height={2}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const chartItemsRes = await fetch(
    "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=1m"
  );
  const btcRes = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const chartItemsData = await chartItemsRes.json();
  const btcData = await btcRes.json();

  return {
    props: {
      chartItemsData,
      btcData,
    },
  };
}

export default Home;
