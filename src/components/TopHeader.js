import React from "react";
import {
  HeaderDiv,
  HeaderContainer,
  CInfo
} from "../styles/TopHeaderStyled";

const TopHeader = ({ toggle }) => {

  return (
    <>
      <HeaderDiv>
        <HeaderContainer>
          <CInfo>Interactive Photoelectrolysis by Dr. Safwan</CInfo>
        </HeaderContainer>
      </HeaderDiv>
    </>
  );
};

export default TopHeader;
