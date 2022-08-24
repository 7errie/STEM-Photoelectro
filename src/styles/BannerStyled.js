import styled from "styled-components";
import { rgba } from "polished";

export const BannerDiv = styled.nav`
  background: ${rgba("white", 0.85)};
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 4em;
  top: 0;
  z-index: 11;

  @media screen and (max-width: 960px) {
    transition: background-color 0.4s, transform 0.4s, opacity 0.4s ease-in-out, -webkit-transform 0.4s;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding-top: .75em;
  max-width: 1100px;
`;

export const BannerText = styled.h1`
  font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(to left, #5c001e 80%, #e3a133);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;
