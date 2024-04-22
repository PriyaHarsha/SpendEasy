import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const TotalExpense = () => {
  const { expenses } = useSelector((state) => state.expense, shallowEqual);
  return <div>TotalExpense</div>;
};

export default TotalExpense;
