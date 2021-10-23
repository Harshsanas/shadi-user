import React,{useContext} from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {AuthContext} from "../AuthContext/AuthContext"
const NAVBAR = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color:#eb0062;
   .navbar-text {
    cursor: pointer;
    color: white;
    font-size: 22px;
    text-decoration: none;
  }
`;
export default function Navbar() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <NAVBAR>
        <div>
          <NavLink to="/" className="navbar-text">
            SHAADI.COM
          </NavLink>
        </div>
        <div>
          <NavLink to="/userDetails" className="navbar-text">
            User Details
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" className="navbar-text">
            {!isAuth ? "Login" : "Logout"}
          </NavLink>
        </div>
      </NAVBAR>
    </div>
  );
}