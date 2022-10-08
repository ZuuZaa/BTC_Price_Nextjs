import { useState } from "react";
import styles from "../../styles/Home.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
export const CurrencyUnit = () => {


    const units = [
        {
          id: "eur",
          value: "EUR",
          selected: true
        },
        {
          id: "usd",
          value: "USD",
          selected: false
        },
        {
          id: "gbp",
          value: "GBP",
          selected: false
        }
      ]

  // ------state to show select box --------
  const [showOptions, setShowOptions] = useState(false);
  // -------- selected language ------
  const [selecteUnit, setSelectedUnit] = useState(
    units.filter((item) => item.selected)[0]
  );
  // ------- function to open and close select box -------
  const openSelectBox = () => setShowOptions(!showOptions);
  // ------ function to switch language -------
  const switchCurrency = (id) => {
    const currentUnit = units.filter((item) => item.id === id)[0];
    selecteUnit.selected = false;
    currentUnit.selected = true;
    setSelectedUnit(currentUnit);
    setShowOptions(!showOptions);
  };

  return (
    <ul name="units" className={styles.units}>
      {/* ------- selected language ------ */}
      <li onClick={openSelectBox}>
        {selecteUnit.value}
        {showOptions ? <FaAngleUp/> : <FaAngleDown/>} 
      </li>
      {/* -------- language options --------- */}
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