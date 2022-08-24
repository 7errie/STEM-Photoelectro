import styled from "styled-components";
import { rgba } from "polished";

export const HeaderDiv = styled.nav`
  background: #5c001e;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 1em;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: background-color 0.4s, transform 0.4s, opacity 0.4s ease-in-out, -webkit-transform 0.4s;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  z-index: 1;
  width: 100%;
  padding-top: .75em;
  max-width: 1100px;
`;

export const CInfo = styled.div`
  display: block;
  color: ${rgba("white", 0.85)};
  font-family: Open Sans,Arial,sans-serif;
  font-weight: 600;
  padding-bottom: .75em;
`;
