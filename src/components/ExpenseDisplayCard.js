import React from "react";
import calcTotal from "./calcTotal";

export const ExpenseDisplayCard = (props) => {
  const { item, expensesArray } = props;
  const filteredArray = expensesArray.filter(
    (expense) => expense.category === item.title
  );
  const total = calcTotal(filteredArray);

  return (
    <div className="card expenss-card col-md-auto">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle text-body-secondary">Rs. {total}</h6>
      </div>
    </div>
  );
};

export default ExpenseDisplayCard;
