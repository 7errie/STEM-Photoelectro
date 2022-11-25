import React from "react";
import {
  BannerDiv,
  BannerNav,
  BannerContainer,
  BannerText
} from "../styles/BannerStyled";

const Banner = () => {

  return (
    <>
      <BannerDiv>
        <BannerNav>
          <BannerContainer>
            <BannerText>Hydrogen Production: <br />Photoelectrochemical Water Splitting</BannerText>
          </BannerContainer>
        </BannerNav>
      </BannerDiv>
    </>
  );
};

export default Banner;
