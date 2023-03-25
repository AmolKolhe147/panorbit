import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../api/ContextApi";
import AccountInfo from "../common/AccountInfo";
import LeftSideBar from "../common/LeftSideBar";
import TopProfile from "../common/TopProfile";
import "../index.css";

const Posts = () => {
  const { setProfile } = useContext(DataContext);

  return (
    <div className={"MainPost"}>
      {/* --------- Render Common Component LeftSideBar -------- */}
      <LeftSideBar />

      {/* ---------- Post Page --------- */}
      <div className={"topDiv"}>
        <div className={"profiledata"}>
          <h2>Posts</h2>
          {/* Top Corner Account Details Component */}
          {/* <AccountInfo /> */}
          <TopProfile />
        </div>

        <hr style={{ color: "grey", width: "100%" }} />

        {/* ---------- Main Page Comming Soon screen ------- */}
        <div className={"setScreen"} onClick={() => setProfile(false)}>
          <h1 className={"ComingSoon"}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Posts;
