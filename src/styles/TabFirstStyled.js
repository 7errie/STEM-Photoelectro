import styled, { css } from "styled-components";

export const TabContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px auto 0;
  border: 1px solid rgba(0, 0, 0, 0.274);
`;

export const ItemContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;


export const FormItem = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

export const ButtonNext = styled.button`
  display: ${(props) => (props.index < 6 ? "inline-block" : "none")};
  background: white;
  color: #5c001e;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5c001e;
  border-radius: 3px;
`;

export const ButtonPrev = styled.button`
  display: ${(props) => (props.index >= 0 ? "inline-block" : "none")};
  background: white;
  color: #5c001e;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5c001e;
  border-radius: 3px;
`;