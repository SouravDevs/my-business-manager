import React from "react";
import Styles from "../Card/Card.module.css";

function Card({ cardData }) {
  return cardData ? (
    <div className={Styles["card"]}>
      <div className={Styles["cards"]}>
        <h3>Real-State</h3>
        <p>
          <span>$</span>
          {cardData.pReal_state}
        </p>
      </div>
      <div className={Styles["cards"]}>
        <h3>Stock Market</h3>
        <p>
          <span>$</span>
          {cardData.pStock_market}
        </p>
      </div>
      <div className={Styles["cards"]}>
        <h3>Shopping Mall</h3>
        <p>
          <span>$</span>
          {cardData.pShop}
        </p>
      </div>
      <div className={Styles["cards"]}>
        <h3>Resturant</h3>
        <p>
          <span>$</span>
          {cardData.pResturant}
        </p>
      </div>
      <div className={Styles["cards"]}>
        <h3>School</h3>
        <p>
          <span>$</span>
          {cardData.pEducation}
        </p>
      </div>
    </div>
  ) : (
    "Not found"
  );
}

export default Card;
