import styles from "../styles/Home.module.scss";

export const Header = ({ btcData, chartItemsData }) => {
  return (
    <div className={styles.header}>
      <h1>
        Bitcoin to
        <CurrencyUnit />
      </h1>
      <h3>
        {rate}
        {lastRate > previousRate ? <FaArrowUp /> : <FaArrowDown />}
      </h3>
      <small>{btcData.time.updated}</small>
    </div>
  );
};
