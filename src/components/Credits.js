import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  subtractFromLimit,
  updateLimitLocalstorage,
} from "../store/actions/limitAction";
import {
  deleteCredit,
  updateCreditLocalstorage,
} from "../store/actions/creditsAction";

const Credits = (props) => {
  const dispatch = useDispatch();
  const { credits } = useSelector((state) => state.credit, shallowEqual);

  const deleteHandler = (id) => {
    let findItem = credits.find((item) => item.id == id);

    dispatch(subtractFromLimit(findItem.amount));
    dispatch(updateLimitLocalstorage());
    dispatch(deleteCredit(id));
    dispatch(updateCreditLocalstorage());
  };

  return (
    <div className="card history">
      <div className="card-body">
        <h5 className="card-title1">Name: {props.name}</h5>
        <div className="d-flex justify-content-between">
          <p className="card-subtitle text-body-secondary">
            Category: {props.category}
          </p>
          <div className="card-subtitle4 text-body-secondary">
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

export default Credits;
