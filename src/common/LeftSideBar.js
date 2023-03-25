import React, { useState, useEffect } from "react";
import styled from "styled-components";
import style from "../assets/sidebar.module.css";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const LeftSideBar = () => {
  const [id, setId] = useState("1");

  useEffect(() => {
    setId(sessionStorage.getItem("id") || 1);
  }, []);

  return (

    <div className={"MainDiv"}>
      <NavLink to={`/homepage/${id}`} className={({ isActive }) => isActive ? style.active : style.notActive}>
        <p>Profile</p>
      </NavLink>

      <hr />

      <NavLink to="/post" className={({ isActive }) => isActive ? style.active : style.notActive } >
        <p>Posts</p>
      </NavLink>

      <hr />

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>Gallery</p>
      </NavLink>

      <hr />

      <NavLink
        to="/todo"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>ToDo</p>
      </NavLink>
    </div>
  );
};

export default LeftSideBar;
