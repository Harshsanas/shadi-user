import React from "react";
import styled from "styled-components";
export default function Welcome() {
  const PAGE = styled.div`
    position: fixed;
    width: 100vw;
    background-image: url("");
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    height: 100vh;
  `;
  return (
    <div>
      <PAGE>WELCOME TO SHADI.com</PAGE>
    </div>
  );
}
