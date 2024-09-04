import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import UserProfile from "../User Profile/UserProfile";
import { data } from "../../Database/data";
import Dashboard from "../Dashboard/Dashboard";
import Charts from "../Charts/Charts";

function Home() {
  const [userData, setUserData] = useState(data);
  // Profile Data
  const [profileData, setProfileData] = useState({
    pId: "",
    pName: "",
    pTitle: "",
  });

  // Card Data
  const [cardData, setCardData] = useState({
    pReal_state: "",
    pStock_market: "",
    pShop: "",
    pResturant: "",
    pEducation: "",
  });

  return (
    <>
      <SearchBar
        userData={userData}
        setProfileData={setProfileData}
        setCardData={setCardData}
      />
      <UserProfile profileData={profileData} />
      <Dashboard cardData={cardData} />
      <Charts cardData={cardData} />
    </>
  );
}

export default Home;
