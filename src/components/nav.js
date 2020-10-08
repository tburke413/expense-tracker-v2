import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  background: #23ce6b;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2vh;
  #add-expense {
    font-size: 2.5vh;
    padding: 1vh;
    border-radius: 10px;
    background: #272d2d;
    * {
      color: #23ce6b;
    }
    * + * {
      margin-left: 1vh;
    }
    box-shadow: 0 2px 2px 2px rgba(255, 255, 255, 0.4);
    &:hover {
      filter: brightness(120%);
    }
    &:active {
      transform: translate(0, 2px);
      box-shadow: 0 2px 2px 2px rgba(255, 255, 255, 0);
    }
  }
`;

export default function Nav() {
  return (
    <Styled>
      <button id="add-expense">
        <i className="las la-comment-dollar" />
        <span>Add Expense</span>
      </button>
    </Styled>
  );
}
