import React, { useContext } from "react";
import { DataContext } from "../api/ContextApi";
import Profiles from "../common/Profiles";
import style from "../styles/userdetails.module.css";
import { Link } from "react-router-dom";
import "../styles/userDetails.css";

const UserDetails = () => {
  // Get the data from contextAPI with useContext
  const { userData, setProfile, profile } = useContext(DataContext);

  const handleClick = () => {
    setProfile(false);
    sessionStorage.clear("id");
  };

  return (
    <div className={style.user} style={{ display: profile ? "flex" : "none" }}>
      <div className="profileInfo">
        <img src={userData[0]?.profilepicture} alt="" />
        <p>{userData[0]?.name}</p>
        <p>{userData[0]?.email}</p>
      </div>

      <hr />

      {/* Rendering Profiles component */}
      <div className="profiles" onClick={() => setProfile(false)}>
        <Profiles />
      </div>

      <Link to="/">
        <button onClick={handleClick} className="signOut">
          Sign out
        </button>
      </Link>
    </div>
  );
};

export default UserDetails;
