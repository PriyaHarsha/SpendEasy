import Header from "../components/Header";
import Menu from "../components/Menu";
import {
  addCredits,
  updateCreditLocalstorage,
} from "../store/actions/creditsAction";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Toastify from "toastify";
import {
  addToLimit,
  updateLimitLocalstorage,
} from "../store/actions/limitAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import slug from "slug";

const Addcredits = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  let newDate = slug(date.toString().slice(4, 15));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const creditToBeAdded = { id, name, amount, newDate, debit: 0 };
    dispatch(addCredits(creditToBeAdded));
    dispatch(updateCreditLocalstorage());
    dispatch(addToLimit(creditToBeAdded.amount));
    dispatch(updateLimitLocalstorage());
    Toastify.success("Credit added succesfully");
    setName("");
    setAmount("");
  };
  return (
    <div className="container-fluid border m-3 p-3">
      <div className="row  m-1 border">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-3 ">
          <Menu />
        </div>

        <div className="col-md-9">
          <div className="col-md-9">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <h2>Add Credit</h2>
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

              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 form-control">
                <span>Select Expense date: </span>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcredits;
