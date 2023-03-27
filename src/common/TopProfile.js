import React, { useContext, useEffect } from "react";
import { DataContext } from "../api/ContextApi";
import UserDetails from "../pages/UserDetails";
import style from "../assets/topprofile.module.css";

const TopProfile = () => {
  // Get data from useContext
  const { userData, setProfile, profile, filteredUsers } =
    useContext(DataContext);

  // fetch filteredUsers data
  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    filteredUsers(Number(ID));
  }, []);

  return (
    <div>
      <div onClick={() => setProfile(!profile)} className={style.profile}>
        <img src={userData[0]?.profilepicture} alt="" />
        <p>{userData[0]?.name}</p>
      </div>
      {/* -------- Render User Details Component----- */}
      <UserDetails />
    </div>
  );
};

export default TopProfile;
