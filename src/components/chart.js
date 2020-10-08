import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  * + * {
    margin-top: 4vh;
  }
`;
const data = {
  labels: ["Food", "Entertainment", "Dog Treats"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default () => {
  return (
    <Styled>
      <h2>Category Spend</h2>
      <Pie width={220} height={220} legend={false} data={data} />
    </Styled>
  );
};
