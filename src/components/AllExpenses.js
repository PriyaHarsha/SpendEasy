import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  deleteExpense,
  updateLocalstorage,
} from "../store/actions/expensesAction";
import {
  addToLimit,
  updateLimitLocalstorage,
} from "../store/actions/limitAction";

const AllExpenses = (props) => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expense, shallowEqual);

  const deleteHandler = (id) => {
    let findItem = expenses.find((item) => item.id == id);

    dispatch(addToLimit(findItem.amount));
    dispatch(updateLimitLocalstorage());
    dispatch(deleteExpense(id));
    dispatch(updateLocalstorage());
  };

  return (
    <div className="card history">
      <div className="card-body">
        <h5 className="card-title1">Name: {props.name}</h5>
        <div className="d-flex justify-content-between">
          <p className="card-subtitle text-body-secondary">
            Category: {props.category}
          </p>
          <div className="card-subtitle2 text-body-secondary">
            Amount: Rs. {props.amount}
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="card-subtitle1 text-body-secondary">
            Date: {props.newDate.slice(0, 16)}
          </h6>
          <div>
            <button
              className="delete border"
              id={props.id}
              onClick={(e) => {
                deleteHandler(e.target.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllExpenses;
