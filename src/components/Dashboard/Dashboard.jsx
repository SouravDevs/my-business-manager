import React from "react";
import Styles from "../Dashboard/Dashboard.module.css";
import Card from "../Card/card";

function Dashboard({cardData}) {
  return (
    <div className={Styles["dashboard"]}>
      <h1>Dashboard</h1>
      <Card cardData={cardData} />
    </div>
  );
}

export default Dashboard;
