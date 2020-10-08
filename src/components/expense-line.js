import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin: 1vh 0.5vh;
  border-radius: 10px;
  padding: 2vh;
  min-height: 3vh;
  display: grid;
  grid-template-columns: 1fr 3fr repeat(2, 2fr) 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div4 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .div5 {
    grid-area: 1 / 5 / 2 / 6;
  }
`;

export default function ExpenseLine() {
  return (
    <Styled>
      <div>
        <i class="las la-cloud-meatball"></i>
      </div>
      <div>description</div>
      <div>timestamp</div>
      <div>$1000</div>
      <div>
        <i class="las la-minus-circle"></i>
      </div>
    </Styled>
  );
}
