import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { initExpenses } from "../store/actions/expensesAction";
import { useNavigate } from "react-router-dom";
import { initCredits } from "../store/actions/creditsAction";
import { initLimits } from "../store/actions/limitAction";

const Header = () => {
  const dispatch = useDispatch();
  const { limit } = useSelector((state) => state.limit, shallowEqual);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(initCredits());
    dispatch(initExpenses());
    dispatch(initLimits());
  }, []);
  return (
    <>
      <div className="col-md-5 ">
        <h2 className="mt-3">SPENDWISE</h2>
      </div>
      <div className="col ">
        <h3 className="limit-header mt-3">Limit : {limit}</h3>
      </div>
      <div className="col d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-secondary btn-sm m-1"
          onClick={() => navigate("/setlimit")}
        >
          SET LIMIT
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-sm m-1"
          onClick={() => navigate("/addcredits")}
        >
          LOG CREDIT
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-sm m-1"
          onClick={() => navigate("/addexpenses")}
        >
          LOG EXPENSE
        </button>
      </div>
    </>
  );
};

export default Header;
