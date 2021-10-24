import React,{useContext} from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {AuthContext} from "../AuthContext/AuthContext"
const NAVBAR = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f50057;
  .navbar-text {
    cursor: pointer;
    color: white;
    font-size: 22px;
    text-decoration: none;
  }

  button {
    color: white;
    font-size: 22px;
    border: none;
    cursor: pointer;
    background-color:transparent;
  }
`;
export default function Navbar() {
  const { isAuth,setIsAuth } = useContext(AuthContext);

  const handleLogout =(e)=>{
        setIsAuth(!isAuth)
  }

  return (
    <div>
      <NAVBAR>
        <div>
          <NavLink to="/" className="navbar-text">
            Shaadi.com
          </NavLink>
        </div>
        <div>
          <NavLink to="/userdetails" className="navbar-text">
            User Details
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" className="navbar-text">
            {!isAuth ? <button>Login</button> : <button onClick={handleLogout}>Logout</button>}
          </NavLink>
        </div>
      </NAVBAR>
    </div>
  );
}