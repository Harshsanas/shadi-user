import React from "react";
import styled from "styled-components";
export default function Welcome() {
  const PAGE = styled.div`
    position: fixed;
    width: 100vw;
    background-image: url("https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    display: flex;
    justify-content: center;
    background-size: cover;
    align-items: center;
    font-size: 38px;
    height: 100vh;
  `;
  return (
    <div>
      <PAGE>WELCOME, AND BEST WISHES FOR YOUR BRIGHT FUTURE</PAGE>
    </div>
  );
}
