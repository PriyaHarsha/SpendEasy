import React, { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import FilterExpenses from "../components/FilterExpenses";
import getcategories from "../category";
import { shallowEqual, useSelector } from "react-redux";

const categories = getcategories;

const BillsPayment = () => {
  const [category, setCategory] = useState("Food & Drinks");
  const { expenses } = useSelector((state) => state.expense, shallowEqual);
  const filteredArray = expenses.filter(
    (expense) => expense.category === category
  );
  console.log(filteredArray);
  return (
    <div className="container-fluid border m-3 p-3">
      <div className="row mt-1 border">
        <Header />
      </div>
      <div className="row ">
        <div className="col m-2 ">
          <Menu />
        </div>

        <div className="col-md-9">
          <div className="header">
            <span>Select category: </span>
            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories &&
                categories.map((opt) => {
                  return (
                    <option key={opt.id} value={opt.title}>
                      {opt.title}
                    </option>
                  );
                })}
            </select>
          </div>
          {filteredArray.length > 0 ? (
            <FilterExpenses filteredArray={filteredArray} />
          ) : (
            <h1>No Data Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillsPayment;
