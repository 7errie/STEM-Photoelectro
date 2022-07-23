import styled, { css } from "styled-components";
import { rgba } from "polished";

export const Tab = styled.div`
  background: 000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  height: 400px;
  background: #f1f1f1;
  margin: 10px auto 0;
  word-break: break-all;
  border: 1px solid rgba(0, 0, 0, 0.274);
`;

export const TabsRow = styled.div`
  display: flex;
`;

export const transition = css`
  transition: transform 0.45s;
`;

export const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0%;
  width: 33.33%;
  height: 4px;
  background: #F9F871;
  transform: translateX(${(p) => (p.active === 0 ? 0 : p.active * 100)}%);
  ${transition}
`;

export const Button = styled.button`
  padding: 15px;
  text-align: center;
  width: 50%;
  background: ${(p) => (p.active === 0 ? rgba("gray", 0.075) : rgba("white", 0.25))};
  cursor: pointer;
  border-bottom: ${(p) => (p.active === 0 ? rgba("black", 0.25) : "transparent")};
  box-sizing: content-box;
  position: relative;
  outline: none;
`;

export const Content = styled.div`
  flex-grow : 1;
`;

export const TabContent = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: ${(p) => (p.active ? "block" : "null")};
`;

export const SimulationButton = styled.button`
  display: block;
  justify-content: center;
  background-color: ${rgba("black", 0.75)};
  margin: 50px 450px;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
`;