import React from "react";

const DisplayFilter = (props) => {
  const { item } = props;
  console.log("ok");
  return (
    <div>
      <h5 className="card-title">{item.name}</h5>
      <p className="card-subtitle1 text-body-secondary m-0">{item.category}</p>
      <h6
        className={`${
          item.debit === 0 ? "credit" : "debit"
        } card-subtitle text-body-secondary m-1`}
      >
        Rs. {item.amount}
      </h6>
      <h6 className="card-subtitle1 text-body-secondary">{item.newDate}</h6>
    </div>
  );
};

export default DisplayFilter;
