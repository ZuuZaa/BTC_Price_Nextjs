import { CurrencyUnit } from "../CurrencyUnit";
import styles from "../../styles/Home.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BTC_SELECTORS } from "../../store/btc";


export const Header = () => {
  const [rate, setRate] = useState("no data");
  const btc = useSelector(BTC_SELECTORS.getBTC);
  const time = btc.updated_time;
  console.log("btc",btc)
  console.log(time)
  //const loading = useSelector(BTC_SELECTORS.getBTCLoading);
  //console.log("header loading" ,loading)

  return (
    <div className={styles.header}>
      <h1>
        Bitcoin to
        <CurrencyUnit setRate={setRate}/>
      </h1>
      <h3>
        {rate}
        {/* {lastRate > previousRate ? <FaArrowUp /> : <FaArrowDown />} */}
      </h3>
      <small>{btc.updated_time}</small>
    </div>
  );
};

