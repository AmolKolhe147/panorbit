import React, { useContext } from "react";
import { DataContext } from "../api/ContextApi";
import AccountInfo from "../common/AccountInfo";
import LeftSideBar from "../common/LeftSideBar";
import TopProfile from "../common/TopProfile";
import "../index.css";

const Todo = () => {
  // useContext to get data from context Api
  const { setProfile } = useContext(DataContext);

  return (
    <div className={"MainPost"}>
      {/* --------- Common component LeftSideBar -------- */}

      <LeftSideBar />

      {/* ---------- Top profile Account details --------- */}
      <div className={"topDiv"}>
        <div className={"profiledata"}>
          <h2>Gallery</h2>

          {/* Account Info for User*/}
          {/* <AccountInfo /> */}
          <TopProfile />
        </div>

        <hr style={{ color: "grey", width: "100%" }} />

        {/* ---------- Main Comming Soon Page Screen ------- */}
        <div className={"setScreen"} onClick={() => setProfile(false)}>
          <h1 className={"ComingSoon"}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Todo;
