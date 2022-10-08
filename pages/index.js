import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { chartData, getTimeFromDate, units } from "../utils";
import { FaArrowDown, FaArrowUp, FaAngleDown, FaAngleUp } from "react-icons/fa";

Chart.register(CategoryScale);

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

const Home = ({ btcData, chartItemsData }) => {
  const prices = chartItemsData.prices;
  const chartItems = { index: [], price: [] };
  prices.map((item) => {
    chartItems.index.push(getTimeFromDate(item[0]));
    chartItems.price.push(item[1]);
  });
  const [unit, setUnit] = useState("EUR");
  const [rate, setRate] = useState("");
  useEffect(() => {
    setRate(btcData.bpi[unit].rate);
  }, [unit]);

  const [showOptions, setShowOptions] = useState(false);
  const [selecteUnit, setSelectedUnit] = useState(
    units.filter((item) => item.selected)[0]
  );
  const openSelectBox = () => setShowOptions(!showOptions);
  const switchCurrency = (id) => {
    const currentUnit = units.filter((item) => item.id === id)[0];
    selecteUnit.selected = false;
    currentUnit.selected = true;
    setSelectedUnit(currentUnit);
    setShowOptions(!showOptions);
    setUnit(currentUnit.value)
  };

  //console.log(Object.keys(btcData.bpi))

  const lastRate = chartItems.price[chartItems.price.length - 1];
  const previousRate = chartItems.price[chartItems.price.length - 2];

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <div className={styles.header}>
          <h1>
            Bitcoin to
            <ul name="units" className={styles.units}>
              <li onClick={openSelectBox}>
                {selecteUnit.value}
                {showOptions ? <FaAngleUp /> : <FaAngleDown />}
              </li>
              <li className={styles.optionsWrapper}>
                <ul className={styles.options}>
                  {showOptions &&
                    units.map((item) => (
                      <li
                        value={item.value}
                        key={item.id}
                        className="option"
                        onClick={() => switchCurrency(item.id)}
                      >
                        {item.value}
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </h1>
          <h3>
            {rate}
            {lastRate > previousRate ? <FaArrowUp /> : <FaArrowDown />}
          </h3>
          <small>{btcData.time.updated}</small>
        </div>

        <Line
          data={chartData(chartItems.index, chartItems.price)}
          width={4}
          height={2}
        />
      </div>
    </div>
  );
}

export default Home;
