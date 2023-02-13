import React from "react";
import styled from "styled-components";

const Logo = () => {
  const AppLogo = styled.div`
    color: white;
    p {
      display: flex;
      align-items: center;
      flex-direction: row;
      font-size: 48px;
      font-weight: 700;
      font-family: DM Sans;
      line-height: 62.5px;
    }
    .love {
      width: 33.33px;
      height: 29.67px;
    }
  `;
  return (
    <AppLogo>
      <p>
        l
        <img className="love" src="/public/love.png" />
        <p>yalbaze</p>
      </p>
    </AppLogo>
  );
};

export default Logo;
