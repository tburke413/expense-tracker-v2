import React from "react";
import styled from "styled-components";
import ExpenseLine from "./expense-line";

const Styled = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin: 0 2vh;
  border-radius: 10px;
  padding: 1vh;
  min-height: 30vh;
`;

export default function Nav() {
  return (
    <Styled>
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
      <ExpenseLine />
    </Styled>
  );
}
