import React, { useEffect, useState } from "react";
import Styles from "../SearchBar/SearchBar.module.css";

function SearchBar({ userData, setProfileData, setCardData }) {
  const [id, setId] = useState("");

  const handleSearch = () => {
    const findID = userData.find((data) => data.id === id);
    if (findID) {
      const name = findID.name;
      const id = findID.id;
      const title = findID.title;
      const real_state = findID.income.real_state
      const stock_market = findID.income.stock_market
      const shopping_mall = findID.income.shopping_mall
      const resturant = findID.income.resturant
      const school = findID.income.school

     

      setProfileData({
        pId: id,
        pName: name,
        pTitle: title,
      });

      setCardData({
        pReal_state: real_state,
        pStock_market: stock_market,
        pShop: shopping_mall,
        pResturant: resturant,
        pEducation: school
      })
    } else {
      alert("Not found.");
      setId('')
    }
  };

  const refreshPage = () => {
    location.reload();
  };

  return (
    <div className={Styles["searchbar"]}>
      <label htmlFor="">Search By ID : </label>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter your ID"
      />
      <button className={Styles["search-btn"]} onClick={handleSearch}>
        Search
      </button>
      <button className={Styles["refresh-btn"]} onClick={refreshPage}>
        Refresh
      </button>
    </div>
  );
}

export default SearchBar;
