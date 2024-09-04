import React, { useEffect, useRef } from "react";
import Sytles from "../Charts/Charts.module.css";

function Charts({ cardData }) {
  // Target Value
  const targetValue = 5000;

  // Properties Value
  const realValue = (cardData.pReal_state / targetValue) * 1;
  const stockValue = (cardData.pStock_market / targetValue) * 1;
  const shopValue = (cardData.pShop / targetValue) * 1;
  const resturantValue = (cardData.pResturant / targetValue) * 1;
  const educationValue = (cardData.pEducation / targetValue) * 1;

  // Ref Value
  const realRef = useRef("");
  const stockRef = useRef("");
  const shopRef = useRef("");
  const resturantRef = useRef("");
  const educationRef = useRef("");

  useEffect(() => {
    realRef.current.style.height = `${realValue}%`;
    stockRef.current.style.height = `${stockValue}%`;
    shopRef.current.style.height = `${shopValue}%`;
    resturantRef.current.style.height = `${resturantValue}%`;
    educationRef.current.style.height = `${educationValue}%`;
  });
  return (
    <div className={Sytles["charts"]}>
      <h2 className={Sytles["title"]}>Chart</h2>
      <div className={Sytles["charts-container"]}>
        <div className={Sytles["chart"]} title="Real State">
          <div className={Sytles["chart-line"]}>
            <div className={Sytles["child-chart-line"]} ref={realRef}></div>
          </div>
          <p>Real State</p>
        </div>
        <div className={Sytles["chart"]} title="Stock Market">
          <div className={Sytles["chart-line"]}>
            <div className={Sytles["child-chart-line"]} ref={stockRef}></div>
          </div>
          <p>Stock Market</p>
        </div>
        <div className={Sytles["chart"]} title="Shopping Mall">
          <div className={Sytles["chart-line"]}>
            <div className={Sytles["child-chart-line"]} ref={shopRef}></div>
          </div>
          <p>Shopping Mall</p>
        </div>
        <div className={Sytles["chart"]} title="Resturant">
          <div className={Sytles["chart-line"]}>
            <div
              className={Sytles["child-chart-line"]}
              ref={resturantRef}></div>
          </div>
          <p>Resturant</p>
        </div>
        <div className={Sytles["chart"]} title="School">
          <div className={Sytles["chart-line"]}>
            <div
              className={Sytles["child-chart-line"]}
              ref={educationRef}></div>
          </div>
          <p>School</p>
        </div>
      </div>
    </div>
  );
}

export default Charts;
