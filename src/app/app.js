import React from "react";
import GlobalStyles from "./global-styles";
import Nav from "../components/nav";
import BudgetHeader from "../components/budget-header";
import ExpenseList from "../components/expense-list";
export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Nav />
        <BudgetHeader />
        <ExpenseList />
      </div>
    </>
  );
}
