import { atom } from "recoil";

export const budget = atom({
  key: "budget",
  default: 500
});

export const categories = atom({
  key: "categories",
  default: []
});

export const expenseList = atom({
  key: "expenseList", // unique ID (with respect to other atoms/selectors)
  default: [] // default value (aka initial value)
});
