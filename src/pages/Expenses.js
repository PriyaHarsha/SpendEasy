import React, { useEffect } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import AllExpenses from "../components/AllExpenses";
import { shallowEqual, useSelector } from "react-redux";
import calcTotal from "../components/calcTotal";

const Expenses = () => {
  const { expenses } = useSelector((state) => state.expense, shallowEqual);
  const { limit } = useSelector((state) => state.limit, shallowEqual);
  useEffect(() => {}, [expenses]);
  return (
    <div className="container-fluid border m-3 p-3">
      <div className="row  mt-1 border">
        <Header />
      </div>
      <div className="row">
        <div className="col m-2 ">
          <Menu />
        </div>

        <div className="col-md-9">
          {expenses &&
            expenses.map((item) => <AllExpenses key={item.id} {...item} />)}
        </div>
      </div>

      <div className="row total-title">
        <h4 className="total_title">
          Total Expense:
          <span className="total-expenses"> {calcTotal(expenses)}</span>
        </h4>
      </div>
      <div className="row total-title">
        <h4>
          Total limit: <span className="limit">{limit}</span>
        </h4>
      </div>
    </div>
  );
};

export default Expenses;
