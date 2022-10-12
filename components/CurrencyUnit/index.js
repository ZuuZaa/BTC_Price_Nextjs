import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { units } from "../../utils";
import { useSelector } from "react-redux";
import { BTC_SELECTORS } from "../../store/btc";


export const CurrencyUnit = ({setRate}) => {

  const [unit, setUnit] = useState("EUR");
  const [showOptions, setShowOptions] = useState(false);
  const [selecteUnit, setSelectedUnit] = useState(
    units.filter((item) => item.selected)[0]
  );
  const btc = useSelector(BTC_SELECTORS.getBTC);
  useEffect(() => {
    setRate(btc.rates[unit].rate);
  }, [unit]);

  const openSelectBox = () => setShowOptions(!showOptions);

  const switchCurrency = (id) => {
    const currentUnit = units.filter((item) => item.id === id)[0];
    selecteUnit.selected = false;
    currentUnit.selected = true;
    setSelectedUnit(currentUnit);
    setShowOptions(!showOptions);
    setUnit(currentUnit.value)
  };

  return (
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
  );
};