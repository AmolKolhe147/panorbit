import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DataContext } from "../api/ContextApi";
import "../index.css";

const Profiles = () => {
  const { data, isLoaded, error, fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  // Show Loading when loading the data
  if (isLoaded) {
    return (
      <div className="ring">
        Loading
        <span></span>
      </div>
    );
  }

  // Show error message when there is some error in API call or something
  if (error) {
    return <div className="error">Server Error....!</div>;
  }

  return (
    <BottomCard>
      {/* Iterate the users using Map method */}
      {data &&
        data.map((el) => (
          <div key={el.id}>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to={`/homepage/${el.id}`}
            >
              {/* Fetch User profile images, Names and Display it */}
              <Mapping>
                <img className="image" src={el.profilepicture} alt="" />
                <p className="name">{el.name}</p>
              </Mapping>
            </NavLink>
            <hr />
          </div>
        ))}
    </BottomCard>
  );
};

export default Profiles;

// CSS using Styled Components

const BottomCard = styled.div`
  margin-top: 0px;
  padding: 0px 30px;
  height: 400px;
  overflow-x: auto;
  background: #ffffff;
  cursor: pointer;
  width: auto;
  height: 340px;
  overflow-y: auto;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey;  */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #3a3d3b;
  }
`;

const Mapping = styled.div`
  display: flex;
  margin-top: 0px;
  align-items: center;
  gap: 20px;
  margin: 0px;
  padding: 0px;

  img {
    border-radius: 50px;
    width: 35px;
    margin: 0px;
    padding: 0px;
  }

  p {
    font-weight: 400;
    font-size: 17px;
    margin: 0px;
    padding: 0px;
    color: rgb(56, 53, 53);
  }

  p:hover {
    color: rgb(158, 56, 56);
  }
`;
