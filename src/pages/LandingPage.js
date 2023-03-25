import React from "react";
import styled from "styled-components";
import BackgroundSvg from "../assets/BackgroundSvg";
import Profiles from "../common/Profiles";
import "../index.css";

const LandingPage = () => {
  return (
    <div className="container">
      {/* Creating a SVG image  */}
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path
          d="M0, 100 C150, 200 350,
                0 500, 100 L500, 00 L0, 0 Z"
          style={{ stroke: "none", fill: "#6139c8" }}
        ></path>
      </svg>

      <MainPage>
        {/* <BackgroundSvg /> */}
        <Card>
          <Title>Select an account</Title>
          <Profiles />
        </Card>
      </MainPage>
    </div>
  );
};

export default LandingPage;

const MainPage = styled.div`
  background-image: url("./assets/background.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* height: 500px;
    width: 101%; */
  margin: auto;
  margin-left: -7px;
  margin-top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: auto;
    height: 540px;
  overflow-y: auto;
  scrollbar-width: thin; */
`;

const Card = styled.div`
  width: 40%;
  background: #ffffff;
  margin: auto;
  margin-top: 10%;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0px;
  padding-bottom: 20px;
  padding-right: 10px;
  height: 100%;

  @media all and (min-width: 0px) and (max-width: 900px) {
    width: 70%;
    margin-top: 60px;
  }
`;

const Title = styled.h2`
  background: #f6f6f6;
  text-align: center;
  padding: 30px;
  position: relative;
  margin-top: 0px;
  margin-right: -10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
