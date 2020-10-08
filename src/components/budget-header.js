import React from "react";
import styled from "styled-components";
import Chart from "./chart";

const Styled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-bottom: 4vh;
  .budget-info {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    * + * {
      margin-top: 4.5vh;
    }
  }
  .budget-graph {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .number {
      font-size: 5vh;
      font-weight: 700;
    }
  }
`;

export default function BudgetHeader() {
  return (
    <Styled>
      <div className="budget-info">
        <div className="card">
          <h2>Monthly Budget</h2>
          <div className="number">$1000</div>
        </div>
        <div className="remaining">
          <div className="card">
            <h2>Remaining Budget</h2>
            <div className="number">$1000</div>
          </div>
        </div>
      </div>
      <div className="budget-graph">
        <Chart />
      </div>
    </Styled>
  );
}
