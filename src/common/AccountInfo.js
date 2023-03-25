import React, { useContext, useEffect } from "react";
import { DataContext } from "../api/ContextApi";
import UserDetails from "../pages/UserDetails";
import "../styles/accountInfo.css";

const AccountInfo = () => {
  //Get data from contextApi component using useContext
  const { userData, setProfile, profile, filteredUsers } =
    useContext(DataContext);

  useEffect(() => {
    const getID = sessionStorage.getItem("id") || 1;
    filteredUsers(Number(getID));
  }, []);

  return (
    <div>
      <div onClick={() => setProfile(!profile)} className={"profileInfo"}>
        <img src={userData[0]?.profilepicture} alt="" />
        <p>{userData[0]?.name}</p>
      </div>

      {/* Passing the component to get profile details */}
      <UserDetails />
    </div>
  );
};

export default AccountInfo;
