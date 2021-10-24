import React,{useContext} from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {AuthContext} from "../AuthContext/AuthContext"
const NAVBAR = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color:#F50057;
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
            shaadi.com
          </NavLink>
        </div>
        <div>
          <NavLink to="/userdetails" className="navbar-text">
            user details
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" className="navbar-text">
            {!isAuth ? "login" : "logout"}
          </NavLink>
        </div>
      </NAVBAR>
    </div>
  );
}