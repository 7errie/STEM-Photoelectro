import styled from "styled-components";
import { rgba } from "polished";

export const BannerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const BannerNav = styled.nav`
  height: 358px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  top: 0;
  z-index: 11;
  background: rgb(54,20,0);
  background: linear-gradient(110deg, rgba(54,20,0,1) 0%, rgba(92,0,30,1) 20%, rgba(227,161,51,1) 100%);

  @media screen and (max-width: 960px) {
    transition: background-color 0.4s, transform 0.4s, opacity 0.4s ease-in-out, -webkit-transform 0.4s;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 188px;
  z-index: 1;
  width: 50%;
  padding-top: .75em;
`;

export const BannerText = styled.h1`
  font-size: 50px;
  font-weight: 600;
  line-height: 1.25em;
  text-align: center;
  background-image: linear-gradient(90deg, #e3a133 1%, #e7e7e7);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;
