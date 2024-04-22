import React from "react";

export const ExpenseHistory = (props) => {
  return (
    <div className="card history m-2">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-subtitle1 text-body-secondary m-0">
          {props.category}
        </p>
        <h6
          className={`${
            props.debit === 0 ? "credit" : "debit"
          } card-subtitle text-body-secondary m-1`}
        >
          Rs. {props.amount}
        </h6>
        <h6 className="card-subtitle1 text-body-secondary">
          {props.newDate.charAt(0).toUpperCase() + props.newDate.slice(1)}
        </h6>
      </div>
    </div>
  );
};

export default ExpenseHistory;
