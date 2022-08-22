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
  background-image: radial-gradient(#5c001e 2px, transparent 2px), radial-gradient(#5c001e 2px, transparent 2px);
  background-size: 20px 20px;
  background-position: 0 0, 60px 60px;
  background-color: #fef9f1;
  margin: 10px auto 0;
  border: 1px solid rgba(0, 0, 0, 0.274);
`;

export const TabsRow = styled.div`
  display: flex;
`;

export const Button = styled.button`
  padding: 15px;
  text-align: center;
  width: 50%;
  background: ${(p) => (p.active === true ? rgba("white", 0.85) : rgba("#5c001e", 1))};
  color: ${(p) => (p.active === true ? rgba("black", 0.85) : rgba("white", 0.85))};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  border-bottom: ${(p) => (p.active === 0 ? rgba("black", 0.75) : "transparent")};
  box-sizing: content-box;
  position: relative;
  outline: none;
`;

export const Content = styled.div`
  flex-grow : 1;
`;

export const TabContent = styled.div`
  background: ${rgba("white", 0.85)};
  padding: 20px;
  width: 100%;
  height: 100%;
  display: ${(p) => (p.active ? "block" : "null")};
`;

export const ContentTag = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  word-break: normal;
  p {
    color: #3a3b3c;
    margin: 10px 0px;
  }
  ol > li {
    margin: 20px 40px;
  }
  span {
    color: #0000aa;
    font-weight: bold;
  }
`;

export const SimulationTab = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  margin: 20px 0px;
`;

export const SimulationButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(p) => (p.active ? "#5c001e" : "white")};
  color: ${(p) => (p.active ? "white" : "#5c001e")};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5c001e;
  border-radius: 3px;
`;