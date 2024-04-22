import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Toastify from "toastify";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import slug from "slug";
import {
  addExpense,
  updateLocalstorage,
} from "../store/actions/expensesAction";
import {
  subtractFromLimit,
  updateLimitLocalstorage,
} from "../store/actions/limitAction";
import getcategories from "../category";

const categories = getcategories;
const AddExpenses = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food & Drinks");
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  let newDate = slug(date.toString().slice(4, 15));

  // const { limit } = useSelector((state) => state.limit, shallowEqual);
  // console.log(limit);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const expenseToBeAdded = { id, name, category, amount, newDate, debit: 1 };
    dispatch(addExpense(expenseToBeAdded));
    dispatch(updateLocalstorage());
    dispatch(subtractFromLimit(expenseToBeAdded.amount));
    dispatch(updateLimitLocalstorage());
    Toastify.success("Expenses added succesfully");
    setName("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className="container-fluid border m-3 p-3">
      <div className="row m-1 border">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-3">
          <Menu />
        </div>
        <div className="col-6">
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h2>Add Expenses</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group mb-3">
              <select
                required
                className="form-select"
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
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 form-control">
              <span>Select Expense date: </span>
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpenses;
