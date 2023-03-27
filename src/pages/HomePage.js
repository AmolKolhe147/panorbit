import React, { useContext, useEffect } from "react";
import { DataContext } from "../api/ContextApi";
import { useParams } from "react-router-dom";
import LeftSideBar from "../common/LeftSideBar";
import AccountInfo from "../common/AccountInfo";
import HomeProfile from "../common/HomeProfile";
import "../styles/accountInfo.css";
import "../styles/homepage.css";
import TopProfile from "../common/TopProfile";

const HomePage = () => {
  //Get data from useContext
  const { userData, filteredUsers, setProfile, profile } = useContext(DataContext);

  const { id } = useParams();
  sessionStorage.setItem("id", id);

  // fetch filtered users data
  useEffect(() => {
    let getID = sessionStorage.getItem("id") || 1;
    filteredUsers(getID);
  }, [id]);

  return (
    <div>
      <div className="homeDiv">
        {/* ------------ Render Common component LeftSideBar --------- */}
        <LeftSideBar />

        {userData && userData.map((el) => (
            <div style={{ width: "80%" }} className="topProfile" key={el.id}>
              {/* ---------- TopProfile component ------- */}
              <div className="profileInfo">
                <h2>Profile</h2>
                {/* <AccountInfo /> */}
                <TopProfile />
              </div>

              <hr />
              {/* ------------- Home Profile component------------- */}
              <div onClick={() => setProfile(false)}>
                <HomeProfile {...el} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
